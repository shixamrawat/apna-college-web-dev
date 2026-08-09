/*
===========================
      ASYNC FUNCTIONS
===========================

Definition:
An async function is a function that always returns a Promise.

Key Points:
- Written using the "async" keyword.
- Always returns a Promise.
- If a value is returned, the Promise is fulfilled.
- If an error is thrown, the Promise is rejected.
*/

async function greet(){
    // throw '404 not found'
    return 'hello';
}

// greet will return a promise

greet()
.then((result)=>{
    console.log('resolved->',result);
})
.catch((error)=>{
    console.log('error occured->',error);
});

let h1=document.querySelector('h1');

/*
===========================
       AWAIT KEYWORD
===========================

Definition:
The await keyword is used inside an async function
to wait for a Promise to complete.

Key Points:
- await can be used inside an async function.
- It waits until the Promise is settled.
- If the Promise is fulfilled, await gives its resolved value.
- Code after await waits until that Promise completes.
*/

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let rand=Math.floor(Math.random()*10)+1;
            if(rand>8){
                return reject("Random number is larger");
            }
            console.log(`Color changed to ${color}`);
            h1.style.color=color;
            resolve('Color changed');
        },delay);
    });
}

async function demo(){
    try{
        await changeColor("yellow",1000);
        await changeColor("blue",1000);
        await changeColor("green",1000);
        await changeColor("red",1000);
    }catch(err){
        console.log('Error encountered');
        console.log(err);
    }
    console.log("Last line");
}

/*
===========================
          APIs
===========================

Definition:
An API (Application Programming Interface) allows
two software applications to communicate with each other.

Key Points:
- APIs allow us to request or send data.
- Many web APIs communicate using HTTP.
- APIs often return data in JSON format.
- JavaScript can make API requests using tools like fetch().
*/

/*
===========================
          JSON
===========================

Definition:
JSON stands for JavaScript Object Notation.

It is a text-based format used to store and exchange data,
especially between a server/API and a client.

JSON looks similar to a JavaScript object, but it is
actually a string format.

Example JSON:

{
    "name": "Shivam",
    "age": 19,
    "isStudent": true
}

Key Points:
- JSON stands for JavaScript Object Notation.
- It is commonly used by APIs to send and receive data.
- JSON data is stored as key-value pairs.
- Keys must be written inside double quotes.
- JSON supports strings, numbers, booleans, arrays,
  objects and null.
- JSON itself is a string/text format, not a JavaScript object.
*/

/*
===========================
     ACCESSING JSON DATA
===========================
*/
/*
---------------------------
        JSON.parse()
---------------------------

Definition:
JSON.parse() converts a JSON string into
a JavaScript object.
*/
let jsonData=`{
    "name":"Shivam",
    "age":19,
    "city":"Delhi"
}`;

console.log(jsonData);

let data=JSON.parse(jsonData);
console.log(data);

/*
---------------------------
      JSON.stringify()
---------------------------

Definition:
JSON.stringify() converts a JavaScript object
into a JSON string.
*/

/*
===========================
      API TESTING TOOLS
===========================

Definition:
API Testing Tools are used to test APIs by sending
HTTP requests and checking the responses returned
by the API.

They allow us to interact with an API without
writing JavaScript code first.

Examples:
- Postman
- Hoppscotch

These are used for testing and debugging apis
*/

/*
===========================
         HTTP VERBS
===========================

Definition:
HTTP verbs (or HTTP methods) tell the server
what action we want to perform on a resource.

Common HTTP Verbs:

1 GET     -> Read/Get data

2 POST    -> Create new data

3 PUT     -> Replace/update data

4 PATCH   -> Partially update data

5 DELETE  -> Delete data
*/

