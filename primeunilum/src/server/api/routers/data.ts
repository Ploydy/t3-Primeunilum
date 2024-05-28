/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { formatCurrency } from '~/app/lib/utils';
import { Revenue, type Customers } from '~/app/lib/model';
import { unstable_noStore as noStore } from 'next/cache';
import { type Status } from '@prisma/client';


const ITEMS_PER_PAGE = 6;

export const dataRouter = createTRPCRouter({

  fetchRevenue: publicProcedure.query(async ({ ctx }) => { 
    noStore();
    try {
      console.log('Fetching revenue data...');
      const data = await ctx.db.invoices.findMany();
      console.log('Data fetch completed.');
      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }),

  fetchLatestInvoices: publicProcedure.query(async ({ ctx }) => {
    noStore();
    try {
      const data = await ctx.db.invoices.findMany({
        select: {
          amount: true,
          customer: {
            select: {
              name: true,
              email: true,
            },
          },
          id: true,
        },
        orderBy: {
          date: 'desc',
        },
        take: 5,
      });

      const latestInvoices = data.map((invoice) => ({
        ...invoice,
        amount: formatCurrency(invoice.amount),
        customer: {
          name: invoice.customer.name,
          email: invoice.customer.email,
        },
      }));
      return latestInvoices;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest invoices.');
    }
  }),

  fetchCardData: publicProcedure.query(async ({ ctx }) => {
    noStore();
    try {
      const [invoiceCount, customerCount, invoiceStatus] = await Promise.all([
        ctx.db.invoices.count(),
        ctx.db.customers.count(),
        ctx.db.invoices.groupBy({
          by: ['status'],
          _sum: {
            amount: true,
          },
        }),
      ]);

      const totalPaidInvoices = formatCurrency(
        invoiceStatus.find((status) => status.status === 'Paid')?._sum.amount ?? 0
      );
      const totalPendingInvoices = formatCurrency(
        invoiceStatus.find((status) => status.status === 'Pending')?._sum.amount ?? 0
      );

      return {
        numberOfCustomers: customerCount,
        numberOfInvoices: invoiceCount,
        totalPaidInvoices,
        totalPendingInvoices,
      };
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch card data.');
    }
  }),

  fetchFilteredInvoices: publicProcedure
    .input(
      z.object({
        query: z.string(),
        currentPage: z.number(),
      })
    )
    .query(async ({ input, ctx }) => {
      const { query, currentPage } = input;
      const offset = (currentPage - 1) * ITEMS_PER_PAGE;

      try {
        const invoices = await ctx.db.invoices.findMany({
          where: {
            OR: [
              { customer: { name: { contains: query, mode: 'insensitive' } } },
              { customer: { email: { contains: query, mode: 'insensitive' } } },
              { amount: { equals: parseFloat(query) } },
              { date: { equals: new Date(query) } },
              { status: query as Status }, 
            ],
          },
          select: {
            id: true,
            amount: true,
            date: true,
            status: true,
            customer: {
              select: {
                name: true,
                email: true,
              },
            },
          },
          orderBy: {
            date: 'desc',
          },
          take: ITEMS_PER_PAGE,
          skip: offset,
        });

        return invoices;
      } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch invoices.');
      }
    }),

    fetchInvoicesPages: publicProcedure
    .input(z.string())
    .query(async ({ input: query, ctx }) => {
      noStore();
      try {
        const count = await ctx.db.invoices.count({
          where: {
            OR: [
              { customer: { name: { contains: query, mode: 'insensitive' } } },
              { customer: { email: { contains: query, mode: 'insensitive' } } },
              { amount: { equals: isNaN(parseFloat(query)) ? undefined : parseFloat(query) } },
              { status: query as Status },  // Use 'equals' for enum fields
              // Adjusted date filter
              { date: { equals: new Date(query).toISOString().split('T')[0] } }, // Example: equals for exact match
              // You might want to use other date comparison filters like gt, lt, etc., based on your requirement
            ],
          },
        });

        const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
        return totalPages;
      } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of invoices.');
      }
    }),

  fetchInvoiceById: publicProcedure
    .input(z.string())
    .query(async ({ input: id, ctx }) => {
      noStore();
      try {
        const data = await ctx.db.invoices.findUnique({
          where: { id },
          select: {
            id: true,
            customer_id: true,
            amount: true,
            status: true,
          },
        });

        if (data) {
          return {
            ...data,
            amount: data.amount / 100, // Convert amount from cents to dollars
          };
        } else {
          throw new Error('Invoice not found');
        }
      } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch invoice.');
      }
    }),

  fetchCustomers: publicProcedure.query(async ({ ctx }) => {
    noStore();
    try {
      const data = await ctx.db.customers.findMany({
        select: {
          id: true,
          name: true,
        },
        orderBy: {
          name: 'asc',
        },
      });

      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch all customers.');
    }
  }),

  fetchFilteredCustomers: publicProcedure
    .input(z.string())
    .query(async ({ input: query, ctx }) => {
      noStore();
      try {
        const data = await ctx.db.customers.findMany({
          where: {
            OR: [
              { name: { contains: query, mode: 'insensitive' } },
              { email: { contains: query, mode: 'insensitive' } },
            ],
          },
          include: {
            invoice: true,
          },
          orderBy: {
            name: 'asc',
          },
        });

        const customers = data.map((customer) => ({
          ...customer,
          total_invoices: customer.invoice.length,
          total_pending: formatCurrency(
            customer.invoice
              .filter((inv) => inv.status === 'Pending')
              .reduce((sum, inv) => sum + inv.amount, 0)
          ),
          total_paid: formatCurrency(
            customer.invoice
              .filter((inv) => inv.status === 'Paid')
              .reduce((sum, inv) => sum + inv.amount, 0)
          ),
        }));

        return customers;
      } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch customer table.');
      }
    }),

  getUser: publicProcedure
    .input(z.string())
    .query(async ({ input: email, ctx }) => {
      noStore();
      try {
        const customer = await ctx.db.customers.findUnique({
          where: { email },
        });
        if (customer) {
          return customer as unknown as Customers;
        } else {
          throw new Error('User not found');
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
      }
    }),
});