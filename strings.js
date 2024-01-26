'use strict'
// ESCAPING A QUOTE CHARACTER

let myStr = '<a href="https://www.example.com" target="_blank">Link</a>' 
// console.log(myStr);

myStr = `<a href="https://www.example.com" target='_blank'>Link</a>` // backticks
// console.log(myStr);



/*
CODE OUTPUT
\'  single quote
\"  double quote
\\  backlash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed
*/

myStr = `first line \n\t\\second line\nthirdline`
// console.log(myStr );



// STRING CONCATENATION
let firstName = 'Patrick', middleName = 'Njiru', surName = "Kung'u"

// 1)   + operator
let myFullName = firstName + ' ' + middleName + ' ' + surName 
// console.log(myFullName);

// 2)   concat() method
myFullName = surName.concat(' ' + firstName).concat(' ' + middleName)
// console.log(myFullName);

// 3)   += operator

let str1 = 'char', str2 = 'acter'

str1 += str2

// console.log(str1);

// 4)   Concatenate strings with variables

myStr = 'My name is ' + firstName + ' ' + middleName + ' and I am well!'
// console.log(myStr);



// LENGTH OF A STRING
// console.log(myStr.length);



// FINDING CHARACTER IN A STRING
let myInitials = firstName[0] + middleName[0] + surName[0] // indexing starts from 0
// console.log(myInitials); 

lastLetterOfFirstName = firstName[firstName.length-1]
// console.log(lastLetterOfFirstName);



// STRING IMMUTABILITY
firstName[0] = 'K'

// console.log(firstName); // still remains Patrick. Cannot change individual characters of a string



// WORD GAME (MADLIB)

const wordBlanks = (myNoun, myAdjctive, myVerb, myAdverb) => (
    `The ${myAdjctive} ${myNoun} ${myVerb} to the store ${myAdverb}.`
) 


// console.log(wordBlanks('dog','big','ran','quickly'));
