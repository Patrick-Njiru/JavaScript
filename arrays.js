'use strict'
// Arrays can contain all data types.
let ourArray = ['h', 1, 12.4, null, undefined, true]
// console.log(ourArray);



// ARRAYS CONTAINING OBJECTS
let objArray = [
    {
        name : "M.K.M",
        school: 'N P J S',
        grade: undefined
    },
    {
        name : "P M M",
        school: 'A E C',
        grade: 'PP1'
    }
]
// console.log(objArray);



// NESTED ARRAYS
let myNestedArray = [ourArray, objArray],
myNestedArray2 = [[1,2,3], ['a','b','c']],
// nesting level 2. You can go as far as you can comprehend
myNestedArray3 = [[ourArray], [objArray]]

// console.log(myNestedArray); 
// console.log(myNestedArray2); 
// console.log(myNestedArray3); 



// MUTATING ARRAYS
// console.log(ourArray[1]);
// console.log(myNestedArray[0]); // in this case the elements are arrays

ourArray[1] = 'hello world!'
// console.log(ourArray[1]);



// ACCESSING ELEMENTS IN NESTED ARRAYS - BRACKET NOTATION
// console.log(myNestedArray[0][5]); // true



// ARRAY METHODS - push, unshift , pop, shift, length
// our array = [ 'h', 'hello world!', 12.4, null, undefined, true ]
// console.log(ourArray.length)
// Removing elements of the array
ourArray.pop() // remove last element
// console.log(ourArray)
ourArray.shift() // remove first element
// console.log(ourArray)

// Appending data to the array
ourArray.push('pato') // add at the end
// console.log(ourArray);
ourArray.unshift([1,2]) // add at the beginning
// console.log(ourArray);

let shoppingList = [
    ['cereal',3],
    ['milk',2],
    ['bananas',3],
    ['juice',2],
    ['eggs',5]
]
// console.log(shoppingList);



// LOOPING THROUGH ARRAYS
// use for ... of ... loop

for (const item of shoppingList) {
    // console.log(item)
}

// COMBINING arrays

let arr1 = ['a','b','c'], arr2 = [1,2,3]
// let arr3 = [...arr1, ...arr2] // spread operator for copying objects
// arr1.push(arr2) // creates a nested array

// console.log(arr3);
// console.log(arr1);


// MUTATING ARRAYS WHEN DECLARED USING CONST

const a = [1,2,4]
// a = [2,4,5] // not allowed
// console.log(a);
a[0] = 2, a[1] = 4, a[2] = 5
console.log(a);





