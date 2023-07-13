/*const http = require("http");
const fs = require("fs");

const site = http.createServer(function (req, res) {
  fs.readFile("test.json", function (error, data) {
    let holder = JSON.parse(data);
    res.setHeader("Content-Type", "application/json");
    res.write(data);
    console.log(`${holder.firstName} ${holder.lastName}`);
    res.end();
  });
});

site.listen(3000);*/

var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send(`<h1>Hello World</h1>`);
});

app.post("/", function (req, res) {
  res.send("POST sent");
});

app.put("/", function (req, res) {
  res.send("PUT sent");
});

app.delete("/", function (req, res) {
  res.send("DELETE sent");
});

app.listen(3000);
