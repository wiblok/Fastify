function myMiddleware(request, reply, next) {
  // ミドルウェアの処理
  console.log("ミドルウェアの実行");
  next();
}

module.exports = {
  myMiddleware,
};
