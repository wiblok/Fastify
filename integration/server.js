// モジュールをインポートします
const fastify = require("fastify")({ logger: true });
const path = require("path");
const fs = require("fs");

// ユーザーを保存するための仮のデータストア
let users = [];

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "views"),
  prefix: "/", // optional: default '/'
});
fastify.get("/users", (req, reply) => {
  // ユーザーデータをレスポンスとして返す
  reply.send(users);
});

fastify.post("/users", (req, reply) => {
  // リクエストボディからユーザーデータを取得
  const user = req.body;
  // ユーザーをデータストアに追加
  users.push(user);
  // 新しく作成されたユーザーをレスポンスとして返す
  reply.send(user);
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error("サーバーの起動中にエラーが発生しました:", err);
    process.exit(1);
  }
  console.log("サーバーがポート3000で起動しました");
});
