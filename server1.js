const os = require("os");
// const fs = require("fs");
const http = require("http");
const { response } = require("express");
const port = 5000;
const app = express();
// console.log(os.platform());
// console.log(os.arch());

// fs.writeFileSync("app.text", "updated this file");

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    res.writeHead(200, { "Content-Type": "text/html" });
    const url = req.url;
    if (url === "/") {
      res.write("this is home page");
      res.end();
    }
    if (url === "/about") {
      res.write("this is about page");
      res.end();
    }
    if (url === "/contact") {
      res.write("this is contact page");
      res.end();
    }
    if (url === "/career") {
      res.write("this is career page");
      res.end();
    } else {
      res.write("this is 404 page");
      res.end();
    }
    // res.write("Hello World");
    // res.end();
  })
  .listen(5000, (err) => {
    if (err) throw err;
    console.log(`server is started successfully on port port${port}`);
  });
