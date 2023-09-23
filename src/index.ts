import { addAlias } from "module-alias";
addAlias("@root", __dirname); //别名配置
import Koa from "koa";
import logger from "koa-logger";
import json from "koa-json";
import bodyparser from "koa-bodyparser";
import koaStatic from "koa-static";
import views from "@ladjs/koa-views";
import dayjs from "dayjs";
import router from "@root/router/index";

// new一个koa实例
const app = new Koa();
// 使用中间件
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  }),
);
app.use(json());
app.use(
  logger((str) => {
    const time = dayjs().format("YYYY-MM-DD HH:mm:ss");
    console.log(time + str);
  }),
);

const render = views(__dirname + "/views", {
  extension: "ejs",
  map: {
    html: "ejs",
  },
});
app.use(render);

app.use(
  koaStatic(__dirname + "/public", {
    index: "index.html", // 默认为true  访问的文件为index.html  可以修改为别的文件名或者false
    hidden: false, // 是否同意传输隐藏文件
    defer: true, // 如果为true，则在返回next()之后进行服务，从而允许后续中间件先进行响应
  }),
);

router(app);

app.listen(7000, () => {
  console.log("server is running at http://localhost:7000");
});
