// 1 // Record Collection

let collection = {
    2548: {
        'album': 'Slippery When Wet',
        'artist': 'Bon Jovi',
        'tracks': [
            'Let It Rock',
            'You Give Love a Bad Name'
        ]
    },
    2468: {
        'album': '1999',
        'artist': 'Prince',
        'tracks': [
            '1999',
            'Little Red Corvette'
        ]
    },
    1245: {
        'artist': 'Robert Palmer',
        'tracks': [ ]
    },
    5439: {
        'album': 'ABBA Gold',
    },
}

// making a copy of the collection
// way 1
// let collectionCopy = JSON.parse(JSON.stringify(collection))
// way 2
let collectionCopy = {...collection} // spread operator
// console.log('copy', collectionCopy);

const updateRecords = (id, prop, value) => {
    // Assumptions
    /*
        1. no new records are added. Only existing ones are updated.
        2. The value argument must be a string
     */
    if(value == ('' || null || undefined)) {
        delete collection[id][prop]
    } else if (prop === 'tracks') {
        // works when the tracks array exists or does not exist
        collection[id][prop] = collection[id][prop] || []
        collection[id][prop].push(value)
    }

    return collection
}

// console.log(updateRecords(5439, 'album', 'ABBA'));
// console.log(updateRecords(5439, 'tracks', 'Abba'));
// console.log(updateRecords(5439, 'tracks', 'test'));

// Now a CRUD - Create, Read, Update, Delete - Record
// function recordsModifier1(id, property='', value='', operation) { // the empty string are placeholder arguments in case no values are provided
// function recordsModifier1(id, property='', value='') { // the empty string are placeholder arguments in case no values are provided
//     let operation, result, confirmation

//     if(id && typeof id === 'number') {

//         // CREATE
//         if (!collection[id]) {
//             operation = prompt('Proceed to Create New Record?(yes/no)').toLocaleLowerCase()
//             if (operation == 'yes') {
//                 collection[id] = {}
//                 collection[id][property] = value
//                 alert('Record Created Successfully!')
//                 result = collection 
//             } 
//         alert('Failed to Create Record. To Read a Record, Please Input an Existing Id')
//         return collection
//         }
    
//         // READ, UPDATE or DELETE
//         if (collection[id] && (!property || !value)) {
//             operation = prompt('What would you like to do to this record? (read/delete/update)').toLocaleLowerCase()
//             if (operation == 'read') {
//                 result = collection[id]
//             } else if (operation == 'delete') {
//                 confirmation = prompt('Are you sure?').toLocaleLowerCase()
//                 if (confirmation == 'yes') {
//                     delete collection[id]
//                     alert('Record Deleted Successfully!')
//                     result = collection
//                 } else {
//                     alert('Record Not Deleted')
//                     return collection
//                 }
//             } else if (operation == 'update') {
//                 return alert('Please input the Id, Property and Value of the Record You Want to Update Respectively')
//             }
//         }
        
//         // UPDATE
//         if (property && value && collection[id] ) {
//             operation = prompt('Proceed to Update Record?(yes/no)').toLocaleLowerCase()
//             if (operation == 'yes') {
//                 if (property == 'tracks') {
//                     collection[id][property] = collection[id][property].push(value) || [].push(value)
//                     alert ('Record Updated Successfully!')
//                 } else {
//                     collection[id][property] = value
//                 }
//                 result = collection
//             }
//         }
    
//         return result
//     }

//     return alert('Must add Id(whole number)!')
// }

// // recordsModifier1('', 'artist', 'Eminem')
// recordsModifier1(1, 'album', 'Music to Be Murdered By')
// recordsModifier1(1, 'tracks', ["Godzilla", "Farewell", 'Yah Yah', 'Gnat'])
// recordsModifier1(1, 'tracks', ["Alfred's Theme", "Lock It Up", 'Those Kinda Nights'])

// console.log(collection);

