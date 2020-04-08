const http = require("http");

const app = http.createServer((res, req) => {
  req.end("okay");
});

app.listen(80);
