// プラグイン関数の定義
function myPlugin(fastify, options, done) {
  // プラグインの機能を実装するコード

  // ルートハンドラーの追加
  fastify.get("/hello", (request, reply) => {
    reply.send({ message: "Hello from the plugin!" });
  });

  done(); // プラグインの登録完了を示す
}

module.exports = myPlugin;
