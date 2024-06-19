/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { ProductsTable } from "~/app/lib/model";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";



export const productRouter = createTRPCRouter({
  getProducts: publicProcedure.query( async ({ ctx }) => {
    const products = await ctx.db.products.findMany ({
      select: {
        id: true,
        brandname: true,
        name: true,
        price: true,
        reviews: true,
        quantity: true,
        category: true,
      },
    });
    const result: ProductsTable[] = products.map(p => ({
      id: p.id,
      name: p.name,
      brandname: p.brandname,
      price: p.price,
      reviews: p.reviews,
      quantity: p.quantity,
      category: p.category
    }) as unknown as ProductsTable );
    return result;
  }),

/*   getProductbyName: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.db.products.findFirstOrThrow({
      select: {
        name: true
      }
    })
  })
 */
});
