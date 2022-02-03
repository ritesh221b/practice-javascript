// Higher Order Functions

// Map
// Transform an array
let list = [1,1,122,3,4,5];
list.map(each=>each*2)

// Filter
list.filter(each=>each<3);

// Reduce
// reduce to a single output
let result = list.reduce(function(acc,each){
    acc = acc + each;
    return acc;
},0);
console.log("result ",result);

// Max in array
let maxNum = list.reduce((acc,each)=>{
    if (each>acc) {
        acc = each;
    }
    return acc;
},0);

console.log(maxNum);

// Reduce Tricky
let users = [
    {name : "Ritesh", age:12},
    {name : "Vikram" , age:12},
    {name : "Ravi" , age:20},
    {name : "Shatish" , age:21},
];

let ages = users.reduce((acc,each)=>{
    value = acc[each.age] ?? 0;
    console.log("Value ", value);
    acc[each.age] = value+1;
    return acc;
},{});
console.log(ages);

// Higher Order Function
// Functions are first class citizen means can be passed as argument and can be returned
// Function passed in HOF is callback
// Function that takes an function as an argument or return a function
function hoc(cb){
    console.log("hoc called");
    return function(){
        cb();
        console.log("cb was called");
    }
}

hoc(function(){
    console.log("In CB");
})();

// DRY don't repeat yourself

// Common Login
function calculate(list,logic){
    for(let each of list){
        if (logic(each)) {
            console.log(`${each} ✓`);
        }else{
            console.log(`${each}`);
        }
    }
}

function logic(item){
    return item%2==0 ? true : false;
}

Array.prototype.calculate = calculate;

calculate(list,logic);
list.calculate(list,logic);
// Unique Login 
