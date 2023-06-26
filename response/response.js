const fastify = require("fastify")();

fastify.get("/", async (request, reply) => {
  // JSONレスポンスの生成
  const jsonResponse = {
    message: "This is a JSON response",
  };
  reply.send(jsonResponse);
  // HTMLレスポンスの生成
  const htmlResponse = "<h1>This is an HTML response</h1>";
  reply.type("text/html").send(htmlResponse);
  // レスポンスヘッダーの設定
  reply.header("Custom-Header", "Custom Value");
  // ステータスコードの設定
  reply.status(201).send("Created");
  // リダイレクトの実行
  reply.redirect("/new-location");
  // エラーレスポンスの生成
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
