const JavascriptResource = `
JavaScript Complete Revision Guide

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 1. Introduction to JavaScript
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JavaScript (JS) is a lightweight, interpreted programming language used to build dynamic web applications. It runs in the browser and allows interaction with HTML and CSS. JS is essential for client-side scripting and is also widely used on the server-side with **Node.js**.

💡 Uses of JavaScript:
✔️ Interactive web pages  
✔️ Web and mobile app development  
✔️ Game development  
✔️ Backend development (Node.js)  
✔️ Data visualization  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 2. Features of JavaScript
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ **Interpreted & Lightweight** - Runs directly in browsers  
✅ **Event-Driven & Asynchronous** - Uses event listeners and async operations  
✅ **Prototype-Based Object-Oriented** - Uses prototypes instead of classical OOP  
✅ **Dynamically Typed** - Variables can hold different data types  
✅ **High Community Support** - Used in popular frameworks like React, Angular, and Vue  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 3. JavaScript Basics
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔹 **Variables & Data Types**  
   - \`var\`, \`let\`, \`const\` (prefer \`let\` and \`const\` for modern JS) 
   - Primitive types: \`string\`, \`number\`, \`boolean\`, \`null\`, \`undefined\`, \`symbol\`, \`bigint\`  
   - Reference types: \`Object\`, \`Array\`, \`Function\`

🔹 **Operators**  
   - Arithmetic: \`+\`, \`-\`, \`*\`, \`/\`, \`%\`, \`**\`  
   - Comparison: \`==\`, \`===\`, \`!=\`, \`!==\`, \`>\`, \`<\`, \`>=\`, \`<=\`  
   - Logical: \`&&\`, \`||\`, \`!\`  
   - Assignment: \`=\`, \`+=\`, \`-=\`, \`*=\`, \`/=\`, \`%=\`  

🔹 **Control Flow**  
   - Conditional: \`if-else\`, \`switch-case\`  
   - Loops: \`for\`, \`while\`, \`do-while\`, \`forEach\`  

🔹 **Functions**  
   - Function declaration:  
   function greet(name) { return "Hello, " + name; }
   
   - Function expression:  
   const greet = function(name) { return "Hello, " + name; };
   
   - Arrow function:  
   const greet = (name) => "Hello, " + name;

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 4. JavaScript Objects & Arrays
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔹 **Objects** (key-value pairs)  
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello " + this.name);
    }
};
person.greet();

🔹 **Arrays** (ordered collections)  
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple

🔹 **Array Methods**  
   - \`push()\`, \`pop()\`, \`shift()\`, \`unshift()\`, \`map()\`, \`filter()\`, \`reduce()\`, \`find()\`, \`includes()\`  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 5. DOM Manipulation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The **Document Object Model (DOM)** allows JS to interact with HTML elements.

🔹 **Selecting Elements**  
document.getElementById("demo");
document.querySelector(".class-name");
document.querySelectorAll("p");

🔹 **Modifying Elements**  
document.getElementById("demo").innerText = "Hello World!";
document.getElementById("demo").style.color = "red";

🔹 **Event Handling**  
document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 6. Asynchronous JavaScript
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔹 **Callbacks** - Functions passed as arguments to be executed later.  
🔹 **Promises** - Handle async operations with \`.then()\` and \`.catch()\`.  
🔹 **Async/Await** - Modern way to handle asynchronous tasks.

Example:
async function fetchData() {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
}
fetchData();

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 7. ES6+ Features
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 Modern JavaScript introduced powerful features:
✅ **Arrow Functions**: \`const add = (a, b) => a + b;\`  
✅ **Template Literals**: \`Hello, \${name}!\`  
✅ **Destructuring**:  
const {name, age} = person;

✅ **Spread & Rest Operators**:  
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];

✅ **Modules (import/export)**  
import { myFunction } from './module.js';
export function myFunction() { ... }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 8. JavaScript Frameworks & Libraries
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✔️ **React.js** - Component-based UI framework  
✔️ **Node.js** - JavaScript for backend development  
✔️ **Express.js** - Lightweight web framework for Node.js  
✔️ **Vue.js & Angular** - Frontend frameworks  
✔️ **jQuery** - Simplifies DOM manipulation (older but still used)  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 9. Error Handling & Debugging
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ \`try...catch...finally\`  
✅ \`console.log()\` for debugging  
✅ \`throw\` keyword for custom errors  

Example:
try {
    let num = 5 / 0;
} catch (error) {
    console.log("Error occurred:", error.message);
} finally {
    console.log("Execution completed");
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 10. Advanced JavaScript Concepts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔹 **Closures** - Functions that remember their scope  
🔹 **Hoisting** - Variables and functions are moved to the top  
🔹 **Prototype & Inheritance** - JS objects inherit from prototypes  
🔹 **Event Loop** - Handles async operations in JS  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **Quick Revision Notes**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ JavaScript is the most used scripting language for web development.  
✅ ES6+ introduced modern features like \`let\`, \`const\`, arrow functions, and async/await.  
✅ JavaScript is single-threaded but uses an event loop for asynchronous execution.  
✅ The DOM allows JS to modify and interact with HTML elements dynamically.  
✅ Frameworks like React and Node.js extend JavaScript beyond the browser.  

🚀 **Best Resources for JavaScript Learning**
✔️ MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript  
✔️ JavaScript.info: https://javascript.info/  
✔️ FreeCodeCamp: https://www.freecodecamp.org/  
✔️ Eloquent JavaScript (Book): https://eloquentjavascript.net/  

This structured guide will help students revise JavaScript quickly for interviews and competitive programming. 🚀`;

export default JavascriptResource;
