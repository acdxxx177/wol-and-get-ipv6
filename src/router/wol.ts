import type { Context } from "koa";
import Router from "koa-router";
import CreatWol from "@root/service/wol/CreatWol";
const router = new Router();

router.get("/wol", async (ctx: Context) => {
  const { hostname } = ctx.request.query;
  let msg,
    err: string = "";
  if (!hostname) {
    msg = "error";
    err = "hostname is undefined";
  } else {
    const wol = new CreatWol();
    try {
      msg = await wol.wakeUp(hostname as string);
    } catch (error) {
      msg = "error";
      if (error instanceof Error) {
        err = error.message;
      } else {
        err = "未知错误";
      }
    }
  }
  ctx.body = {
    msg,
    err,
  };
});

export default router;
