// Call Apply Bind

let person = {
    name : "Ritesh",
    age  : 20,
    college : "Chandiagrh University",
    printName  : function(){
        console.log(this.name);
    },
}

let person2 = {
    name : "Vikram",
    age  : 20,
    college : "Chandiagrh University",
}

function beautify(){
    console.log(`${this.name } is beautiful`);
}

function getMore(hometown,state){
    console.log(`More is  
        HomeTown : ${hometown}
        State    : ${state}
        `);
}

person.printName();

// Call

// is used for function borrowing
// Now "this" will point to argument passed in call
person.printName.call(person2);
beautify.call(person);
// First argument ref to "this" variable
getMore.call(person,"Charkhi Dadri", "Haryana");

// Apply
// Second argument is array rest is same as call
getMore.apply(person2,["Delhi","New Delhi"]);

// Bind
// gives can copy of function and can be invoked later 
let personReborn = getMore.bind(person,"Charkhi Dadri","Haryana");
console.log(personReborn);
console.log(personReborn());

// this is dynamic context
// value of this depends upon how function invoked
// Each Function have access to 'this' keyword
// Arrow function dont have access to this because