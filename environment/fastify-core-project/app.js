const fastify = require("fastify");

const app = fastify();

app.get("/", (request, reply) => {
  reply.send("Hello, Fastify!");
});

app.listen(3000, (err) => {
  if (err) {
    console.error("サーバーの起動中にエラーが発生しました:", err);
    process.exit(1);
  }
  console.log("サーバーがポート3000で起動しました");
});
