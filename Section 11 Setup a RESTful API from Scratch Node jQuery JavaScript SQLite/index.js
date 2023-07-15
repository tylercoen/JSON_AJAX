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

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const data = { user: "admin", pass: "password" };

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*app.use(function (req, res, next) {
  console.log(`I'm in the middle`);
  console.log(req.body.username);
  console.log(req.body.password);
  next();
});*/

app.get("/", function (req, res) {
  res.send("GET sent");
});

app.post("/login", function (req, res) {
  if (data.user == req.body.user && data.pass == req.body.pass) {
    res.write('{"status":"success"}');
  }
  console.log(req.body.user);
  res.send();
});

app.put("/", function (req, res) {
  res.send("PUT sent");
});

app.delete("/", function (req, res) {
  res.send("DELETE sent");
});

app.listen(3000);
