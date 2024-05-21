/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { CustomersTable } from "~/app/definitions/model";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";



export const customerRouter = createTRPCRouter({
  getAllCustomerData: publicProcedure.query( async ({ ctx }) => {
    const customers = await ctx.db.customer.findMany ({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    const result: CustomersTable[] = customers.map(c => ({
      id: c.id,
      name: c.name,
      email: c.email
    }) as CustomersTable );
    return result;
  }),
});
