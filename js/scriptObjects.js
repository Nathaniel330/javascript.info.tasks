/**********  
* OBJECTS *
***********/

// OBJECTS.Hello, object
// Write the code, one line for each action:

// Create an empty object user$.
const user$ = {}

// Add the property name with the value John.
user$.name = 'John'

// Add the property surname with the value Smith.
user$.surname = 'Smith'

// Change the value of the name to Pete.
user$.name = 'Pete'

// Remove the property name from the object.
delete user$.name

//console.log(user$)



// OBJECTS.Check for emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:
let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    if (!Object.values(obj).length) {
        return true
    }
    return false
}

//console.log(isEmpty(schedule))



// OBJECTS.Sum object properties
// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.