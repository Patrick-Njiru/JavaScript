// you can import and export only certain parts of the code that you want

// method 1
export const convertStrToArr = str => str.split('')


// method 2
const capitalizeStr = str => str.charAt(0).toUpperCase() + str.slice(1)

export { capitalizeStr }



// EXPORTING VARIABLES

export const foo = 'bar'
export const bar = 'foo'



// CREATE AN EXPORT FALLBACK WITH EXPORT DEFAULTS

export default function subtract(x,y) {return x-y }

// export default subtract // alternative