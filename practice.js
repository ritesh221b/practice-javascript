// Rest Parameters
function test(one,...rest){
    console.log("one",one)
    console.log("rest",rest);
}

test("one","two",3,4,5);

// Combine Two Arrays
let a = [1,123,123,121,1,2,3]
let b = [0,123,324,1245,55,1,3]
let c = [...a,...b];
console.log(c);

// Unique in js
let d = [...(new Set(c))];
console.log(d);
console.log([..."Ritesh"]);
console.log( {..."Ritesh"} );

{} // is a valid js code

// Clouser
function Outer(){
    console.log("Outer");
    // Lexial
  
    let inner = function Inner(msg){
        console.log("Inner");
        return `Inner says ${name}`;
    }
    
    let name = "Ritesh";
    return inner;
}

console.log(Outer()("Hello"));


// Trick