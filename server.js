const express = require('express');

const app = express();

app.set("view engine","ejs");

app.use(express.static(__dirname + '/public'));



app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/search',(req,res)=>{
    res.render("search");
})

app.get('/lectureScreen',(req,res)=>{
    res.render("lectureScreen");
})

app.get('/intern',(req,res)=>{
    res.render("intern");
})

app.get('/login', (req,res)=>{
    res.render("login");
})

app.get('/register', (req,res)=>{
    res.render("register");
})


app.listen(3000,()=>{
    console.log("Server is running");
})