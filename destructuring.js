'use strict'

// OBJECTS
let voxel = { x:3, y: 8, z: 0.4, w: 3.56 }

// Instead of this...
// let a = voxel.x, b = voxel.y, c = voxel.z

// You can do this

let { x: a, y: b, z: c } = voxel // a = 3, b = 8, c = 0.4
// console.log(a, b, c);


// exercise(snake casing)
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
}

const getTempOfTomorrow = avgTemps => {
    // here we only create a variable for the tommorow field in the object
    const { tomorrow: tempOfTomorrow } = avgTemps

    return tempOfTomorrow
}

// console.log(getTempOfTomorrow(AVG_TEMPERATURES));



// NESTED OBJECTS
const LOCAL_FORECAST = {
    today: { min: 72, max:83 },
    tomorrow: { min: 73.3, max:84.6 }
}

function getMaxOfTmrw(forecast) {
    const { tomorrow : { max: maxOfTomorrow }} = forecast

    return maxOfTomorrow
}

// console.log(getMaxOfTmrw(LOCAL_FORECAST));



// ARRAYS
const testArr = [ -1, -2, 10, 'hi', 'abc' ], 
testArr2 = [ 1, 2, 3, 4, 5 ,7 ]

let [ u, v, w] = testArr // u = -1, v = -2, w = 10,

// console.log(u,v,w);



// TO ASSIGN VARIABLES TO ELEMENTS OF AN ARRAY IN DIFFERENT POSITIONS, USE COMMAS

// each space between the commas represents an element on testArr2
let [ first, , , fourth, , , last ] = testArr2

// console.log(first, fourth, last); // 1,4,7



// INTERCHANGING VARIABLE VALUES THROUGH DESTRUCTURING

// console.log(a); // 3
// console.log(b); // 8

// [ b, a ] = [ a, b ]

// console.log(a); // 8
// console.log(b); // 3


// console.log(`a1-${a1}, b1-${b1}`); // 3,7



// DESTRUCTURING WITH THE REST OPERATOR
const source = [1,2,3,4,5,6,7,8,9,10]

const removeFirstTwo = list => {
    // the first two commas take the first two values of the list array.
    // the rest operator adds the rest of the list items to to arr.
    const [ , , ...arr] = list

    return arr
}

// console.log(source);
// console.log(removeFirstTwo(source));



// PASS OBJECTS AS PARAMETERS