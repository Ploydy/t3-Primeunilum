/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Supplierstable } from "~/app/lib/model";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";



export const supplierRouter = createTRPCRouter({
  getAllSupplierData: publicProcedure.query( async ({ ctx }) => {
    const customers = await ctx.db.supplier.findMany ({
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
});
