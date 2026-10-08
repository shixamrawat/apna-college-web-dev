const express=require("express");
const app=express();

const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");

const Chat=require("./models/chat");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
    .then(()=>{
        console.log("DataBase connected");
    })
    .catch((err)=>{
        console.log(err);
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/",(req,res)=>{
    res.send("Server Working");
});

app.get("/chats",async(req,res)=>{
    let chats=await Chat.find();
    // console.log(chats);
    res.render("chats",{chats});
});

app.get("/chats/new",(req,res)=>{
    
    res.render("newchat");
});

app.post("/chats",(req,res)=>{
    let {from,msg,to}=req.body;
    let newChat=new Chat({
        from:from,
        msg:msg,
        to:to,
        time: new Date(),
    });
    newChat.save()
        .then(()=>{
            console.log("Data added to DataBase");
        })
        .catch((err)=>{
            console.log(err);
        });

    res.redirect("/chats");
});

app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit",{chat});
});

app.put("/chat/:id",async(req,res)=>{
    let{id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedChat=await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true});
    res.redirect("/chats");
});

app.delete("/chats/:id/delete",async(req,res)=>{
    let{id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats"); 
});

app.listen(8080,()=>{
    console.log("Server is starting ");
});