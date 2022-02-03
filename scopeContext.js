console.log("helle scope and context");

// Context vs Scope
// - context is environment in which function executes
// - scope scope in which variable can be accessed

// this context
// - is determined by how function is invoked

// #1
// var obj = {
//     foo: function() {
//         return this;   
//     },
//     another : ()=>{
//         return this;
//     }
// };

// obj.foo() === obj; // true
// console.log("fn Expression A",obj.another());
// console.log("fn Expression b",obj.foo());
// // // #2
// function foo() {
//     return (this);
// }

// console.log("fn Delclartion a",foo()); // window
// console.log("fn Declaration b", (new foo())); //window

var Person = {
    city : function(){
        return "nice";
    }
};

const a = new Person(); // constructor