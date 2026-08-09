//forEach() runs a function once for each element in the array.

let arr=[1,2,3,4,5];

arr.forEach((el)=>{
    console.log(el);
});

//Map runs once for every element, and whatever you return becomes an element in the new array
let sqr=arr.map((n)=>{
    return n*n;
});

// filter creates a new array containing only the elements that satisfy a condition.

let even=arr.filter((n)=>{
    return (n%2==0);
});

// every function return true if all the element in the array satisfy the condition 
// works like and function
let isEven= even.every((n)=>{
    return (n%2==0);
});

// some fucntion check if atleast one of the element satisfy the condtion 
let somefncn=[2,4,6,8,3].some((n)=>{
    return (n%2!=0);
});

// reduce it can reduce teh entire array into a single value can be sum product ,max min,etc 

let reducedVal=arr.reduce((sum,n)=>{
    return sum+n;
});

let max=arr.reduce((max,n)=>{
    if(n>max) return n;
    else return max;
});
// Default Parameters
// Giving a default value to the arguments

function temp(a,b=10){
    return a+b;
};

// The spread operator (...) lets you expand an array, object, or iterable into individual elements.

console.log(..."SHIVAM RAWAT");
console.log(Math.min(...arr));

let newArr=[...arr];
let myName=[..."Shivam Rawat"];

let num1=[2,4,6,8];
let num2=[1,3,5,7,9];

let nums=[...num2,...num1];

const data={
    email:"xyz@gmail.com",
    pass:"abcd",
};

const copyData={...data,id:123};

// Rest Operator (...) collects multiple values into a single array or object.

function sum(...nums){
    let ans=0;
    for(let n of nums){
        ans+=n;
    }
    return ans;
}
//Destructuring
// lets you extract values from arrays or objects and store them in variables in a clean, concise way.
let names=["joe","mathew","gordan","bill"];
let [first,second,...others]=names;

const student={
    name:"John",
    class:12,
    subject:["eng","hindi","maths"],
    username:"john_black",
    password:"qwerty",
};

let {username:user,password:pass,city:place="Delhi"}=student;
