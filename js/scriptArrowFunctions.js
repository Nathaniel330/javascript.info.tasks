/************  
* ARROW FNs *
*************/

// ARROW FUNCTIONS.Rewrite with arrow function
// Replace Function Expressions with arrow functions in the code below:     

//     function ask(question, yes, no) {
//         if (confirm(question)) yes();
//         else no();
//     }

//     ask(
//         "Do you agree?",
//         function() { alert("You agreed."); },
//         function() { alert("You canceled the execution."); }
//     );

export const ask = (question, yes, no) => {
    question = "Do you agree?"

    yes = () => {
        alert("You agreed.")
    }

    no = () => {
        alert("You canceled the execution.")
    }

    if (confirm(question)) {
        return yes()
    } else {
        return no()
    }
}

// function yep() {
//     alert("You agreed.")
// }
// function nop() {
//     alert("You canceled the execution.")
// }
let testQuestion = "Do you agree?"
//ask(testQuestion, yep, nop)