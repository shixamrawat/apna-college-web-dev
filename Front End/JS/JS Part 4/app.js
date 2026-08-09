for(let i=0;i<=20;i+=2){
    console.log(i);
}
// let n=prompt("Enter the value of n");
// n=parseInt(n);
// for(let i=n;i<=n*10;i+=n){
//     console.log(i);
// }

let favMovie="znmd";
let guess=prompt("Enter your guess");

while(guess!=favMovie){
    if(guess=="quit"){
        console.log("You Quit");
        break;
    }
    guess=prompt("Wrong guess enter your guess again or type quit to quit");
}
if(guess==favMovie){
    console.log("You guessed it correctly");
}

let fruits=['apple','mango','pineapple','kiwi'];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
let str="thiswrld"
for(fruit of fruits){
    console.log(fruit);
}
for(char of str){
    console.log(char);
}