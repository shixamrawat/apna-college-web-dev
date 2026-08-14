const express=require("express");
const app=express();
const path=require("path");

const port=3000;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));

app.get("/id/:username",(req,res)=>{
    const {username}=req.params;
    const instaData= require("./data.json");
    const data=instaData[username];
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("pagenotfound.ejs");
    }
});

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})