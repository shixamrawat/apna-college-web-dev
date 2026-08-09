// console.log(process.version);
// console.log(process.platform);
// console.log(process.cwd());

let arg=process.argv
for( let x of arg){
    console.log(x);
}
console.log(process.env.USER);
console.log(process.env.DB_PASSWORD);

const {add,sub}=require("./math.js");

console.log(add(2,5));
console.log(sub(19,5));