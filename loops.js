'use strict'

// WHILE LOOPS
let myArr = new Array // or []
let myObj = new Object // {}

// console.log(myObj);

let i = 0
while(i < 5) {
    myArr.push(i)
    myObj[i] = `I am number ` + (i+1)
    i++
}
// console.log(myArr);



// FOR LOOPS
for (let i = 0; i < myArr.length; i++) {
    myArr[i] = i+i
}
// console.log(myArr); // double the first array


// For...In Loop. Looping through objects
for (const key in myObj) {
    // console.log(myObj[key]);
}


// FOR...OF LOOPS. FOR ARRAYS
console.log(`Index  :   Value`);
for (const iterator of myArr) {
    // console.log(`${iterator/2}  -  ${iterator}`);
}

// Iterate Odd numbers
for (let i = 1; i < 20; i +=2) {
    // console.log(i);    
}



// NESTING FOR LOOPS - FOR NESTED OBJECTS/ARRAYS
// 1
const mutiplyAll1 = arr => {
    let product = 1

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    
    return product
}

// 2
function mutiplyAll2(arr) {
    let product =  1

    for (const nestedArr of arr) {
        for (const value of nestedArr) {
            product*=value
        }
    }

    return product
    
}

let product1 = mutiplyAll1([[1,2],[3,4],[5,6],[7]])
let product2 = mutiplyAll2([[1,2],[3,4],[5,6],[7]])

console.log(product1, product1 === product2); // 5040


// DO...WHILE LOOPS
/* 
    a do while loop, unlike the while loop, runs at least once
    before checking for the set condition(s) 
*/
// these variables are already declared at the top
myArr = []
i = 10

while (i < 5) {
    myArr.push(i)
    i++"Farewell", 'Yah Yah', 'Gnat']
}

console.log(myArr, i); // [], 10

do {
    myArr.push(i)
} while (i < 5);

console.log(myArr, i); // [10], 11