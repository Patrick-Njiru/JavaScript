'use strict'
// increment or decrement operator
let x = 7

x += 2 // x = x+2
// console.log(x);
x-- // x -=1
x++ // x +=1
x*=2 // x = x*2
x/=3 // x = x/12

// console.log(x);

// Remainder

// console.log(4%3); // % is called the remainder operator (modulus operator)


//  Generate Random Fractions
function randomFractions() {
    // Math.floor() eliminates the decimal places leaving the number as it is. Math.ceil() round the number to the next whole number
    console.log(`${Math.ceil(Math.random()*10)} / ${Math.floor(Math.random() * 20 + 1)}`)
}

// randomFractions()

// Generate whole numbers

// console.log(Math.floor(Math.random()*100)); // random  whole  number from 0-99

// Generate random numbers within a range

function randomRange(min, max) {
    /* 
        math.random generate numbers between 0-1, 
        0-1 multiplied by max-min will produce values between 0-(max-min)
        this result added to min produce values from min to max
    */
    console.log(Math.floor(Math.random()*(max-min+1)) + min)
}

// randomRange(7,15)

// ParseInt Function- converts string to number

// console.log(parseInt('24'), typeof parseInt('24'));

// if the string starts with a number, it picks the numbers up to where there is a letter, space or symbol
// console.log(parseInt('2dn')); // 2
// console.log(parseInt('5"6d45n')); // 5
// console.log(parseInt('56d45n')); // 56
// console.log(parseInt('8 4d45n')); // 8
// if the string does not start with a number. It returns NaN - not a number
// console.log(parseInt('"56d45n')); // NaN
// console.log(parseInt('a56d45n')); // NaN
// console.log(parseInt('a 56d45n')); // NaN

// Using ParseInt with Radix

/*
    A radix parameter specifies the number system to use: 
    2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal. 
    If radix is omitted, JavaScript assumes radix 10. 
    If the value begins with "0x", JavaScript assumes radix 16.
*/

const convertToInteger = (str, base) => {
    // the base determines which number system to use to convert the string to an integer.
    // Default base is 10, i.e, parseInt(str) === parseInt(str, 10)
    console.log(parseInt(str, base))
}
// Binary
// base 2 - 0,1,10
// convertToInteger('0/1b1', 2) // 0
// convertToInteger('10', 2) // 1
// convertToInteger('1001101', 2) //

// Octal
// base 8 - 0-7, 8/9 -nan, 10=8 - 17=15, 18/19=1, 20=16-27=23,28/29=2...
// convertToInteger('0-7', 8) // 0-7
// convertToInteger('8/9', 8) // Nan
// convertToInteger('10', 8) // 8
// convertToInteger('17', 8) // 15
// convertToInteger('18/19', 8) // 1
// convertToInteger('20', 8) // 16
// convertToInteger('28/29', 8) // 2
// convertToInteger('38/39', 8) // 3

// Hexadecimal
/* base 16 - 0-9,A,B,C,D,E,F,10,11,... */
// convertToInteger('F', 16) // 15
// convertToInteger('A', 16) // 10
// convertToInteger('10', 16) // 16
// convertToInteger('19', 16) // 25
// convertToInteger('20', 16) // 32 - 10+10 === 16+16
