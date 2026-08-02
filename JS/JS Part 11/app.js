
/*
Definition:
The Call Stack is a LIFO (Last In, First Out) data structure used
by JavaScript to manage function execution.

Key Points:
- One function executes at a time.
- Function call -> Push
- Function ends -> Pop
*/

function one() {
    console.log("One");
}

function two() {
    one();
    console.log("Two");
}

two();

/*
Execution:

two()
│
├── one()
│     │
│     └── return
│
└── return

Output:
One
Two
*/

/*****************************************************************
3. BREAKPOINTS
*****************************************************************/

/*
Breakpoints pause JavaScript execution.

Used to inspect:
- Variables
- Arrays
- Objects
- Call Stack
- Scope

Useful Debug Buttons:
▶ Resume
⤵ Step Over
⤴ Step Into
⤶ Step Out
*/


/*****************************************************************
4. JS IS SINGLE THREADED
*****************************************************************/

/*
JavaScript executes one task at a time.

Call Stack
      │
      ▼
Web APIs
      │
      ▼
Callback Queue
      │
      ▼
Event Loop
*/

/*****************************************************************
5. CALLBACKS & CALLBACK HELL
*****************************************************************/

/*
Callback:
A function passed as an argument to another function so it can be
executed later.
*/
h1=document.querySelector("h1");
function changeColor(color,delay,nextColor){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColor){
            nextColor();
        }
    },1000);
}

changeColor("Red", 1000, () => {

    changeColor("Orange", 1000, () => {

        changeColor("Green", 1000,()=>{
            changeColor("Blue",1000);
        });

    });

});

/* ===========================
        JAVASCRIPT PROMISES
=========================== */

/*
A Promise is an object that represents the eventual
completion (success) or failure of an asynchronous operation.

States:
1. Pending   -> Initial state
2. Fulfilled -> resolve() called
3. Rejected  -> reject() called
*/

let promise=new Promise((resolve,reject)=>{
    let success=true;
    if(success) resolve("Work done");
    else reject("work not done;")
});

/*
.then()
Runs when promise is fulfilled.
Receives the value passed to resolve().
*/

/*
.catch()
Runs when promise is rejected.
Receives the value passed to reject().
*/

promise
.then(()=>{
    console.log("resolved");
})
.catch(()=>{
    console.log("reject");
})

function saveToDb(data) {
    return new Promise((resolve, reject) => {

        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("Success : Data was saved");
        } else {
            reject("Failure : Weak connection");
        }

    });
}

saveToDb("This text")
.then((result)=>{
    console.log("data 1 stroed");
    console.log(result);
    return saveToDb("2nd line");
})
.then((result)=>{
    console.log('data 2 saved');
    console.log(result);
    return saveToDb("line 3");
})
.then((result)=>{
    console.log('data 3 stored');
    console.log(result);
})
.catch((error)=>{
    console.log('failure');
    console.log(error);
});