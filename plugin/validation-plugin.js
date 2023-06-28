// プラグイン関数の定義
function validationPlugin(fastify, options, done) {
  // スキーマの定義
  const schema = {
    type: "object",
    properties: {
      name: { type: "string" },
      age: { type: "number", minimum: 0 },
    },
    required: ["name", "age"],
  };

  // プラグインが提供するバリデーション関数
  function validateRequest(request, reply, done) {
    const validationResult = fastify.schemas.validate(schema, request.body);
    if (validationResult.error) {
      // バリデーションエラーが発生した場合
      reply.code(400).send({ error: validationResult.error.message });
    } else {
      // バリデーションが成功した場合
      request.body = validationResult.value;
      done();
    }
  }

  // プラグインの登録完了を示す
  done();

  // プラグインの機能をオブジェクトとして返す
  return {
    validateRequest: validateRequest,
  };
}

module.exports = validationPlugin;
