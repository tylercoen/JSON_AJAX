var express = require("express");
var app = express();
var path = require("path");
var Pusher = require("pusher");
var bodyParser = require("body-parser");
var pusher = new Pusher({
  appId: "1638468",
  key: "08b1d4ea43d9060f06bb",
  secret: "5267935e284c6e7f2db6",
  cluster: "mt1",
  useTLS: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.post("/comment", function (req, res) {
  console.log(req.body);
  var newMessage = {
    name: req.body.name,
    message: req.body.message,
  };
  pusher.trigger("my-channel", "my-event", newMessage);
  res.json({ created: true });
});

app.get("/", function (req, res) {
  res.send("Hello World2!");
});

app.listen(3000);
