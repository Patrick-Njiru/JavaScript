'use strict'
// functions:
function ourReusableFunction() {
    console.log('Hello Niggers!');
}

// ourReusableFunction() // calling the function
// console.log();

// Passing values to functions with arguments
// parameters - variables that act as placeholders for values that are to be input to a function when it is called
// Arguments are the actual values that are used as input to the function.

function subtract(a,b) {
    console.log(a-b);
    console.log(a+b);
    console.log(a*b);
    console.log(a/b);
}

// subtract(3,4) // -1, 7, 13, .75

// Scope and Functions
// Scope refers to the visibility of a variable

let myGloablVariable = 10 // global scope

const fun1 = () => {
    let oopsGlobal = 5 // local scope. confined within this function
    // oopsGlobal = 5 // becomes a global variable when you don't declare it using let or const. Allowed or not allowed?
}

const fun2 = () => {
    if(typeof myGloablVariable != "undefined")
        console.log(`myGlobalVariable: ${myGloablVariable}`);
    if(typeof oopsGlobal != "undefined")
        console.log(`myGlobalVariable: ${oopsGlobal}`);
    else console.log('');
}

// fun2()

// Global and Local Scope in Functions 

/* 
    It is possible to declare the same variable twice, outside and inside a function as shown below.
    One had a globsl scope(outside the fn) and the other a local scope(inside the fn). 
*/
let outerWear = 'T-Shirt'

function myOutfit() {
    // The local variable takes precedence over the global variable within the function
    let outerWear = 'Vest'
    // when the line above is commented out, the global variable will be used
    return outerWear
}

// console.log(myOutfit()); // vest
// console.log(outerWear); // T-Shirt

function add(a,b) {
    let sum = a+b
}

add(4,6) // return value = undefined 

// Variable assignment with a returned value
function evenOrOdd(x) {
    return x%2 === 0 ? `${x} is even` : `${x} is odd`
}

// console.log(evenOrOdd(43));
let result = evenOrOdd(10)
// console.log(result);

// Queue
const nextInLineOfThree = (arr, item) => {
    arr.push(item)
    return arr.shift()
}

let queueLine = ['John','Lucas','Joseph']

// console.log(`Before ${JSON.stringify(queueLine)}`);
// console.log(nextInLineOfThree(queueLine, 'Patrick'));
// console.log(`After ${JSON.stringify(queueLine)}`);
// console.log();

// console.log(`Before ${JSON.stringify(queueLine)}`);
// console.log(nextInLineOfThree(queueLine, 'Ann'));
// console.log(`After ${JSON.stringify(queueLine)}`);

// Boolean - TRUE or FALSE
// mostly used with conditional statements like if else and ternary operators
// Example 1
function switchOnOrOff(answer) {
    let mySwitch = Math.floor(Math.random()*2) === 0 ? 'OFF' : 'ON'

    if (mySwitch == String(answer).toLocaleUpperCase()) {
        return `Good guess! The Switch is ${mySwitch}`
    } else if (mySwitch !== String(answer).toLocaleUpperCase() && (answer.toString().toLocaleLowerCase() == 'off' || answer.toString().toLocaleLowerCase() == 'on')) {
        return `Sorry, the Switch is ${mySwitch}`
    }
    return `Invalid answer! Try again. \nThe valid answer is either 'on' or 'off'`
}

// console.log(switchOnOrOff(4))
// console.log()
// console.log(switchOnOrOff('on'))

// Example 2
const divisibilityBy3 = number => number%3 === 0 // return true or false

// console.log(divisibilityBy3(12))

// strict equality operator (===) does not attempt to convert data types to be similar.
const compareEquality1 = (a,b) => a === b ? 'Equal' : 'Not Equal'

// console.log(compareEquality(2,'2'))  // not equal
// console.log(compareEquality(12,12))  // equal

// Equality operator
const compareEquality2 = (a,b) => a == b ? 'Equal' : 'Not Equal'

// console.log(compareEquality(2,'2'))  // equal
// console.log(compareEquality(12,12))  // equal

// Strict Inequality Operator
const testNotEqual1 = (x,y) => a !== b

// console.log(testNotEqual1(2,'2'))  // true
// console.log(testNotEqual1(2,2))  // false

// Inequality Operator
const testNotEqual2 = (x,y) => a != b

// console.log(testNotEqual2(2,'2'))  // false
// console.log(testNotEqual2(2,2))  // false

