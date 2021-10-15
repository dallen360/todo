const request = require("https");
const express = require("express");

const app = express();

const url =
  "api.openweathermap.org/data/2.5/weather?q={paris}&appid={a482e6fb9b638df389d146aecd591724}";

app.use(url, function (res) {
  console.log(res);
});

app.listen(3000, function () {
  console.log("Running server on port 3000");
});
