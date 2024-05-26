/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { z } from "zod";
import { InvoicesTable } from "~/app/lib/model";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const invoiceRouter = createTRPCRouter({

  getAllInvoices: publicProcedure.query(async ({ ctx }) => {
    const invoices = await ctx.db.invoices.findMany ({
      select: {
        id: true,
        customer: true,
        customer_id: true,
        date: true,
        amount: true,
        status: true,
      },
    });
    const result: InvoicesTable[] = invoices.map(i => ({
      id: i.id,
      name: i.customer,
      customer_id: i.customer_id,
      date: i.date,
      amount: i.amount,
      status: i.status
    }) as unknown as InvoicesTable );
    return result
  }),


  /* authenticate: publicProcedure
  .input(z.object({email: z.string() }))
  .query(({input }) => {
    return {
      greeting: `Hello ${input.email}`
    }
  }),

  createInvoice: publicProcedure
  .input(z.object(
    { email: z.string(),
      name: z.string(), 
      amount: z.number(),
      status: z.string(),
    }
  ))
  .mutation(async ({ ctx, input }) => {
    
    return ctx.db.invoices.create({
      data: {
        status: input.status,
        amount: input.amount,
      },
  }),
 */
});
