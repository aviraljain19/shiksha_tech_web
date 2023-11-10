const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

mongoose
  .connect(
    "mongodb+srv://aviraljain:jK499gdydHWxE10J@shikshatech.evqd53u.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.get("/lectureScreen", (req, res) => {
  res.render("lectureScreen");
});

app.get("/intern", (req, res) => {
  res.render("intern");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.listen(3000, () => {
  console.log("Server is running");
});
