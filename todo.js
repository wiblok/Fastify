// モジュールをインポートします
const fastify = require("fastify")({ logger: true });

// 一覧用のTodoを作成します
let todos = [
  { id: 1, text: "野球をする", completed: false },
  { id: 2, text: "ゲームをする", completed: false },
  { id: 3, text: "仕事をする", completed: false },
];

// '/todos'パスでTodoの一覧を取得します
fastify.get("/todos", async (request, reply) => {
  return { todos };
});

// "/todos"パスにPOSTリクエストを送信してTodoを新しく作成します
fastify.post("/todos", async (request, reply) => {
  const newTodo = request.body;
  newTodo.id = todos.length + 1;
  todos.push(newTodo);
  return { todo: newTodo };
});

// "/todos/:id"パスにPUTリクエストを送信してTodoを更新します
fastify.put("/todos/:id", async (request, reply) => {
  const id = request.params.id;
  let todo = todos.find((t) => t.id == id);
  if (todo) {
    todo = { ...todo, ...request.body };
    return { todo };
  } else {
    reply.status(404).send({ message: "Todoが見つかりません" });
  }
});

// "/todos/:id"パスにDELETEリクエストを送信してTodoを削除します
fastify.delete("/todos/:id", async (request, reply) => {
  const id = request.params.id;
  const index = todos.findIndex((t) => t.id == id);
  if (index !== -1) {
    todos.splice(index, 1);
    return { message: "Todoが削除されました" };
  } else {
    reply.status(404).send({ message: "Todoが見つかりません" });
  }
});

// ポート3000番でサーバーをリッスンします
fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`サーバーが${address}でリッスン中です`);
});