/*
===========================
       HTTP STATUS CODES
===========================

Definition:
HTTP Status Codes are numbers sent by the server
to tell us the result of an HTTP request.

They indicate whether the request was successful,
failed, or requires some other action.


2xx -> Success
3xx -> Redirection
4xx -> Client Error
5xx -> Server Error

Most common:

200 -> OK
201 -> Created
400 -> Bad Request
401 -> Unauthorized
403 -> Forbidden
404 -> Not Found
500 -> Server Error
*/

/*
===========================
   ADDING INFORMATION IN URLs
===========================

We can send additional information to an API
through the URL.

Two common ways are:

1. Path Parameters
2. Query Strings / Query Parameters

---------------------------
      PATH PARAMETERS
---------------------------

Path parameters are values added directly
inside the URL path.

Example:

/users/10

Here:
10 -> Path Parameter

It can represent the ID of a specific user.

---------------------------
      QUERY STRINGS
---------------------------

A query string is used to send additional
information through the URL.

It starts with a question mark (?).
Syntax:

?key=value

Example:

/search?q=javascript

Here:
q          -> key / parameter
javascript -> value
Multiple query parameters are separated using &.

Example:

/search?q=javascript&page=2

Here:
q    = javascript
page = 2 */

/*
===========================
        HTTP HEADERS
===========================

Definition:
HTTP Headers are additional information sent
along with an HTTP request or response.

They provide extra details about the request
or response.

Headers are written as key-value pairs.

Example:

Content-Type: application/json

*/

// fetch(url) is used to make HTTP requests in JS
// fetch return a promise

// flow fetch(url)
//     ↓
// Response
//     ↓
// res.json()
//     ↓
// JavaScript Data
//     ↓
// data.fact

let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    return res.json();
})
.then((data1)=>{
    console.log("data1->",data1.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log(`Data2-> ${data2.fact}`);
})
.catch((err)=>{
    console.log("Error encountered");
});

async function getData(){
    try{
        let raw=await fetch(url);
        let data1=await raw.json();
        console.log(data1.fact);
    }
    catch(err){
        console.log(`Error = ${err}`);
    }
}

/*
===========================
          AXIOS
===========================

Definition:
Axios is a JavaScript library used to make
HTTP/API requests.

Like fetch(), Axios returns a Promise.

Axios is not built into JavaScript, so we need
to include/install it before using it.

/*
===========================
      FETCH VS AXIOS
===========================

With fetch():

let res = await fetch(url);
let data = await res.json();

console.log(data.fact);


With Axios:

let res = await axios.get(url);

console.log(res.data.fact);


IMPORTANT:

fetch()
-> Gives a Response object.
-> We use res.json() to get JSON data.

axios.get()
-> Automatically parses JSON response.
-> Actual response data is available in res.data.
*/

async function getFactAxios(){
    try{
        let res= await axios.get(url);
        console.log(res.data.fact);
        return res;
    }
    catch(err){
        console.log(`Error=${err}`);
        return 'No fact found';
    }
}

let btn=document.querySelector('button');
btn.addEventListener('click', async ()=>{
    let res= await getFactAxios();
    console.log(res.data.fact);
    let p=document.querySelector("#fact");
    p.innerText=res.data.fact;
});

/*
===========================
   SENDING HEADERS WITH
      API REQUESTS
===========================

Headers contain additional information about
an HTTP request.

In Axios, we can send headers using a
configuration object.

Syntax:

axios.get(url, config);
*/

const url2 = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config={ headers:{Accept:"application/json"}};
        let res=await axios.get(url2,config);
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}

const url3 = "http://universities.hipolabs.com/search?name=";

let btn2=document.querySelector("#clgName");
btn2.addEventListener('click',async ()=>{
    let country=document.querySelector("input").value;

    let clgArr=await getColleges(country);

    show(clgArr);
});

function show(clgArr){
    let list=document.querySelector("ul");
    list.innerText="";
    for(let clg of clgArr){
        let li=document.createElement('li');
        li.innerText=clg.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res=await axios.get(url3+country);
        return res.data;
    }catch(e){
        console.log('error :',e);
        return [];
    }
}