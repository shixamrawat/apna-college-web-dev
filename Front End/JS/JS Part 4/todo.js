let todo=[];
let req=prompt("Enter your request");

while(true){
    if (req=="quit"){
        console.log("You quit");
        break;
    }
    else if(req=="list"){
        console.log("-----------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-----------");
    }
    else if(req=="add"){
        let add=prompt("Enter what you want to add");
        todo.push(add);
        console.log(`${add} added to todo list`);
    }
    else if(req=="delete"){
        let idx=prompt("index of item to be deleted");
        todo.splice(idx,1);
        console.log("deleted successfully");
    }
    req=prompt("Enter your request");
}