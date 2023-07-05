// モジュールをインポートします
const fastify = require("fastify")({ logger: true });
const path = require("path");

// CORS設定を有効化します
fastify.register(require("@fastify/cors"), {
  origin: true, // すべてのオリジンからのアクセスを許可します
});

// HTMLファイルをホストするディレクトリを指定します。
fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "views"),
});

// ルートにアクセスしたら、view/index.htmlを表示します
fastify.get("/", (req, reply) => {
  reply.sendFile("index.html");
});

// 一覧用の Todo を作成します
let todos = [
  { id: 1, text: "野球をする", completed: false },
  { id: 2, text: "ゲームをする", completed: false },
  { id: 3, text: "仕事をする", completed: false },
];

// '/todos'パスで Todo の一覧を取得します
fastify.get("/todos", (req, reply) => {
  reply.send({ todos });
});

// "/todos"パスに POST リクエストを送信して Todo を新しく作成します
fastify.post("/todos", (req, reply) => {
  const newTodo = req.body;
  newTodo.id = todos.length + 1;
  todos.push(newTodo);
  reply.send({ todo: newTodo });
});

// "/todos/:id"パスに PUTリクエストを送信して Todo を更新します
fastify.put("/todos/:id", (req, reply) => {
  const id = req.params.id;
  let todo = todos.find((t) => t.id == id);
  if (todo) {
    Object.assign(todo, req.body);
    reply.send({ todo });
  } else {
    reply.code(404).send({ message: "Todo が見つかりません" });
  }
});

// "/todos/:id"パスに DELETE リクエストを送信して Todo を削除します
fastify.delete("/todos/:id", (req, reply) => {
  const id = req.params.id;
  const index = todos.findIndex((t) => t.id == id);
  if (index !== -1) {
    todos.splice(index, 1);
    reply.send({ message: "Todo が削除されました" });
  } else {
    reply.code(404).send({ message: "Todo が見つかりません" });
  }
});

// ポート 3000 番でサーバーをリッスンします
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  fastify.log.info(`サーバーが ${address} でリッスン中です`);
});
