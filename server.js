const express = require("express");
const app = express();
const env = require("dotenv");
const product = require("./data/products.json");

env.config({
  path: "./config/config.env",
});

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1 style='color:red'>Welcome</h1>");
});
app.get("/products", (req, res) => {
  //res.sendStatus(200);
  res.send(JSON.stringify(product));
});
app.listen(PORT, () => {});

// const server = http.createServer((req, res) => {
//   if (req.method == "POST") {
//     var aChunk = [];
//     req
//       .on("data", (chunk) => {
//         aChunk.push(chunk);
//       })
//       .on("end", () => {
//         const bodyString = Buffer.concat(aChunk).toString();
//         res.end(JSON.parse(bodyString));
//       });
//   }
// });

// server.listen(3000, () => {
//   console.log("siyad");
// });
