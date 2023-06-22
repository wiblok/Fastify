const fastify = require("fastify");

const app = fastify();

app.get("/", (request, reply) => {
  reply.send("Hello, Fastify!");
});

app.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
