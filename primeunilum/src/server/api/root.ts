/* import { postRouter } from "~/server/api/routers/post"; */
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { customerRouter } from "./routers/customer";
import { supplierRouter } from "./routers/supplier";
import { productRouter } from "./routers/product";
import { invoiceRouter } from "./routers/invoice";
import { dataRouter } from "./routers/data";
/* import { actionRouter } from "./routers/actions"; */

/** 
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  customer: customerRouter,
  supplier: supplierRouter,
  product: productRouter,
  invoice: invoiceRouter,
  data: dataRouter,
 /*  post: postRouter, */
 /*  action: actionRouter */
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
