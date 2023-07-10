const fastify = require("fastify")({ logger: true });
const axios = require("axios");

fastify.get("/data", async (request, reply) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    reply.send(response.data);
  } catch (error) {
    reply.status(500).send({ message: "Error occurred" });
  }
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`);
});
