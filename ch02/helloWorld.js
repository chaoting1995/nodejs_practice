const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(port, () =>
  console.log(
    `server started on port ${port};` + 'press Ctrl-C to terminate... '
  )
);
// web server 可以提供靜態檔案給 browser 顯示 
// 在 cmd 專案目錄下，輸入 node helloWord.js，啟動server
// 在 browser 輸入 http://localhost:3000/ 取得內容
