"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return { root: true };
  });
  fastify.get("/hello", async function (request, reply) {
    return { message: "Hello, World!" };
  });
};
