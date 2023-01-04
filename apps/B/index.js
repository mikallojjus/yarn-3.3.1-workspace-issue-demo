var express = require("express");
var app = express();

app.get("/", function (_, res) {
  res.send("Hello from B!");
});

app.listen(3001, function () {
  console.log("B is listening on port 3001!");
});
