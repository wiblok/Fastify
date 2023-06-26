module.exports = function (fastify, options, done) {
  fastify.get("/hello", (request, reply) => {
    reply.send({ message: "Hello from the plugin!" });
  });

  done(); // プラグインの登録完了を示す
};
