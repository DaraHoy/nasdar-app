const express = require("express");
const app = express();
const path = require("path"); // native node module

app.set("port", 3000);

app.get("/", function(req, res) {
  console.log("GET the homepage");
  res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/json", function(req, res) {
  console.log("GET the json");
  res.status(200).json({ jsonObject: true });
});

app.get("/file", function(req, res) {
  console.log("GET the file");
  res.status(200).sendFile(path.join(__dirname, "app.js")); // pass in the path to the file you want to return
});

const server = app.listen(app.get("port"), function() {
  const port = server.address().port;
  console.log("Magic happens on port " + port);
});
