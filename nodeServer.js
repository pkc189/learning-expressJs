const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>hello</h1");
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>not found</h1");
  }
  res.end();
});

server.listen(5000);
