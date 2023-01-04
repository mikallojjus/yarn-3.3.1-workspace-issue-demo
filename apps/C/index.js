var express = require("express");
var app = express();

app.get("/", function (_, res) {
  res.send("Hello from C!");
});

app.listen(3002, function () {
  console.log("C is listening on port 3002!");
});
