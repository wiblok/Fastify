const fastify = require("fastify")();

const myPlugin = (fastify, options, done) => {
  function myMiddleware(request, reply, next) {
    // ミドルウェアの処理
    console.log("ミドルウェアの実行");
    next();
  }

  fastify.addHook("preHandler", myMiddleware);

  done();
};

fastify.register(myPlugin);

fastify.get("/", (request, reply) => {
  reply.send({ message: "Hello, World!" });
});

fastify.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server is running on port 3000");
});
