// Function Statement / Function Declaration
function name(params) {
    
}

// Function Experssions
var a = function name(params) {
    
}
var a = ()=>{

}
// FS vs FE difference is hoisting

// Anonymous Function
// With no name
// Can asing to a variable
function(){
    // Gives Statement Error
}
()=>{
    // Don't Gives Statement Error
}

// Named Function Expression
// function with named assigned to variable
var a = function xyz(params) {
    // can access xyz() here
}
// can't access xyz() here


// First Class Function
// First Class Citizen
// Ability to pass fn as para and fn can be returned 


// Arrow Functions Expression
let a = ()=>{
    // Does not have its own bindings to this or super, and should not be used as methods.
    // Does not have new.target keyword.
    // Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
    // Can not be used as constructors.
}

// Upright solutions
// Transforming governance