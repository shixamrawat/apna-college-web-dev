const mongoose=require("mongoose");
const Chat=require("./models/chat");

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

const allChat = [
    {
        from: "Shivam",
        to: "Rahul",
        msg: "Hey, how are you?",
        time: new Date(),
    },
    {
        from: "Rahul",
        to: "Shivam",
        msg: "I'm good bro, what about you?",
        time: new Date(),
    },
    {
        from: "Shivam",
        to: "Aman",
        msg: "Are you coming to college tomorrow?",
        time: new Date(),
    },
    {
        from: "Aman",
        to: "Shivam",
        msg: "Yeah, I'll be there by 9.",
        time: new Date(),
    },
    {
        from: "Priya",
        to: "Shivam",
        msg: "Did you complete the assignment?",
        time: new Date(),
    },
    {
        from: "Shivam",
        to: "Priya",
        msg: "Not yet 😭",
        time: new Date(),
    }
];


Chat.insertMany(allChat)
    .then(()=>{
        console.log("Chats inserted successfully");
    })
    .catch((err)=>{
        console.log(err);
    });