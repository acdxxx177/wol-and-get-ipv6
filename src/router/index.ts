import Koa from "koa";

import home from "./home";
import getIp from "./getIp";
import wol from "./wol";
import ping from "./ping";

// 加载路由
export default (app: Koa) => {
  app.use(home.routes()).use(home.allowedMethods());
  app.use(getIp.routes()).use(getIp.allowedMethods());
  app.use(wol.routes()).use(wol.allowedMethods());
  app.use(ping.routes()).use(ping.allowedMethods());
};
