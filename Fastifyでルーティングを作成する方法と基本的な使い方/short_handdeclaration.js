const fastify = require("fastify")({
  logger: true,
  ignoreTrailingSlash: true,
});

fastify.get("/hello", {
  schema: {
    querystring: {
      name: { type: "string" },
      excitement: { type: "integer" },
    },
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: function (request, reply) {
    reply.send({ message: "Hello, World!" });
  },
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
