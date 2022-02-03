// Tricky Questions

// let vs var
// let - block scope
// var - function scope
// var - gets hoisted
// var - defination gets hosited but no the value
// let - nor definatoin neither value get hosited


// console.log(_city);
console.log(a);

let _city = "Charkhi Dadri";
var a = "Haryana";

function  city() {

    (function () {
        {
            let stateName = "Haryana";
            var cityName = "Dadri";
            console.log(stateName);
        }
        console.log("City Outside scope", cityName);
    })();
    // console.log("State Outside scope", stateName);
   
}
// console.log(cityName);
city();

// == vs ===
// == compares values (does change value type on one side to compare)
// === compares values and type (doesn't change value type)

// console.log(a==b)


// let vs const
const firstName=""; //already assigned undefined
// firstName = "name";
// firstName = undefined; //also give error
// console.log(firstName);

const c = [1,2,3];
// c.push(12); // can modify value but can change value of c

// undefined vs null
// undefined is assing by Js
// null by user
// user can also assign undefined prefer not to

// typeof null -> object
// typeof undefined -> undefined

// Perfect way to use arrow function
const profile = {
    firstName : "Ritesh",
    lastName  : "",
    setName : function (change) {
        // use arrow fn bellow
        let splitName = function (n) {
            this.firstName = n; // will change window.firstName
        }
        splitName(change);
    }
}

profile.setName("nice ra");
console.log(window.firstName);


// Prototypa Inheritance
// Every object have a property called prototype
// new object will include properties of parent
// First check in its protoypes if not found then check parents prototype


let car = function (model) {
    this.model = model;
}

car.prototype.getModel = function () {
    return this.model;
}

let tata = new car("tata");
console.log(tata.getModel());

let bajaj = new car("bjaja");
console.log(bajaj.getModel());

// Fn declaration vs fn expersiion

console.log(funcD());
// console.log(funcE());
function funcD() {
    console.log("function declaration");
}

let funcE = function () {
    console.log("Fucntion experssion");
}


// Trick question
function f(x){
    x++
    (x = x-3) && ++x
    return x--;
}//0 

