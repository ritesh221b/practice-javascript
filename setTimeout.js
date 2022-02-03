// 

console.log("Started");

setTimeout(function(){
    console.log("Called");
},5000);

setTimeout(console.log,0);

// Way is proccessed
// Call Stack
// Registered in Web API
// callback will be only executed once event loop is free
// event loop = main thread
// Js is single threaded sync language
// It has Just-in-time complilation

// How to block main thread for 10 seconds

// let startDate = new Date().getTime();
// let endDate = startDate;

// while(endDate<startDate+10000){
//     endDate = new Date().getTime();
// }

// console.log("While Expired");