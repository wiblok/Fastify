"use strict";

module.exports = async function(fastify, opts) {
  module.exports.options = {
    logger: true,
    ignoreTrailingSlash: true,
  };
  fastify.get("/helloworld", function(req, reply) {
    reply.send("hellowrold");
  });

  fastify.get("/", async function(request, reply) {
    return { root: true };
  });
};
