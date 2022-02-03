let list = [];

// Longest String in Array
list = "What is th capital of Haryana".split(" ");
list2 = "fantastic website to pracitce mcq questionsas".split(" ");
function longestInArray(...args) {
    console.log(args);
    let combineAll = [].concat.apply([],args);
    console.log(combineAll);
    let longestTillNow = "";
    for(let i=0; i<combineAll.length; i++){
        let each = combineAll[i];
        // console.log(`${longestTillNow} == ${each}`);
        if (each.length>=longestTillNow.length) {
            // console.log(`     ${each} > ${longestTillNow}`)
            longestTillNow = each;
        }
    }
return longestTillNow;
}

console.log(longestInArray(list,list2));

// Combine multiple arrays into one
function combineAll(...args) {
    console.log(args);
    let combine = [].concat.apply([],args);
    console.log("Combined are",combine);
    // Unique
    combine = new Set(combine);
    console.log("Unique array ",combine);
}

combineAll(list,list2,list);

// String reverse
let sentence = "Who are you talking to now?";
for(let i = sentence.length-1 ; i>0; i--){
    let each = sentence.charAt(i);
    // console.log(each);
}
// revese words
sentence = sentence+" ";
let collectWords = [];
let word = "";
for(let i=0; i<sentence.length; i++){
    let each = sentence.charAt(i);
    console.log(each);
    // Delimiter by space
    if (each!=" ") {
        word = word+each;
    }else{
        collectWords.push(word);
        word = "";
    }
}

let finalWordList = [];
for(let i=collectWords.length-1; i>=0; i--){
    console.log(i,collectWords[i])
    let each = collectWords[i];
    console.log(each);
    finalWordList.push(each);
}

console.log(collectWords);
console.log(finalWordList);

// Most Commonly Used character in string
let text = "Who are these awesome people talking in the balcony?";

// Loop each char in string
// makethat character a key the object
// cout of each character
// find char with most count
console.clear();

let countCollection = {};
for(let i=0; i<text.length; i++){
    let each = text.charAt(i);

    if (countCollection[each] === undefined) {
        countCollection[each] = 0
    }else{
        countCollection[each] = countCollection[each]+1;
    }
}

console.log(countCollection);

let colletionList = Object.entries(countCollection);
console.log(colletionList);

let highestCountYet = 0;
let highestCharYet = '';
for(let i=0; i<colletionList.length; i++){
    let [character,count] = colletionList[i];
    console.log(character,count);
    if (count>=highestCountYet) {
        highestCountYet = count;
        highestCharYet = character;
    }
}
console.log("Highest char",highestCharYet);


// Anagram
let one = "Ritesh";
let two = "Phogat";

// char count match should be exact

function isAnagram(one,two) {
    let storeCharCounts = {};
    let sumOfChar_one = 0
    let sumOfChar_two = 0

    if (one.length!=two.length) {
        return false;
    }

    for(let i=0; i<one.length; i++){
        sumOfChar_one = sumOfChar_one+one.charCodeAt(i);
        sumOfChar_two = sumOfChar_two+two.charCodeAt(i);
    }

    console.log(sumOfChar_one, sumOfChar_two);

    return (sumOfChar_one===sumOfChar_two);
}

console.log( isAnagram("lavish","vishal") );

console.clear();

// Sort
let numberList = [1,123,4543,5,12,32,13,123];

function  swap(arr,indexOne,indexTwo) {
    let temp =  arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
    return arr;
}

console.log("Original ", numberList);

for(let i=0; i<numberList.length; i++){
    // loop array
    // store bigestyet
    // if next is smaller
    // swap
    let biggestYet = 0;
    for (let i = 0; i < numberList.length; i++) {
        const each = numberList[i];
        // console.log("each",each);
        swap
    }  
}

// Swap to number without temp
// swamp string without temp


(function(){

    // Sort Array
    console.log("Bubble Sort");
    let a = [1,2,3];

    function bblsrt(list){
        let len = list.length;
        let isSwapped = false;
        for(let i=0; i<len; i++){
            isSwapped = false;
         
            for(let j=i+1; j < len; j++ ){
                console.log(i,j);
                console.log(list[i]," < ", list[j]);
            }

        }
        return list;
    }

    console.log(bblsrt(a));

})();