// And (&&) Operator and Logical Operators : >, >=, <, <=
function studentMeanGrade1(score) {
    return (
        score > 80 && score <= 84 ? 'A' :
        score > 73 &&  score <= 80 ? 'A-' :
        score > 65 &&  score <= 73 ? 'B+' :
        score > 60 &&  score <= 65 ? 'B' :
        score > 55 &&  score <= 60 ? 'B-' :
        score > 50 &&  score <= 55 ? 'C+' :
        score > 45 &&  score <= 50 ? 'C' :
        score > 40 &&  score <= 44 ? 'C-' :
        score > 35 &&  score <= 40 ? 'D+' :
        score > 30 &&  score <= 35 ? 'D' :
        score > 25 &&  score <= 30 ? 'D-' : 
        score > 0 &&  score <= 25 ? 'E' : 
        'Invalid Score! Please input a valid score.'
    )     
}

// console.log(studentMeanGrade1(56)); // B-
// console.log(studentMeanGrade1(73)); // B+
// console.log(studentMeanGrade1(-10)); // Invalid score.

// Using iF Statement,Switch Statement, and Or (||) Operator

const clothePrice = item => {
    switch(item.toLocaleLowerCase()) {
        case 'shirt' : 
            // when you use return, there is no need for 'break'
            return 'Kshs 1000'
        case 'trouser' : 
            return 'Kshs 900'
        case 'khaki' : 
            return 'Kshs 900'
        case 'jeans' : 
            return 'Kshs 1500'
        case 'short' :
        case 'sweat pant' :
            return 'Kshs 300'
        // Add multiple case statements consecutively as shown below if the return value is the same
        case 'dress' : 
        case 'skirt' : 
            return 'Kshs 500'
        case 'vest' : 
        case 'pant' : 
            return 'Kshs 150'
        case 'boxer' : 
            return 'Kshs 200'
        default : 
            return 'Not Available. Use singular nouns e.g short, dress'
    }
}

// console.log(clothePrice('shirts')); // 900 

function golfScore(par, strokes) {
    if (strokes === 1) {
        return 'Hole-in-one!'
    } else if (strokes <= par-2) {
        return 'Eagle'
    } else if (strokes === par-1) {
        return 'Birdie'
    } else if (strokes === par) {
        return 'Par'
    } else if (strokes === par+1) {
        return 'Bogey'
    } else if (strokes === par+2) {
        return 'Double Bogey'
    } else {
        return 'Go Home!'
    }
}

// console.log(golfScore(5,8));

const switchOfStuff = val => {
    let answer
    switch(val.toLocaleLowerCase()) {
        case 'a':
            // in this case I have to use the break statement since I have not used return here
            answer = 'apple'
            break
        case 'b':
            answer = 'banana'
            break
        case 'c':
            answer = 'cherry'
            break
        default:
            answer = 'stuff'
    }
    return answer
}

// console.log(switchOfStuff('a'))

let count = 0

function blackJackCC(card) {
    switch(card) {
        case 2:
        case 3:
        case 4: 
        case 5:
        case 6:
            count++
            break
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--
            break
    }
    return (`${count} ${count > 0 ? 'Bet' : 'Hold'}`)
}

// count = 
blackJackCC(2)  // count = 1
blackJackCC('K') // count = 0
blackJackCC(7) // count = 0
blackJackCC('Q') // count = -1
blackJackCC(9) // count = -1
blackJackCC('A') // count = -2

// console.log(blackJackCC(2)); // count(-2) + 1

// Arrow functions are preferred for writing anonymous functions

// const magic = function () {
//     return new Date()
// }

/*
    The above fn is anonymous because it lacks a name after the word function. 
    To refactor it to an arrow function just click on it,  press CTRL + SHIFT + R and choose the option.
    You can also refactor arrow functions in the same manner
*/ 

// const magic = () => new Date()

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

// create a function that returns non-negative integers only - whole numbers

const wholeNumbersSquareList = arr => arr.filter(num => num >= 0 && Number.isInteger(num)).map(num => num**2)

// console.log(wholeNumbersSquareList(realNumberArray));


// Creating a Self Calling function
const callSelf = (function () {
    console.log('Hello World!');
})()


// Default Parameters
function increment(num = 0, val = 1) { //0 and 1 are the default values when the num and val inputs are not provided,
    console.log(num + val);
}

// increment() // 1
// increment(10) // 11
// increment(10, 5) // 15

// The Rest Operator
// It is used when one passes multiple arguments a function
// Instead of adding all parameters, one can just use the rest operator to simplify work.
// It collects all arguments into an array which can then be accessed inside the function

// Instead of
function items1(a,b,c,d,e,f,g,h,i,j,k,l) {
    return 'All iz Well'
}
// You can have. You can pass in any number of arguments
const items2 = (...list) => {
    return list
}

// console.log(items1(1,2,3,4,5,6,7,8,9,10,11,12));
// console.log(items2(1,2,3,4,5,6,7,8,9,10,11,12));

// The Rest