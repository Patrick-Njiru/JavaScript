"use strict"
// 'USE STRICT' -usually added at the beginning of js files or functions to catch coding mistakes


// DIFFERENCES BTWN REST & SPREAD OPERATORS

/*
    Spread Operator expands an iterable - objects,arrays and strings - into its individual elements
    it is also used to make copies of objects and arrays
    
    Rest Operator collects multiple elements and condenses them into a single array.
*/

/*
    Spread Operator is used to pass props to a Component in React

    Rest Operator is handy in destructuring to extract the remaining properties:
    
*/



// TEMPLATE LITERALS - 
// Created using BACKTICKS (``)
//example

let me = {
    name: 'Patrick Njiru',
    likes: 'Coding and shooting pool'
}
// It appears exactly as I have put it - 2 lines
console.log(
`Hi there my Name is ${me.name}.
I like ${me.likes}`
);

// with backticks, you can freely use single n double quotes with no issue.