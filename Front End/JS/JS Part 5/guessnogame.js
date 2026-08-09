const max=prompt("Enter the maximum number");


const random=Math.floor(Math.random()*max)+1;

let guess=prompt("Guess the number");

while(true){
    if(guess=="quit"){
        console.log("Guess");
        break;
    }
    if(guess==random){
        console.log(`You guessed it coorect random number was. ${guess}`);
        break;
    }
    else if(guess<random){
        guess=prompt("Your guess is less than ans or quit to quit");
    }
    else if(guess>random){
        guess=prompt("Your guess is greater than ans or quit to quit");
    }
}
let dice=Math.floor(Math.random()*6)+1;
console.log(dice);