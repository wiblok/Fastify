// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
  ignoreTrailingSlash: true,
});

const opts = {
  method: "GET",
  url: "/route",
  schema: {
    querystring: {
      name: { type: "string" },
      excitement: { type: "integer" },
    },
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "string" },
        },
      },
    },
  },
  handler: function(request, reply) {
    reply.send({ hello: "world" });
  },
};
fastify.route(opts);

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
