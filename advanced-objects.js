'use strict'
// CONSTRUCTING OBJECTS

// ES6 PROVIDES A SYNTAX TO CREATE AN OBJECT USING THE 'CLASS' KEYWORD 

// Older Way of Creating an Object - use the 'new' keyword
const SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet
}

// let zeus = new SpaceShuttle('Uranus')

// console.log(zeus);
// console.log(zeus.targetPlanet);

// Modern Way
class SpaceShuttle2 {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet
    }
}

let ragnarok = new SpaceShuttle2('Venus')

// console.log(ragnarok);

// exercise - turn this function to an object constructor using 'class'.
/* 
    function makeClass() {
        return Vegetable
    }

    let Vegetable = makeClass(),
    carrot = new Vegetable('carrot')
    console.log(carrot.name);
*/

// solution

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name
        }
    }
    return Vegetable 
}

let Vegetable = makeClass(),
carrot = new Vegetable('carrot'),
cabbage = new Vegetable('cabbage')

// console.log(carrot);
// console.log(cabbage);



// USING GETTERS AND SETTERS TO CONTROL ACCESS TO OBJECTS
class Book {
    constructor(author) {
        // underscore (_) signifies a private variable
        this._author = author || 'unknown'
    }

    get writer() {
        return this._author
    }

    set writer(updatedAuthor) {
        this._author = updatedAuthor
    }
}

let Insomnia = new Book('')
Insomnia.writer = 'Sidney Sheldon'
// console.log(Insomnia);

