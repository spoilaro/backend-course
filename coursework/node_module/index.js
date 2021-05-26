const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         err ? console.log(err) : null;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }

  //   if (req.url === "/api/users") {
  //     const users = [
  //       { name: "Bob", age: 22 },
  //       { name: "Bob", age: 23 },
  //       { name: "Bob", age: 24 },
  //     ];

  //     res.writeHead(200, {
  //       "Content-Type": "application/json",
  //     });

  //     res.end(JSON.stringify(users));
  //   }

  //Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  let extname = path.extname(filePath);
  //Content type
  let contentType = "text/html";

  //Check
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  //Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code != "ENOENT") {
        //Not found
        fs.readFile(path.join(__dirname, "public", "404.html"), (e, c) => {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(content, "utf8")
        });
      } else {
          //Server error
          res.writeHead(500);
          res.end("Server error: " + err.code)
      }
    } else {
        //Succes
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5005;

server.listen(PORT, () => {
  console.log("Server is running on port: " + PORT.toString());
});
