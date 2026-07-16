function hello(){
    console.log("Hi there!");
}

hello();
hello();

function poem(){
    console.log(`Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.`)
}

poem();

function rolldice(){
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}

rolldice();

function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}

function sum(a,b){
    console.log(a+b);
}

function avg(a,b,c){
    console.log((a+b+c)/3);
}
let s=0;
function sum(n){
    for(let i=0;i<=n;i++){
        s+=i;
    }
    return s;
}
console.log(s);

let sub=function (a,b){
    return (a-b);
}

let greet= function(){
    console.log("Hello ");
}

// higher order function a function passed inside another function
function noOfGreet(func,n){
    for(let i=0;i<n;i++){
        func();
    }
}

function oddOrEvenFactory(request) {
    if (request == "odd") {
        return function(n) {
            console.log(!(n % 2 == 0));
        }
    } 
    else if (request == "even") {
        return function(n) {
            console.log(n % 2 == 0);
        }
    } else {
        console.log("Wrong request");
    }
}

let request = "odd";
let func = oddOrEvenFactory(request);

// meathods we can either use teh key:value way or use a shorthand
let calc={
    add: function(a,b){
        console.log(a+b);
    },
    sub: function(a,b){
        console.log(a-b);
    },
    mult(a,b){
        console.log(a*b);
    },
    div: function(a,b){
        console.log(a/b);
    },
    expo(a,b){
        console.log(a**b);
    }
};
