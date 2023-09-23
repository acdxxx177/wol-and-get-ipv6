import type { Context } from "koa";
import Router from "koa-router";
import CreatPing from "@root/service/ping/CreatPing";
import { hostList } from "@root/service/hostList";
const router = new Router();

router.get("/ping", async (ctx: Context) => {
  const { hostname } = ctx.request.query;
  let msg,
    err: string = "";
  if (!hostname) {
    msg = "error";
    err = "hostname is undefined";
  } else {
    const ping = new CreatPing();
    try {
      const host = hostList.find((host) => host.hostname === hostname);
      msg = await ping.ping(host?.ip);
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
