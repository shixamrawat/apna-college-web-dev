let btn=document.createElement("button");
btn.innerText="Click me!";
document.body.append(btn);

btn.addEventListener("click",function (){
    btn.style.color="white";
    btn.style.backgroundColor="green";
    console.log("Button was pressed:)");
});

let h1=document.querySelector("h1");
let h2=document.createElement("h2");
h2.innerText=""
h1.after(h2);
let input=document.createElement("input");
input.setAttribute('placeholder','Enter your name');
h2.after(input);

input.addEventListener('input',function(){
    let notAllowed=/[^a-zA-Z ]/g;
    let cleanName=input.value.replace(notAllowed,'');
    h2.innerText=cleanName;
});