function recordsModifier2(id, props, action) {
        
    // Only accept positive integers
    if (typeof id !== 'number' || id < 0 || typeof props !== 'object' || 
    (action !== 'create' && action !== 'read' && action !== 'update' && action !== 'delete' && action !== 'delete props') ) {
        return (`\tInvalid input(s). \n\tOrder of inputs: (id, props, action) \n\tid - positive integer, \n\tprops - an object - {album: '', artist: '', tracks: []}, \n\taction - create/read/update/delete/delete props`)
        }

    Math.floor(id)

    switch(action) {
        case 'create':
            if (collection[id]) {
                return `Record ${id} Already Exists! Cannot Create Record.`
            } else if(Object.keys(props).length < 1) {
                collection[id] = {}
                props = { album: '', artist: '', tracks: [] }

                for (const prop in props) {
                    // Object.assign(collection,{props[prop]}) // adding a new propeties to an object
                    collection[id][prop] = props[prop]
                }

                console.log(`Record ${id} Created Successfully`);
            } else {
                collection[id] = {}
                
                for (const prop in props) {
                    if (prop !== 'tracks' && prop !== 'artist' && prop !== 'album' ) {
                        return `Invalid Property - ${prop}. Allowed Properties are 'artist', 'album' and 'tracks'.`
                    }
                    collection[id][prop] = props[prop]              
                }

                console.log(`Record ${id} Created Successfully`);
            }
            return collection
        case 'read':
            return (collection[id] ? collection[id] : 'This Record Does Not Exist Enter a Valid ID')
        case 'update':
            if (Object.keys(props).length < 1) {
                return "You must add properties to update"
            } else {
                for (const prop in props) {
                    if (prop !== 'tracks' && prop !== 'artist' && prop !== 'album' ) {
                        return `Invalid Property - ${prop}. Allowed Properties are 'artist', 'album' and 'tracks'.`
                    } else if (prop === 'tracks') {
                        if(typeof props[prop] !== 'object') {
                            return "The Value of 'tracks' Must be an Array Containing songs"
                        }

                        for (const track of props[prop]) {
                            collection[id][prop].push(track)
                        }
                    } else {
                        collection[id][prop] = props[prop]
                    }
                }
                console.log(`Record ${id} Updated Successfully`);
            }
            return collection
        case 'delete':
            if (!collection[id]) {
                return 'Record does not exist. Enter a Valid ID'
            } else {
                delete collection[id]
                console.log(`Record ${id} Deleted Successfully.`);
                return collection
            }
        case 'delete props':
            for (const prop in props) {
                if (prop !== 'tracks' && prop !== 'artist' && prop !== 'album' ) {
                    return `Invalid Property - ${prop}. Allowed Properties are 'artist', 'album' and 'tracks'.`
                }
                delete collection[id][prop]
                console.log(`${prop} Property Deleted Successfully`);
                }
            return collection[id]
    }
}

// recordsModifier1('', 'artist', 'Eminem')
// console.log(recordsModifier2(1050, {artist: 'Eminem', tracks: ["Godzilla", "Farewell", "Yah Yah" ], album: 'MTBMB'}, 'create')) // works!
// console.log();
// console.log(recordsModifier2(1050, {}, 'read')); // works!
// console.log();
// console.log(recordsModifier2(1245, {'album': "ABC", tracks: [1,2,3]}, 'update'))
// console.log();
// console.log(recordsModifier2(1245, {tracks: ['a','b','c']}, 'update')) // works!
// console.log();
// console.log(recordsModifier2(1050, {trancks: ["Asshole"]}, 'update')) // works
// console.log();
// console.log(recordsModifier2(1050, {tracks: ''} , 'delete props')) // works!
// console.log();
// console.log(recordsModifier2(5439, {}, 'delete')) // works

// 3 - Look Up

let contacts = [
    {
        'First Name': 'Akira',
        'Last Name': 'Laine',
        number: '0543236543',
        likes: ['Pizza','Coding','Brownie Points']
    },
    {
        'First Name': 'Harry',
        'Last Name': 'Potter',
        number: '0993233543',
        likes: ['Hogwarts','Magic','Hagrid']
    },
    {
        'First Name': 'Sherlock',
        'Last Name': 'Holmes',
        number: '0469583739',
        likes: ['Intriguing Cases','violin']
    },
    {
        'First Name': 'Kristian',
        'Last Name': 'Vos',
        number: 'unknown',
        likes: ['JavaScript','Gaming','Foxes']
    },
] 

// receives first or last name and another property about the person and returns the value of that property
const lookUpProfile = (name, prop) => {
    for (const contact of contacts) {
        if (contact['First Name'] === name || contact['Last Name'] === name) {
            return contact[prop] ? 
                `${name}'s ${prop} ${prop == 'likes' ? 'are' : 'is'} ${prop !== 'likes' ? '\n' + contact[prop] : contact[prop].map(a => '\n- ' + a + '\n')}` 
                : `${prop} Does Not Exist`
            //   OR
            // return contact[prop] || 'No Such Property'
        }
    }
    return `${name} Does Not Exist`
}

console.log(lookUpProfile('Kristian', 'likes'))