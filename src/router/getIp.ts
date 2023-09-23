import type { Context } from "koa";
import type { IPv6AddressType } from "@root/type/HostAddress";
import Router from "koa-router";
import hostIpStore from "@root/utils/store/hostIpStore";
const router = new Router();

router.post("/Ipv6", (ctx: Context) => {
  const rep = <IPv6AddressType>ctx.request.body;
  hostIpStore().setData(rep.hostname, rep.ipv6list);
  ctx.body = {
    msg: "success",
  };
});

router.get("/Ipv6", (ctx: Context) => {
  const { hostname } = ctx.request.query;
  if (!hostname) {
    ctx.body = {
      msg: "error",
      err: "hostname is undefined",
    };
    return;
  }
  const ipv6 = hostIpStore().getData(hostname as string);
  ctx.body = {
    msg: "success",
    list: ipv6 ? ipv6 : [],
  };
});

export default router;
