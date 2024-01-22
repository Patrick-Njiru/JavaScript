let number = 5 // in-line comment

/*
This is 
a multiline comment
*/


// Don't declare variable using 'var'. It is outdated
// Use let for changing variables
// Use const for fixed variables.
// JS uses camel-case naming convention

let firstName = 'Patrick', middleName = 'Njiru', surName = "Kung'u"

// const myFullName = firstName + ' ' + middleName + ' ' + surName // string concatenation
const myFullName = firstName.concat(' ' + middleName).concat(' ' + surName)

// console.log(myFullName);