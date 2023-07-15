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

console.log(__dirname);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

/*app.use(function (req, res, next) {
  console.log(`I'm in the middle`);
  console.log(req.body.username);
  console.log(req.body.password);
  next();
});*/

app.get("/users", function (req, res) {
  //see all users
  res.send("GET sent");
});

app.post("/users", function (req, res) {
  //create and add user
  console.log(req.body.user);
  res.send();
});

app.get("/users/:id", function (req, res) {
  //get user info by id
  res.send();
});

app.put("/users/:id", function (req, res) {
  //update user
  console.log(req.params);
  res.send(`PUT sent ${params.id}`);
});

app.delete("/users/:id", function (req, res) {
  //delete user
  res.send("DELETE sent");
});

app.listen(3000);
