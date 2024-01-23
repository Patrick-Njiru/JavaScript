'use strict'
// Arrays can contain all data types.
let ourArray = ['h', 1, 12.4, null, undefined, true]
// console.log(ourArray);

// Array containing objects
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

// Nested Array
let myNestedArray = [ourArray, objArray],
myNestedArray2 = [[1,2,3], ['a','b','c']],
// nesting level 2. You can go as far as you can comprehend
myNestedArray3 = [[ourArray], [objArray]]

// console.log(myNestedArray); 
// console.log(myNestedArray2); 
// console.log(myNestedArray3); 

// google how to format console output to display nested objects and arrays better

// Accessing  and Modifying elements within an array
// console.log(ourArray[1]);
// console.log(myNestedArray[0]); // in this case the elements are arrays

ourArray[1] = 'hello world!'
// console.log(ourArray[1]);



// Accessing Array elements within a nested array
// console.log(myNestedArray[0][5]); // true

// Array Methods - push, unshift , pop, shift, length
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

// Looping through Arrays
// use for ... of ... loop

for (const item of shoppingList) {
    // console.log(item)
}

// combining arrays

let arr1 = ['a','b','c'], arr2 = [1,2,3]
// let arr3 = [...arr1, ...arr2] // spread operator for copying objects
// arr1.push(arr2) // creates a nested array

// console.log(arr3);
// console.log(arr1);

// mutating arrays when you declare them using const

const a = [1,2,4]
// a = [2,4,5] // not allowed
// console.log(a);
a[0] = 2, a[1] = 4, a[2] = 5
console.log(a);





