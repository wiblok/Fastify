const fastify = require("fastify")({ logger: true });

fastify.get("/", async function (request, reply) {
  return { root: true };
});
fastify.get("/hello", async (request, reply) => {
  return { message: "Hello, World!" };
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
