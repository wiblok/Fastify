const fastify = require("fastify")();

// JSONレスポンスの生成
fastify.get("/json", async (request, reply) => {
  const jsonResponse = {
    message: "This is a JSON response",
  };
  reply.send(jsonResponse);
});

// HTMLレスポンスの生成
fastify.get("/html", async (request, reply) => {
  const htmlResponse = "<h1>This is an HTML response</h1>";
  reply.type("text/html").send(htmlResponse);
});

// レスポンスヘッダーの設定
fastify.get("/header", async (request, reply) => {
  reply.header("Custom-Header", "Custom Value").send("Header set");
});

// ステータスコードの設定
fastify.get("/status", async (request, reply) => {
  reply.status(201).send("Created");
});

// リダイレクトの実行
fastify.get("/redirect", async (request, reply) => {
  reply.redirect("/new-location");
});

// エラーレスポンスの生成
fastify.get("/error", async (request, reply) => {
  const errorResponse = {
    error: "An error occurred",
  };
  reply.status(500).send(errorResponse);
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error("サーバーの起動中にエラーが発生しました:", err);
    process.exit(1);
  }
  console.log("サーバーがポート3000で起動しました");
});
