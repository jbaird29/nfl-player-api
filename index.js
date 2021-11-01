require("dotenv").config();
const express = require("express");
const mysql = require("./dbcon.js");
const query = require("./query.js");

const app = express();

// app.use(express.json());
app.set("mysql", mysql);

app.get("/v1/players/:playerName", async function (req, res) {
  try {
    const mysql = req.app.get("mysql");
    const results = await query.getPlayer(mysql, req.params.playerName);
    res.send(results[0]);
  } catch (err) {
    console.log(err);
  }
});

app.use(function (req, res) {
  res.status(404);
  res.send("Page not found.");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.send("Server error.");
});

app.listen(443, function () {
  console.log("Server running on port 443.");
});
