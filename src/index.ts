import { Hono } from "hono";
import { poweredBy } from "hono/powered-by";

const app = new Hono();

app.use("*", poweredBy());

app.get("/", (c) => {
  return c.text("Welcome to my workers!!");
});

app.get("/weather/:city", async (c) => {
  const cityName = c.req.param("city");
  const version = c.req.query("v") ?? "1";
  const verNum = parseInt(version);
  // バリデーションチェック
  if (verNum <= 0 || verNum > 3) {
    c.status(400);
    return c.text("パラメータは1から3の整数で指定してください。");
  }
  const response = await fetch(`https://v${version}.wttr.in/${cityName}.png`);
  const imageBuffer = await response.arrayBuffer();
  return new Response(imageBuffer, {
    status: 200,
    headers: {
      "Content-Type": "image/jpeg",
    },
  });
});

app.get("/moon", async (c) => {
  const date = c.req.query("date") ? new Date(c.req.query("date")) : new Date();
  // YYYY-MM-DD形式の文字列を生成
  const dateStr = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(
    -2
  )}-${("0" + date.getDate()).slice(-2)}`;
  // バリデーションチェック
  if (
    !dateStr ||
    !/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(dateStr)
  ) {
    c.status(400);
    return c.text("パラメータはYYYY-MM-DDの形式で指定してください。");
  }
  const response = await fetch(`https://wttr.in/Moon@${dateStr}.png`);
  const imageBuffer = await response.arrayBuffer();
  return new Response(imageBuffer, {
    status: 200,
    headers: {
      "Content-Type": "image/jpeg",
    },
  });
});

export default app;
