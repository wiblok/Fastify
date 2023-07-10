const fastify = require("fastify")();
const session = require("@fastify/session");
const cookie = require("@fastify/cookie");

fastify.register(cookie);
fastify.register(session, {
  secret: "a secret with minimum length of 32 characters",
});

fastify.get("/", (request, reply) => {
  // セッションの取得
  const sess = request.session;

  const response = {
    session: sess,
  };

  reply.send(response);
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err;
  console.log("Server is running on port 3000");
});
