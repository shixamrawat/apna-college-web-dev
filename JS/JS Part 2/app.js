console.log("Hi there!!");
let a=5;
let b=10;
console.log(a+b);
// Template literal - these help us to write different string in one go without having to add + and " "
console.log(`The sum of a and b is ${a+b}`);

let color="pink";
if(color=="red") {
    console.log("Stop");
}
else if(color=="yellow"){
    console.log("Wait");
}
else{
    console.log("Go");
} 

let cases="orange";        

switch(cases){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Enter a valid value");
}


alert("This is an alert");
console.error("This is an error");
console.warn("This is a warning");
console.log("This is normal log");

let firstName=prompt("Enter your first name");
let secondName=prompt("Enter your last name");
console.log(`${firstName} ${secondName}`);