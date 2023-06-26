const fastify = require("fastify")();

const options = {};
fastify.register(require("./directory"), options);

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server is running on port 3000");
});
