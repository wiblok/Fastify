// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
  ignoreTrailingSlash: true,
});

// registers both "/bar" and "/bar/"
fastify.get("/helloworld", function(req, reply) {
  reply.send("hellowrold");
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
