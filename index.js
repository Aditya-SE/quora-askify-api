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
        id : "1a",
        username : "adi",
        content : "consistent"
    },
    {
        id : "2b",
        username : "nikhil",
        content : "work smartly"
    },
    {
        id : "3b",
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

app.post("/posts" , (req , res) =>{
    let {username , content} = req.body;
    posts.push( {username , content} );
    res.redirect("/posts");
});

app.get("/posts/:id" , (req , res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id); 
    res.render("show.ejs" , {post});
});


app.listen(port , () =>{
    console.log(`server is listening on port : ${port}`);
});