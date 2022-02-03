// Fn are First class Citizens means
// You can pass fn to another fn

// Callback Functions

function outer(fn){
    fn();
}
const inner = function inner() {
    console.log("Inner Function called");
}
console.log( outer(inner) );

// Count with clousers
function  addEventListeners() {
    let count = 0;
    // Callback function is forming an closuer with its outter scope
    // Clouser means it remember it's lexical scope/ static scope
    // inner level can access outter level
    document.getElementById("btn").addEventListener("click",function (e) {
        console.log("Button Clicke", ++count); 
    })
}

addEventListeners();