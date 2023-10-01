const express = require("express");
const app = express();
const port = 3000;

// 静的ファイルを提供するためのミドルウェアを設定する
// 指定されたディレクトリ内の静的ファイルを提供する
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
