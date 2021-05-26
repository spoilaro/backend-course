const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        err ? console.log(err) : null;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }
});

const PORT = process.env.PORT || 5005;

server.listen(PORT, () => {
  console.log("Server is running on port: " + PORT.toString());
});
