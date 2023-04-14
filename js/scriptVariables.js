/************  
* VARIABLES *
*************/

// VARIABLES.Working with variables

// Declare two variables: admin and name.
let admin, name;

// Assign the value "John" to name.
name = "John";

// Copy the value from name to admin.
admin = name;

// Show the value of admin using alert (must output “John”).
//alert(admin)
export function showAlert() {
    alert(admin)
}



// VARIABLES.Giving the right name

// Create a variable with the name of our planet. How would you name such a variable?
const ourPlanetName = "Earth"

// Create a variable to store the name of a current visitor to a website. How would you name that variable?
let currentUser



// VARIABLES.Uppercase const?

// Examine the following code:
//     const birthday = '18.04.1982';
    
//     const age = someCode(birthday);
    
// Here we have a constant birthday for the date, and also the age constant.

// The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

// Would it be right to use upper case for birthday? For age? Or even for both?

        
//     const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

//     const AGE = someCode(BIRTHDAY); // make age uppercase?


const upperCaseAnswer = "Making the variables uppercase does not do anything in Javascript. However, by convention variables in upper case mean that these values should be constant or should not change. If BIRTHDAY and AGE are intended to have values that should not change, It is alright for both to use upper case."