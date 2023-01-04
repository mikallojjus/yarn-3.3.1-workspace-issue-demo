var express = require("express");
var app = express();

app.get("/", function (_, res) {
  res.send("Hello from A!");
});

app.listen(3000, function () {
  console.log("A is listening on port 3000!");
});
