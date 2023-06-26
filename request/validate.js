const fastify = require("fastify")();

fastify.post(
  "/users",
  {
    schema: {
      body: {
        type: "object",
        properties: {
          name: { type: "string" },
          age: { type: "number" },
        },
        required: ["name", "age"],
      },
    },
  },
  async (request, reply) => {
    const { name, age } = request.body;

    // バリデーションが成功した場合の処理
    reply.send({ message: "User created successfully", name, age });
  }
);

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server is running on port 3000");
});
