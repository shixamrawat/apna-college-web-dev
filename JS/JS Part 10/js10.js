// ==============================
// EVENT BUBBLING & STOP PROPAGATION
// ==============================

// Event Bubbling:
// When an event occurs on a child element,
// it first runs on the child and then moves
// upward to its parent elements.

// Example:
// li → ul → div → body → html → document

// stopPropagation():
// Used to stop the event from moving to
// parent elements.

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function () {
    console.log("div was clicked");
});

ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul was clicked");
});

for (let li of lis) {
    li.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("li was clicked");
    });
}