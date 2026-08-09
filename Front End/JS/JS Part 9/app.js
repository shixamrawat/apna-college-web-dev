/*
====================================================
JAVASCRIPT PART 9 - DOM
====================================================

What is DOM?
------------
DOM stands for Document Object Model.

The browser converts an HTML document into a tree-like
structure of JavaScript objects called the DOM.

Using JavaScript, we can:
✔ Select HTML elements
✔ Read or change their content
✔ Change styles
✔ Modify attributes
✔ Create new elements
✔ Remove elements
✔ Respond to user events


DOM = Bridge between HTML and JavaScript.

Without the DOM:
JavaScript cannot interact with a webpage.

*/
/*
====================================================
JAVASCRIPT PART 9 - DOM
====================================================

What is DOM?
------------
DOM stands for Document Object Model.

The browser converts an HTML document into a tree-like
structure of JavaScript objects called the DOM.

Using JavaScript, we can:
✔ Select HTML elements
✔ Read or change their content
✔ Change styles
✔ Modify attributes
✔ Create new elements
✔ Remove elements
✔ Respond to user events

DOM = Bridge between HTML and JavaScript.

Without the DOM:
JavaScript cannot interact with a webpage.
*/
/*
document Object
---------------

The browser provides a global object called "document".

It represents the entire webpage.

Examples:

document.title
document.body
document.head

Almost every DOM operation starts with:

document._____
*/

/*
====================================================
Topic 1 : Selecting Element by ID
====================================================

Definition:
Selects an HTML element using its unique id.

Syntax:
document.getElementById("idName");

Returns:
- Element object
- null (if not found)
*/

let mainImgObj=document.getElementById("mainImg");
mainImgObj.src="assets/creation_3.jpeg"; //This way we can change the data of html vai js
mainImgObj.src="assets/spiderman_img.png";//reverting back to orignal

/*
====================================================
Topic 2 : Selecting Elements by Class Name
====================================================

Definition:
Selects all HTML elements having the specified class name.

Syntax:
document.getElementsByClassName("className");

Returns:
- HTMLCollection
- Empty HTMLCollection if no matching elements are found.

Note:
• A class can be used by multiple elements.
• HTMLCollection is array-like but NOT an actual array.
• It does not have methods like map(), filter(), or forEach() directly.
*/

let oldImages=document.getElementsByClassName("oldImg");

for(let i=0;i<oldImages.length;i++){
    console.dir(oldImages[i]);
}

/*
====================================================
Topic 3 : Selecting Elements by Tag Name
====================================================

Definition:
Selects all HTML elements with the specified tag name.

Syntax:
document.getElementsByTagName("tagName");

Returns:
- HTMLCollection
- Empty HTMLCollection if no matching elements exist.

Note:
• Multiple elements can have the same tag.
• Returns an HTMLCollection (NOT an Array).
*/

let paragraph=document.getElementsByTagName("p");
console.dir(paragraph[1]);

/*
====================================================
Topic 4 : querySelector() & querySelectorAll()
====================================================

querySelector()
---------------
Selects the FIRST element that matches a CSS selector.

Syntax:
document.querySelector("CSS Selector");

Returns:
- First matching element.
- null if no match is found.

----------------------------------------------

querySelectorAll()
------------------
Selects ALL elements matching a CSS selector.

Syntax:
document.querySelectorAll("CSS Selector");

Returns:
- NodeList
- Empty NodeList if no match is found.

Unlike HTMLCollection,
NodeList supports methods like forEach().
*/

let img=document.querySelector("img");

let allPara=document.querySelectorAll("p");

/*
====================================================
Topic 5 : Using Properties & Methods
====================================================

These properties are used to access or modify the content
inside an HTML element.

1. innerText
------------
Return only the variable text of the element

• Respects CSS styles.
• Shows only the data present on the screen.
• Hidden text is ignored.

Syntax:
element.innerText;

2. textContent
--------------
Returns all text inside an element.

• Includes hidden text.
• Ignores HTML tags.

Syntax:
element.textContent;

3. innerHTML
------------
Returns the complete HTML markup inside an element.

• Includes HTML tags.
• Can also be used to insert HTML.

Syntax:
element.innerHTML;

*/

/*
====================================================
Topic 6 : Manipulating Attributes
====================================================

Attributes provide additional information about an HTML element.

Examples:
<img src="image.png" id="mainImg">

Here,
src → attribute
id → attribute

DOM provides two methods to work with attributes:

1. getAttribute(attribute)
--------------------------
Returns the value of the specified attribute.

Syntax:
element.getAttribute("attributeName");


2. setAttribute(attribute, value)
---------------------------------
Changes the value of an existing attribute
or creates a new attribute if it doesn't exist.

Syntax:
element.setAttribute("attributeName", "value");
*/

/*
====================================================
Topic 7 : Manipulating Style
====================================================

style Property
--------------
The style property is used to read or modify the
inline CSS styles of an HTML element.

Syntax:
element.style.property = "value";

Note:
• CSS property names are written in camelCase.
• Changes are applied immediately to the webpage.
*/

let links=document.querySelectorAll(".box a");
for(let link of links){
    link.style.color="black";
}

let h1=document.querySelector('h1');
h1.style.color="red";
h1.style.backgroundColor="black";

/*
====================================================
Topic 8 : Manipulating Style using classList
====================================================

classList
---------
The classList property is used to add, remove,
check or toggle CSS classes on an HTML element.

Syntax:
element.classList.add("green")

Methods:
1. add()
2. remove()
3. contains()
4. toggle()

Advantage:
Instead of writing multiple style properties,
we can simply add or remove CSS classes.
*/

/*
====================================================
Topic 9 : DOM Navigation
====================================================

DOM Navigation allows us to move between related
elements in the DOM tree.

Properties:

1. parentElement
2. children
3. childElementCount
4. previousElementSibling
5. nextElementSibling
*/


/*
====================================================
Topic 10 : Adding Elements
====================================================

DOM allows us to create new HTML elements
and insert them into the webpage.

Methods:

1. document.createElement()
2. appendChild()
3. append()
4. prepend()
5. insertAdjacentElement()
insertAdjacentElement(position, element)
----------------------------------------
beforebegin. // before the starting of that tag
afterbegin  // as the first child
beforeend   //as the last child
afterend    //after that tag
*/

let para= document.createElement("p");
console.dir(para);
para.innerText="This is a new para";
let box=document.querySelector(".box");
box.appendChild(para);
para.append(" This was added using append");
para.prepend(" This was added using prepend ");

let btn=document.createElement("button");
btn.innerText="CLICK ME!!";
para.append(btn);

box.insertAdjacentElement("beforeend",btn);

/*
====================================================
Topic 11 : Removing Elements
====================================================

DOM provides methods to remove elements
from the webpage.

Methods:

1. removeChild()
2. remove()
*/

box.removeChild(btn);
para.remove();