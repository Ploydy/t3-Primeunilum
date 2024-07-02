/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { z } from "zod";
import { Supplierstable } from "~/app/lib/model";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";



export const supplierRouter = createTRPCRouter({
  getAllSupplier: publicProcedure.query( async ({ ctx }) => {
    const customers = await ctx.db.suppliers.findMany ({
      select: {
        id: true,
        name: true,
        email: true,
        contact: true,
        status: true
      },
    });
    const result: Supplierstable[] = customers.map(s => ({
      id: s.id,
      name: s.name,
      email: s.email,
      contact: s.contact,
      status: s.status
    }) as unknown as Supplierstable );
    return result;
  }),

  createSupplier: publicProcedure
  .input(z.object(
    { 
      name: z.string(), 
      email: z.string(), 
      contact: z.number(), 
      status: z.string(), 
    }
  ))
  .mutation(async ({ ctx, input }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return ctx.db.suppliers.create({
      data: {
        name: input.name,
        email: input.email,
        contact: input.contact,
        status: input.status,
      },
    });
  }),
});
