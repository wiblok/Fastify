const fastify = require("fastify")();

fastify.get("/", async (request, reply) => {
  // リクエストヘッダーの取得
  const headers = request.headers;

  // クエリパラメータの取得
  const queryParam = request.query.param;

  // ボディデータの取得
  const body = request.body;

  const response = {
    headers: headers,
    queryParam: queryParam,
    body: body,
  };

  return response;
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error("サーバーの起動中にエラーが発生しました:", err);
    process.exit(1);
  }
  console.log("サーバーがポート3000で起動しました");
});
