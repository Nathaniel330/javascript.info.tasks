import * as variables from './scriptVariables.js'
import * as functions from './scriptFunctions.js'
import * as arrowFns from './scriptArrowFunctions.js'
import * as arrMethods from './scriptArrayMethods.js'
import * as objects from './scriptObjects.js'

window.addEventListener("DOMContentLoaded", () => {
    //[CHANGE 1] made arrays - to STOP DECLARING EVERY BUTTON :) 
    const showAnswersNode = document.querySelectorAll('.showAnswer')
    const modalsNode = document.querySelectorAll('.modal')
    const closeButtonsNode = document.querySelectorAll('.close')

    const showAnswers = Array.from(showAnswersNode)
    const modals = Array.from(modalsNode)
    const closeButtons = Array.from(closeButtonsNode)

    // console.log(showAnswers)

    // I made this first then transitioned to [CHANGE 1]
    // const varTask1Button = document.getElementById('varTask1Button')
    // const varTask1Dialog = document.getElementById('varTask1Dialog')
    // const varTask1Run = document.getElementById('varTask1Run')
    // const varTask1Close = document.getElementById('varTask1Close')

    // Same reason with [CHANGE 1]. STOP writing the same 'addEventListener' to the buttons. See [CHANGE 2]
    //Variables 1
    // showAnswers[0].addEventListener('click', () => {
    //     modals[0].showModal()
    // })
    // varTask1Run.addEventListener('click', () => {
    //     variables.showAlert()
    // })
    // varTask1Close.addEventListener('click', () => {
    //     modals[0].close()
    // })


    //[CHANGE 2] same loop - if modal can be 'OPENED', there must be a way for it to be 'CLOSED'.
    //The HTMLElement Dialog can be closed with 'ESC' button but not everyone uses a keyboard.
    for (let i = 0; i < showAnswers.length; i++) {
        showAnswers[i].addEventListener('click', () => {
            modals[i].showModal()
        })
        closeButtons[i].addEventListener('click', () => {
            modals[i].close()
        })
    }

    //??? How is this possible?? - The RUN buttons are not acquired through getElement or querySelector but for some reason, they work

    // My hunch - the dialog they're in is already selected through querySelect

    //Variables 1
    varTask1Run.addEventListener('click', () => {
        variables.showAlert()
    })

    //Functions 2
    functionTask2Run.addEventListener('click', () => {
        functions.fnRewriteV1()
    })

    //Functions 3
    functionTask3Run.addEventListener('click', () => {
        functions.min()
    })

    //Functions 4
    functionTask4Run.addEventListener('click', () => {
        functions.showPowers()
    })

    //Arrow Function 1
    arrowFnTask1Run.addEventListener('click', () => {
        arrowFns.ask()
    })

});


   









//anything below here is useless
/****************  
* ASYNC / AWAIT *
*****************/

// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     alert( i ); // a prime
//   }
// }

// showPrimes(10)

// function sayHi() {
//   alert( "Hello" );
// }

// alert( sayHi() )