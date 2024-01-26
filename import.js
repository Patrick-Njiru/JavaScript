// 'use strict'

// In the past the 'require' function was used to import code from other files.

// Now we can just use import and export

import { convertStrToArr ,capitalizeStr } from "./export";

const cap = convertStrToArr('hello')
console.log(cap);


console.log(capitalizeStr('patoranking'));

// check for errorS


// IMPORTING EVERYTHING FROM A FILE
// To import everything from a file use * - ASTERICK/STAR

import * as someName from './export' // someName is an object



// IMPORTING A DEFAULT EXPORT

import subtract from "./export"; // we don't use curly braces