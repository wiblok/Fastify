const fastify = require("fastify")({ logger: true });
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "db",
  user: "root",
  password: "root",
  database: "test",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

fastify.get("/", async (request, reply) => {
  reply.send({ hello: "world" });
});

fastify.post("/items", (request, reply) => {
  const { name, price } = request.body;
  db.query(
    "INSERT INTO items (name, price) VALUES (?, ?)",
    [name, price],
    (error, results) => {
      if (error) throw error;
      reply
        .code(201)
        .send({ message: `Item added with ID: ${results.insertId}` });
    }
  );
});

fastify.get("/items", (request, reply) => {
  db.query("SELECT * FROM items", (error, results) => {
    if (error) throw error;
    reply.send(results);
  });
});

fastify.put("/items/:id", (request, reply) => {
  const id = parseInt(request.params.id);
  const { name, price } = request.body;
  db.query(
    "UPDATE items SET name = ?, price = ? WHERE id = ?",
    [name, price, id],
    (error, results) => {
      if (error) throw error;
      reply.send({ message: `Item with ID: ${id} has been updated.` });
    }
  );
});

fastify.delete("/items/:id", (request, reply) => {
  const id = parseInt(request.params.id);
  db.query("DELETE FROM items WHERE id = ?", [id], (error, results) => {
    if (error) throw error;
    reply.send({ message: `Item with ID: ${id} has been deleted.` });
  });
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 }, "0.0.0.0");
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
