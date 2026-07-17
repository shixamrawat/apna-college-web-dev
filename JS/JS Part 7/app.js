// this Keyword
// "This" keyword refers to an object that is executing the current piece of code.

const student={
    name:"Shivam",
    year:"3rd",
    rollno:21,
    eng:90,
    maths:94,
    getAvg(){
        let avg=this.eng+this.maths;
        console.log(avg/2);
    }
};

// try & catch
// The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

console.log("Hello");
try{
    console.log(a);
} catch(err){
    console.log("Caught an error");
    console.log(err);
}
console.log("HI");

// Arrow Functions
// const func = (arg1, arg2 ..) => { function definition }

const add=(a,b)=>{
    return a+b;
}
const sqr=(n)=>{
    return n*n;
}

// setTimeout
// this take a function as agrument along with time in ms and perform the action after that much time
// setTimeout(fncn,time);
setTimeout( ()=>{
    console.log("This message was printed 5 sec later.")
},5000);

// setInterval
// this works exactly like setTimeout but it keep on calling the funtion infinitely after a set time interval
// to stop this we store the id of it and call clearInterval(id);

let id1=setInterval( ()=>{
    console.log("setInterval ");
},2000);

// Arrow function:
// Does NOT have its own `this`.
// It inherits `this` from the parent (lexical) scope.
// parent this will be arrow fncn this

// Regular function:
// Has its own `this`.
// `this` depends on HOW the function is called.
const child={
    name:"Temp",
    marks:98,
    prop:this,
    getName: function(){
        console.log(this);//child (this =parent which is child in this case)
        return this.name;   
    },
    getMarks:()=> {
        console.log(this);
        return this.marks;     //window (this=parent->this and parent is child and child this is window hence window)
    },
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this); //child
        },200);
    },
    getInfo2:function(){
        setTimeout(function(){
            console.log(this); //window
        },2000);
    }
};

let id2=setInterval(()=>{
    console.log("Hello Wrld")
},2000);

setTimeout(()=>{
    console.log("setTimeout ran");
    clearInterval(id2);
},10000);