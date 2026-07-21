let input=document.createElement("input");
let btn=document.createElement("button");
btn.innerText="Click me";
console.dir(input);
console.dir(btn);

let body=document.querySelector("body");
body.appendChild(input);
body.appendChild(btn);

input.setAttribute("placeholder","username");
btn.setAttribute("id","btn");
console.log(btn.id);
console.log(input.placeholder);

btn=document.querySelector("#btn");
btn.classList.add("btnDesign");

let h1=document.createElement("h1");
h1.innerText="DOM Practice";
body.prepend(h1);
h1.style.color= "purple";
h1.style.textDecoration="green underline";

let p=document.createElement("p");
p.innerHTML="<b>Shivam's</b> Practice";
h1.insertAdjacentElement("afterend",p);