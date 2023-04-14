/************  
* FUNCTIONS *
*************/

// FUNCTIONS.Is "else" required?
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

        
//     function checkAge(age) {
//         if (age > 18) {
//             return true;
//         } else {
//         // ...
//         return confirm('Did parents allow you?');
//         }
//     }    
    
// Will the function work differently if else is removed?

        
//     function checkAge(age) {
//         if (age > 18) {
//             return true;
//         }
//         // ...
//         return confirm('Did parents allow you?');
//     }    
    
// Is there any difference in the behavior of these two variants?
const isElseRequired = "The current function will work the same even with the 'else' removed. The two variants will not have difference in behavior."



// FUNCTIONS.Rewrite the function using '?' or '||'
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result

    
//     function checkAge(age) {
//         if (age > 18) {
//             return true;
//         } else {
//             return confirm('Did parents allow you?');
//         }
//     }    
    
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:

// Using a question mark operator ?
export const fnRewriteV1 = function(age) {
    age = prompt('age = ___')
    return age > 18 ? alert(true) : confirm('Did your parents allow you?')
}
// Using OR ||
const fnRewriteV2 = function(age) {
    return age > 18 || confirm('Did your parents allow you?')
}


// tests
// function confirm(string) {
//     console.log(string)
// }

//fnRewriteV1(17) //confirm('Did your parents allow you?')
//fnRewriteV1(18) //confirm('Did your parents allow you?')
// console.log(fnRewriteV1(19)) //true

//fnRewriteV2(17) //confirm('Did your parents allow you?')
//fnRewriteV2(18) //confirm('Did your parents allow you?')
// console.log(fnRewriteV2(19))



//  FUNCTIONS.Function min(a, b)
// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:   
//     min(2, 5) == 2
//     min(3, -1) == -1
//     min(1, 1) == 1

export function min(a, b) {
    a = prompt('a = ___')
    b = prompt('b = ___')
    return alert(a > b ? b : a)
}

// tests
// console.log(min(1,2)) //1
// console.log(min(0,1)) //0



//  FUNCTIONS.Function pow(x, n)
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

        
//     pow(3, 2) = 3 * 3 = 9
//     pow(3, 3) = 3 * 3 * 3 = 27
//     pow(1, 100) = 1 * 1 * ...* 1 = 1    
    
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
export function showPowers() {
    const x = prompt('What would be the value of x?')
    const n = prompt('What would be the value of y?')
    if (n < 1) {
        alert(`Power ${n} in not supported, use a positive integer`)
    }
    const resultxN = x**n
    alert(`x=${x}\ny=${n}\n${x}^${n}=${resultxN}`)
}

// P.S. In this task the function should support only natural values of n: integers up from 1.