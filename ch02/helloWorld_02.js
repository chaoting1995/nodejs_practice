const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // 將url一般化，移除他的查詢字串
  // 非必要的結尾斜線，並且將它改成小寫
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

  switch (path) {
    case '':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('HomePage');
      break;
    case '/about':
      res.writeHead(200, { 'Content-type': 'text/plain' });
      res.end('About');
      break;

    default:
      res.writeHead(404, { 'Content-type': 'text/plain' });
      res.end('Not Found');
      break;
  }
});

server.listen(port, () =>
  console.log(
    `server started on port ${port};` + 'press Ctrl-C to terminate... '
  )
);
// web server 可以提供靜態檔案給 browser 顯示
// 在 cmd 專案目錄下，輸入 node helloWord_02.js，啟動server
// 在 browser 輸入 http://localhost:3000/ 取得內容
