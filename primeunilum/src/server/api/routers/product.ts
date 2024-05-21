/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { ProductsTable } from "~/app/definitions/model";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";



export const productRouter = createTRPCRouter({
  getAllProductsData: publicProcedure.query( async ({ ctx }) => {
    const products = await ctx.db.product.findMany ({
      select: {
        id: true,
        name: true,
        category: true,
      },
    });
    const result: ProductsTable[] = products.map(p => ({
      id: p.id,
      name: p.name,
      category: p.category
    }) as unknown as ProductsTable );
    return result;
  }),
});
