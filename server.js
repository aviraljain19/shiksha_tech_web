const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

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

const studentSchema = mongoose.Schema({
  username: String,
  fullname: String,
  password: String,
});

const Student = mongoose.model("Student", studentSchema);

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

app.post("/login", async (req, res) => {
    const studentFound = await Student.findOne({username:req.body.username})
    if(!studentFound){
        return res.json({
            msg:"invalid credentials"
        })
    }
    if(req.body.password === studentFound.password){
        res.render('index')
    }else{
        return res.json({
            msg:"invalid credentials"
        })
    }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/register", async (req, res) => {
 const { fullname, username, password } = req.body;
  const student = await Student.create({
    fullname,
    username,
    password,
  });
  res.redirect("/login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.listen(3000, () => {
  console.log("Server is running");
});
