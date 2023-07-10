const fastify = require("fastify")({ logger: true });
const session = require("@fastify/session");
const cookie = require("@fastify/cookie");
const formbody = require("@fastify/formbody");
const view = require("@fastify/view");
const ejs = require("ejs");

fastify.register(cookie);
fastify.register(session, {
  secret: "a secret with minimum length of 32 characters",
  cookie: {
    secure: false,
  },
  saveUninitialized: false,
});
fastify.register(formbody);

fastify.register(view, {
  engine: {
    ejs: ejs,
  },
});

fastify.get("/", (req, reply) => {
  reply.view("/views/index.ejs");
});

fastify.get("/dashboard", (req, reply) => {
  if (req.session.user) {
    reply.view("/views/dashboard.ejs", { username: req.session.user });
  } else {
    reply.redirect("/");
  }
});

fastify.post("/login", (req, reply) => {
  const { username, password } = req.body;

  // ここでユーザー名とパスワードの検証を行う（省略）
  req.session.user = username;

  reply.redirect("/dashboard");
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`);
});
