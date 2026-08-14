const express=require("express");
const app=express();

app.get("/", (req,res)=>{
    res.send("This is root location");
})
app.post("/",(req,res)=>{
    res.send("Post req on root");
})
app.get("/help", (req,res)=>{
    res.send("on help page");
})
app.get("/aboutUs", (req,res)=>{
    res.send("on about us page");
})
app.get("/:username",(req,res)=>{
    res.send(`Hello ${req.params.username}\n Welcome to this page. `);
})
app.get("/user/:id", (req,res)=>{
    res.send("User id = "+req.params.id);
    console.log(req.query);
})
app.get("/{*splat}",(req,res)=>{
    res.send("This page does't exists");
})


app.listen(3000);