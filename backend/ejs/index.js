const express= require("express");
const app=express();
const path=require("path");
const port=3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    let name ="Shivam";
    res.render("home.ejs",{name});
});
app.get("/about",(req,res)=>{
    const std={
        name:"xyz",
        rollno:12
    };
    res.render("about.ejs",{std});
});
app.get("/rolldice",(req,res)=>{
    const data=Math.floor(Math.random()*6)+1;
    res.render("rolldice",{data});
});

app.listen(port,()=>{
    console.log(`listening through port ${port}`);

})