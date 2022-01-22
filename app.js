const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  const name = "Srikant";

  res.render("index", { name: name });
});

app.listen(3000, function () {
  console.log("Server is up on port no. 3000");
});
