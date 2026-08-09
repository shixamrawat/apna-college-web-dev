// ==========================
// DOM Events
// ==========================

// An event is an action performed by the user or browser.
// Examples:
// - click
// - mouseover
// - keypress
// - submit


// Common DOM Events

// onclick
// Fires when an element is clicked.

let btn2=document.querySelector("#btn2");
btn2.onclick=function (){
    alert("Button two was clicked");
}
// onmouseenter
// Fires when the mouse pointer enters an element.

let onBtn=()=>{
    console.log("Cursor is over the button");
}
btn2.onmouseenter=onBtn;

// ==========================
// Event Listeners
// ==========================

// addEventListener()
// Used to attach an event to an element.

// Syntax:
// element.addEventListener(event, callback);

// Parameters:
// 1. event    -> Type of event (without "on")
//               Examples: "click", "mouseenter", "dblclick"
// 2. callback -> Function that executes when the event occurs.

// advantage is that it allow to have multiple function
// Example:

let btn3=document.querySelector("#btn3");
btn3.addEventListener("click",function (){
    console.log('Btn 3 was clicked');
})

// ==========================
// this in Event Listeners
// ==========================

// When 'this' is used inside the callback function of an event listener,
// it refers to the element that triggered the event.

// Syntax

btn3.addEventListener("click", function () {
    console.dir(this);
});

// ==========================
// Keyboard Events
// ==========================

// Keyboard events occur when the user interacts with the keyboard.

// Common Keyboard Events

// keydown
// Fires when a key is pressed.

// keyup
// Fires when a key is released.

// ==========================
// Event Object
// ==========================

// Whenever an event occurs, JavaScript automatically creates
// an Event Object and passes it to the callback function.

// The event object contains information about the event,
// such as the type of event, the element that triggered it,
// the key pressed, mouse position, etc.
let input=document.querySelector("input");
input.addEventListener("keydown",function(event){
    console.log(event.key);
    console.log(event.code);
    console.log(event);
})

// ==========================
// Form Events
// ==========================

// Form events occur when the user interacts with a form
// or its input fields.

// Common Form Events
// submit
// input
// change
// focus
// blur

let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault(); //This will prevent the default behaviour of the the form which in this case is taking to another html file
    alert("Form submited");
});

// ==========================
// Extracting Form Values
// ==========================

// We can access the values entered by the user
// using the .value property.

// Syntax
// input.value

form.addEventListener("submit",function(event){
    event.preventDefault();
    let user=document.querySelector("#username");
    let pass=document.querySelector("#password");

    console.log(form.elements);
    console.log(form.elements[0].value);
    console.log(user.value);
    console.log(pass.value);
});

window.addEventListener("scroll", function () {
    console.log(window.scrollY);
});