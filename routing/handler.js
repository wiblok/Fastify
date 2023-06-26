const fastify = require("fastify")();

const helloHandler = async (request, reply) => {
  return "Hello, Fastify!";
};

const createUserHandler = async (request, reply) => {
  const user = request.body;
  // ユーザーの作成処理など...
  return { id: 1, name: user.name };
};

const updateUserHandler = async (request, reply) => {
  const userId = request.params.id;
  const user = request.body;
  // ユーザーの更新処理など...
  return { id: userId, name: user.name };
};

const deleteUserHandler = async (request, reply) => {
  const userId = request.params.id;
  // ユーザーの削除処理など...
  return { message: `User ${userId} has been deleted.` };
};

fastify.get("/hello", helloHandler);
fastify.post("/users", createUserHandler);
fastify.put("/users/:id", updateUserHandler);
fastify.delete("/users/:id", deleteUserHandler);

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error("サーバーの起動中にエラーが発生しました:", err);
    process.exit(1);
  }
  console.log("サーバーがポート3000で起動しました");
});
