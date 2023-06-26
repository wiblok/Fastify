const fastify = require("fastify")();
const middlewares = require("./middlewares");

fastify.addHook("preHandler", middlewares.myMiddleware);

fastify.get("/", (request, reply) => {
  reply.send({ message: "Hello, World!" });
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server is running on port 3000");
});
