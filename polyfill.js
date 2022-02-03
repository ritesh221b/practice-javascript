console.clear();
// Pollyfill for bind
// pollyfill means fallback
// Browser fallback if your browser doesn't have bind function
// So Create your own

let Person = {
    name  : "Ritesh",
    city  : "Charkhi Dadri",
    state : "Haryana",
    printName : function(){
        console.log("Name is ");
    }
}

function printName(college, village){
    console.log(this.name);
    console.log(college);
    console.log(village);
}

let printMyName = printName.bind(Person,"Chandigarh University")
console.log(printMyName);
printMyName("Village Name");

// Custom Bind
// ...args is a rest parameter returns all args which are not assigned

Function.prototype.customBind = function(one,...args){
    let obj = this;
    return function(...restParams){
        return obj.apply(one,[...args,...restParams]);
  }  
}


let printMyName2 = printName.customBind(Person,"Chandigarh University")
console.log(printMyName2);
console.log(printMyName2("Village Name"));


