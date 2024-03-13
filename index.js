// DOM - Document Object Model.
console.log(window); // window is a global object with lots of properties and methods. It is a brower's object (not JavaScript) & is automatically created by the browser.
console.log(window.document); // with window.document we can access html document.
console.dir(window.document); // by using console.dir we can access properties of an element.
// Changing HTML and CSS by JavaScript.
document.body.style.background = // this changes the background style of the body to green.
  /* "green" */ document.body.childNodes[3].innerText =
    /* "abcd" */ "Document Object Model"; // as the childNodes[3] is h1 so by using .innerText we can change it's text to anything we want.
// DOM Manipulation
// Selecting with Id
let button = document.getElementById("myId"); // h1
console.log(button);
console.dir(button);
// Selecting with Class
let headings = document.getElementsByClassName("myClass");
console.dir(headings);
console.log(headings); // it returns an HTML Collection which is similar to Array
// Selecting with Tag
let parahs = document.getElementsByTagName("p");
console.dir(parahs);
console.log(parahs);
// Query Selector
let firstEl = document.querySelector("p"); // 1st Element
console.dir(firstEl);
let firstEle = document.querySelector(".myClass"); // 1st Element
console.dir(firstEle);
let firstElem = document.querySelector("#myId"); // 1st Element
console.dir(firstElem);
document.querySelector("div");
document.querySelector("div").children;
// Query Selector All
let allEl = document.querySelectorAll("p"); // all Elements
console.dir(allEl); // it returns a Node List
// Selecting first child
let firstChild = document.body.firstChild;
console.dir(firstChild);
// DOM Manipulation Properties
// tagName: returns tag for element nodes
firstEl.tagName; // if we write this we will get name of the tag of our firstEl which is P
// innerText: returns the text content of the element and all its children
let fruits = document.querySelector("#fruits");
console.dir(fruits);
// div.innerText will print Fruits\nMango\nOrange\nLitchi where \n = next line.
// innerHTML: returns the plain text or HTML Contents in the element
// div.innerHTMl will print all the tags along with text     '\n        <h1>Fruits</h1>\n        <ul>\n            <li>Mango</li>\n            <li>Orange</li>\n            <li>Litchi</li>\n        </ul>\n    '
// textContent: returns textual content even for hidden elements
// anyTag.textContent will show the text of that hidden tag

// Practice Question 1: Create a h2 heading element with text - "Hello JavaScript". Append "from College Students" to this text using JS.
let append = document.querySelector("#append");
console.dir(append.innerText);
append.innerText += "from College Students";

// Practice Question 2: Create 3 divs with common class names - "box". Access them & add some unique text to them.
let boxes = document.querySelectorAll(".box");
let idx = 1;
for (div of boxes) {
  div.innerText = `new unique value ${idx}`;
  idx++;
}
console.log(boxes);
// console.log(boxes[0])
// console.log(boxes[1])
// console.log(boxes[2])
boxes[0].innerText = "new unique value 1";
boxes[1].innerText = "new unique value 2";
boxes[2].innerText = "new unique value 3";
// Practice Examples
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

window.console.log(window);
console.log(document.body);
document.body.style.background = "yellow";
//   location.href = "https://google.com"
