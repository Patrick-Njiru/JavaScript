'use strict'
//Objects, like arrays can hold different data types.
// They consist of key-value pairs
let ourDog = {
    name: 'Camper',
    legs: 4,
    tails: 1,
    herbivorous: false,
    friends: ['Everyone']
}

// console.log(`Dog Details \nName: ${ourDog.name}\t|\t Friends: ${ourDog.friends}`); // or ourDog['friends']



// MUST USE CASE FOR BRACKET NOTATION
let testObj = {
    'An entree': 'hamburger',
    'My side': 'veggies',
    'The drink': 'water',
    10: 'perfection'
}
// It's not possible to access the object properties using dot notaion when the keys are "Multi-Word strings" or "Numbers"

// console.log(testObj["The drink"], testObj[10]);



// ACCESSING OBJECT PROPERTIES USING VARIABLE.
let footballers = {
    12: 'Namath',
    16: 'Montana',
    19: 'Unitas'
}

let playerNumber = 16,
// player = footballers.playerNumber // undefined
player = footballers[playerNumber]
// console.log(player); // Montana

// Updating Object Properties
footballers[12] = 'Nathan'
ourDog.name = 'Bully'

// console.log(ourDog, footballers);



// ADD NEW PROPERTIES TO AN OBJECT
ourDog.age = 2
footballers[7] = 'CR7'
// console.log(ourDog, footballers);



// DELETING PROPERTIES FROM AN OBJECT
delete ourDog.herbivorous
// console.log(ourDog.herbivorous); // undefined



// USING OBJECTS FOR LOOKUP
function phoneticLookup(val) {
    let result = '',
    lookup = {
        alpha: 'Adams',
        bravo: 'Boston',
        charlie: 'Chicago',
        delta: 'Denver',
        echo: 'Easy',
        foxtrot: 'Frank'
    }
    return lookup[val.toLowerCase()]
}

// console.log(phoneticLookup('ALPHA'))



// LOOPING THROUGH OBJECTS
for (const trait in ourDog) {
        // console.log(`${trait} : ${ourDog[trait]}`)
}


// TESTING OBJECTS FOR PROPERTIES
const myObj = {
    gift: 'pony',
    pet: 'cat',
    bed: 'sleigh'
},

checkObj = checkprop => { 
    console.log(myObj.hasOwnProperty(checkprop) ? myObj[checkprop] : 'Not Found')
}

// checkObj('pet')



// MANIPULATING COMPLEX OBJECTS 
// Accessing nested Objects and Arrays

let myMusic = [
    {
        'artist': 'Billy Joel',
        'title': 'Piano Man',
        'release year': 1973,
        'formats': [
            'CD',
            '8T',
            'LP'
        ],
        'gold': true    
    },
    {
        'artist': 'Eminem',
        'title': 'Godzilla',
        'release year': 2020,
        'formats': [
            'CD',
            'YouTube Video'
        ],
        'gold': true    
    },
    {
        'artist': 'JID',
        'title': 'Dance Now',
        'release year': undefined,
        'formats': [
            'YouTube Video'
        ],
        'gold': false    
    },
]

// console.log('Songs:')
// for (const object of myMusic) {
//     console.log(object.title,'-',object.artist)
// }
let billYJoelSongFormats = myMusic[0].formats
// console.log(billYJoelSongFormats);

let myStorage = {
    car: {
        inside: {
            'glove box': 'maps',
            'passenger seat': 'crumbs'
        },
        outside: {
            trunk: 'jack',
        }
    }
}

let gloveBoxContents = myStorage.car.inside['glove box']
// console.log(gloveBoxContents) // maps



// PREVENTING MUTATION OF OBJECTS THAT ARE DECLARED USING CONST
const MATH_CONSTANTS = {
 'PI': 3.142,
 'Imaginary Unit': '0 + 1i'
}

// although we have used const, we can still mutate the above object as shown below
// MATH_CONSTANTS['PI'] = 0
// console.log(MATH_CONSTANTS);

// to prevent this, we can freeze the object.

Object.freeze(MATH_CONSTANTS)

// MATH_CONSTANTS['PI'] = 0 // cannot reassing new value
// console.log(MATH_CONSTANTS); 



// CREATE AN OBJECT FROM FUNCTION INPUTS
// if the parameter names are to be used as keys of the object. you don't have to repeat yourself
const createPerson = (name, age, gender) => ({ name, age, gender})

// console.log(crea tePerson('Peter Parker', 21, 'male'));


// WRITE CONCISE DECLARATIVE FUNCTIONS
// An object can contain a function
let bicycle = {
    gear: 2,
    setGear: function(newGear) {
        'use strict'
        this.gear = newGear
    }
}

// bicycle.setGear(5)
// console.log(bicycle.gear);
// this can now be simplified and written as
bicycle = {
    gear: 2,
    setGear(newGear) {
        'use strict'
        this.gear = newGear
    }
}

// bicycle.setGear(3)
// console.log(bicycle.gear);

