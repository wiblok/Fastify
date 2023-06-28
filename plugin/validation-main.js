const fastify = require("fastify")();
const validationPlugin = require("./validation-plugin");

// プラグインの登録
fastify.register(validationPlugin);

// ルートハンドラの定義
fastify.post(
  "/hello",
  { preValidation: fastify.validateRequest },
  (request, reply) => {
    const { name, age } = request.body;
    reply.send({ message: `Hello ${name}! Your age is ${age}.` });
  }
);

// サーバーの起動
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server is running on port 3000");
});
