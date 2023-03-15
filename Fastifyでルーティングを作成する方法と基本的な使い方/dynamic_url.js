const fastify = require("fastify")();

fastify.get("/users/:userId", async (request, reply) => {
  const userId = request.params.userId;
  reply.send({ message: `User ID is ${userId}` });
});

fastify.listen(3000, (err, address) => {
  if (err) throw err;
  console.log(`Server listening on ${address}`);
});
