const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine" , "ejs");

app.set("views" , path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended : true}));

let posts = [
    {
        username : "adi",
        content : "consistent"
    },
    {
        username : "nikhil",
        content : "work smartly"
    },
    {
        username : "naveen",
        content : "work hard"
    }
]

app.get("/posts" , (req , res) =>{
    res.render("index.ejs" , { posts });
});

app.get("/posts/new" , (req , res) =>{
    res.render("new.ejs");
});

app.listen(port , () =>{
    console.log(`server is listening on port : ${port}`);
});