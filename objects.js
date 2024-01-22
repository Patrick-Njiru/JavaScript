//Objects, like arrays can hold different data types.
// The consist of key-value pairs
let ourDog = {
    name: 'Camper',
    legs: 4,
    tails: 1,
    herbivorous: false,
    friends: ['Everyone']
}

// console.log(`Dog Details \nName: ${ourDog.name}\t|\t Friends: ${ourDog.friends}`); // or ourDog['friends']

// Bracket Notation Must Use Case

let testObj = {
    'An entree': 'hamburger',
    'My side': 'veggies',
    'The drink': 'water',
    10: 'perfection'
}
// It's not possible to access the object properties using dot notaion when the keys are "Multi-Word strings" or "Numbers"

// console.log(testObj["The drink"], testObj[10]);

// Accessing Object Properties using Variables.

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

// Add New Properties to an Object

ourDog.age = 2
footballers[7] = 'CR7'
// console.log(ourDog, footballers);

// Deleting Properties from an Object

delete ourDog.herbivorous
// console.log(ourDog.herbivorous); // undefined

// Using Objects for Lookup

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

// Looping through objects
for (const trait in ourDog) {
        // console.log(`${trait} : ${ourDog[trait]}`)
}

// Testing Objects For Properties
const myObj = {
    gift: 'pony',
    pet: 'cat',
    bed: 'sleigh'
},

checkObj = checkprop => { 
    console.log(myObj.hasOwnProperty(checkprop) ? myObj[checkprop] : 'Not Found')
}

// checkObj('pet')

// Manipulating complex objects. 
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

let testObj1 = {}

console.log(testObj1);