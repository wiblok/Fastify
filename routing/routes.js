const fastify = require("fastify")();

fastify.route({
  method: "GET",
  url: "/hello",
  handler: async (request, reply) => {
    return "Hello, Fastify!";
  },
});

fastify.route({
  method: "POST",
  url: "/users",
  handler: async (request, reply) => {
    const user = request.body;
    // ユーザーの作成処理など...
    return { id: 1, name: user.name };
  },
});

fastify.route({
  method: "PUT",
  url: "/users/:id",
  handler: async (request, reply) => {
    const userId = request.params.id;
    const user = request.body;
    // ユーザーの更新処理など...
    return { id: userId, name: user.name };
  },
});

fastify.route({
  method: "DELETE",
  url: "/users/:id",
  handler: async (request, reply) => {
    const userId = request.params.id;
    // ユーザーの削除処理など...
    return { message: `User ${userId} has been deleted.` };
  },
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error("サーバーの起動中にエラーが発生しました:", err);
    process.exit(1);
  }
  console.log("サーバーがポート3000で起動しました");
});
