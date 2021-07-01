const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

function serveStaticFile(res, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('500 - Internal Error');
    }
    res.writeHead(responseCode, { 'Content-Type': contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch (path) {
    case '':
      serveStaticFile(res, '/public/home.html', 'text/html');
      break;
    case '/about':
      serveStaticFile(res, '/public/about.html', 'text/html');
      break;
    case '/img/logo.jpg':
      serveStaticFile(res, '/public/img/logo.jpg', 'image/jpg');
      break;
    default:
      serveStaticFile(res, '/public/404.html', 'text/html', 404);
      break;
  }
});

server.listen(port, () =>
  console.log(
    `server started on port ${port}; ` + 'press Ctrl-C to terminate....'
  )
);
// web server 可以提供靜態檔案給 browser 顯示
// 在 cmd 專案目錄下，輸入 node helloWord_02.js，啟動server
// 在 browser 輸入 http://localhost:3000/ 取得內容
