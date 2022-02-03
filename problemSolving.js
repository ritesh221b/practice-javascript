
// Method overloading
// multiple functions of the same name with different implementations
(function(){
    
    function sayHello(text) {
        if (typeof text ==="string") {
            console.log("Hello ", text);
        }else{
            console.log("not string")
        }
    }

    sayHello("hs");

})();

// If it is an array
(function(){
    function test(arr){
        console.log(Array.isArray(arr));
        return false;
    }
    console.log(test([]));
})();

// If Number is integer
(function () {
    function isInt(num){
        return num%1===0;
    }
    console.log("is int ",isInt(12.2));
})();

// Private Variable
(function () {
    
    function Person(){
        let bal = 12121;
        return function(){
            return bal;
        }
    }

    let balance = Person();

    console.log("Balance ",balance());
    console.log("Person ",Person());

})();

// Empty Array in js
(function(){
    let a = [1,2,3,4];
    a.length = 0;
    a = [];
})();


// Function inside if condition
// Eval keyword
// If condition evaluate using if conditions
(function(){

    function test1(){
        let y = "1";
        if(function foo(){}){
            console.log("Eval is ",eval(function foo(){}));
            // function foo(){}; 
            y += typeof foo;
        }
        console.log(y);
    }

    test1();
    


})();


// Fizzbuzz
(function(){
    for(let i=1; i<100; i++){
        let f = i%3 == 0;
        let b = i%5 == 0;
        console.log(`${i} ${ f ? "fiz" : b ? "buzz" : "" }`);
    }
});   

// Prevent immutiblity of Object
(function (params) {
    
    let names = [
        {name : "Ritesh", age:12},
        {name : "Harry", age:112},
    ];
    
    // let newNames = names.map(each=>{
    //     each.name = each.name.toUpperCase();
    //     return each;
    // });

    // console.log("Names ", names);
    // console.log("New Names ", newNames);

    // How to solve

    let cool = names.map(each=>{
        return {
            ...each,
            ...{name : each.name.toUpperCase() },
        }
    });

    console.log("Names ", names);
    console.log("New Names ", cool);

})();


(function(){

    console.log("Trying variable declaration");

    let a = "Nice";
    (function(){
        console.log("Inner");
        let a = "Ritesh";
        console.log("inside",a);
    })();
    console.log("outside", a);

})();

