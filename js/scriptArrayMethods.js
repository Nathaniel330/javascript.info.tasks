/****************  
* ARRAY METHODS *
*****************/

// ARRAY METHODS.Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:
        
//     camelize("background-color") == 'backgroundColor';
//     camelize("list-style-image") == 'listStyleImage';
//     camelize("-webkit-transition") == 'WebkitTransition';    
    
// P.S. Hint: use split to split the string into an array, transform it and join back.

const camelize = word => {
    let camelCase = word.split("-")
    if (camelCase.length < 2) return camelCase
    for (let i = 1; i < camelCase.length; i++) {
        if (camelCase[i][0]) {
            camelCase[i] = camelCase[i][0].toUpperCase() + camelCase[i].slice(1)
        }
    }
    return camelCase.join("")
}

// test
// console.log(camelize("-webkit----transition"))



// ARRAY METHODS.Filter range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:     
    let arr = [5, 3, 8, 1];
//     let filtered = filterRange(arr, 1, 4);
//     alert( filtered ); // 3,1 (matching values)
//     alert( arr ); // 5,3,8,1 (not modified) 

const filterRange = (array, a, b) => {
    let filtered = array;
    return filtered.filter(e => e >= a && e <= b)
}

// tests
// console.log(filterRange([5, 3, 8, 1], 1, 4))
// console.log(arr)



// ARRAY METHODS.Filter range "in place"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr2 and removes from it all values except those that are between a and b. The test is: a ≤ arr2[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:   
    let arr2 = [5, 3, 8, 1];
//     filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
//     alert( arr2 ); // [3, 1]    

const filterRangeInPlace = (array, a, b) => {
    for (let i = 0; i < array.length; i++) {
        let value = array[i]

        // remove if outside of the interval
        if (value < a || value > b) {
            array.splice(i, 1)
            i--
        }
    }
}

filterRangeInPlace(arr2, 1, 4)

// test
// console.log(arr2)



// ARRAY METHODS.Sort in decreasing order
    let arr3 = [5, 2, 1, -10, 8];
// // ... your code to sort it in decreasing order
// alert( arr3 ); // 8, 5, 2, 1, -10

arr3.sort((a, b) => a > b ? -1 : 1)

// test
// console.log(arr3)



// ARRAY METHODS.Copy and sort array
// We have an array of strings arr4. We’d like to have a sorted copy of it, but keep arr4 unmodified.

// Create a function copySorted(arr4) that returns such a copy.

    let arr4 = ["HTML", "JavaScript", "CSS"];

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr4 ); // HTML, JavaScript, CSS (no changes)

const copySorted = array => {
    let copy = array.slice()
    return copy.sort()
}

let sorted = copySorted(arr4);


//tests
// console.log(sorted)
// console.log(arr4)



// ARRAY METHODS.Create an extendable calculator
// Create a constructor function Calculator that creates “extendable” calculator objects.

function Calculator() {
    this.operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    }
}

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Calculator.prototype.calculate = function(str) {
    let split = str.split(" ")
    let x = +split[0]
    let op = split[1]
    let y = +split[2]

    return this.operations[op](x, y)
}

// Usage example:

let calc = new Calculator;
// test
//  alert( calc.calculate("4 + 6") ); // 10

// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

Calculator.prototype.addMethod = function(name, func) {
    this.operations[name] = func
}

// For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
// test
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.



// ARRAY METHODS.Map to names
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = users.map(user => user.name)

// test
// alert( names ); // John, Pete, Mary



// ARRAY METHODS.Map to objects
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:
let johna = { name: "Johna", surname: "Smith", id: 1 };
let peter = { name: "Peter", surname: "Hunt", id: 2 };
let marya = { name: "Marya", surname: "Key", id: 3 };

let userz = [ johna, peter, marya ];

let usersMapped = userz.map( user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}) 
)

/*
usersMapped = [
  { fullName: "Johna Smith", id: 1 },
  { fullName: "Peter Hunt", id: 2 },
  { fullName: "Marya Key", id: 3 }
]
*/

//tests
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Johna Smith

// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

// The catch is: using '=>' while attempting to create an object will require '{}'.
// If '=> {' happens, it is like a normal arrow function.
// That is why '({' should be used for it to work.



// ARRAY METHODS.Sort users by age

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:
let johnne = { name: "Johnne", age: 25 };
let petek = { name: "Petek", age: 30 };
let mariya = { name: "Mariya", age: 28 };

let arrToSort = [ petek, johnne, mariya ];

function sortByAge(array) {
    return array.sort((a, b) => a.age > b.age ? 1 : -1)
};

// tests
// alert (` Before Sorting: \n
//     arrToSort[0] = ${arrToSort[0].name}\n 
//     arrToSort[1] = ${arrToSort[1].name}\n 
//     arrToSort[2] = ${arrToSort[2].name}`
// ); 

// sortByAge(arrToSort)

// alert (` After Sorting: \n
//     arrToSort[0] = ${arrToSort[0].name}\n 
//     arrToSort[1] = ${arrToSort[1].name}\n 
//     arrToSort[2] = ${arrToSort[2].name}`
// ); 

// now: [johnne, mariya, petek]
// alert(`arrToSort[0] = ${arrToSort[0].name}`); // Johnne
// alert(`arrToSort[1] = ${arrToSort[1].name}`); // Mariya
// alert(`arrToSort[2] = ${arrToSort[2].name}`); // Petek




// ARRAY METHODS.Shuffle an array
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// arr = [3, 2, 1]

// shuffle(arr);
// arr = [2, 1, 3]

// shuffle(arr);
// arr = [3, 1, 2]

// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

/* I HATE THIS *SHUFFLE* EVEN MORE THAN THE CALCULATOR TASK */

// ARRAY METHODS.Get average age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:
let johnn = { name: "Johnn", age: 25 };
let pette = { name: "Pette", age: 30 };
let maery = { name: "Maery", age: 29 };

let arrAge = [ johnn, pette, maery ];

function getAverageAge(users) {
    const total = users.reduce((acc, c) => acc + c.age, 0)
    return total / users.length
}

// test
// alert( getAverageAge(arrAge) ); // (25 + 30 + 29) / 3 = 28



// ARRAY METHODS.Filter unique array members
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:
function unique(arr) {
    return arr.filter((element, index, arr) => index == arr.indexOf(element))
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// test
// alert( unique(strings) ); // Hare, Krishna, :-O



// ARRAY METHODS.Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:
let userx = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(userx);

function groupById(arr) {
    return arr.reduce((acc, c) => {
        acc[c.id] = c
        return acc
    }, {})
}

// test
// console.log(usersById)

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.