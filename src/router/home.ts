import type { Context } from "koa";
import Router from "koa-router";
const router = new Router();
import { hostList } from "@root/service/hostList";

router.get("/", async (ctx: Context) => {
  await ctx.render("index", { hostList });
});
export default router;
