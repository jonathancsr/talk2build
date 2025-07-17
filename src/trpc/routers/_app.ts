import { messagesRouter } from "@/modules/messages/server/procedures";

import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  messages: messagesRouter,
  // fragments: fragmentsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
