window.onload = function() {
    
    const btnDisplay = document.getElementById("btnDisplay");
    const numbers = document.getElementsByClassName("number");
    const selectColor = document.getElementById("color");
    const body = document.getElementsByTagName("body");

    btnDisplay.addEventListener('click', function() {
        // let num1 = parseInt(numbers[0].value);
        // let num2 = parseInt(numbers[1].value);
        // let total = AddTwoNumbers(num1, num2);
        let selectedColorIndex = selectColor.selectedIndex;
        let color = selectColor.options[selectedColorIndex].value;

        body[0].style.backgroundColor = color;

        // if(isNaN(total)) {
        //     alert("Enter a valid number");
        // }
        // else {
        //     alert(total);
        // } 
    });
}





// loops
// conditions
// variables
// operators
// input
// output

// Variables
const constant = 0;
var dontDoVar = 5;
let doLet = 10;

// Conditions
let isRunning = true;
if(isRunning) {

}
else if (true) {

}
else
{

}

switch("1") {
    case "1":
        
    break;
    default: 

    break;
}

// Loop
for(let i = 0; i <= 10; i++) {
    
}

// while(true) {

// }

// for(;true;) {

// }

let sum = 0;
const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// Operator
// === Compares type and value
// == Compares value

// Math Operators
// +, -, *, /, %

// Composite Operators
// +=, -=, *=, /=, %=

// Equality Operator
// ===, !=

// Comparison Operators
// <, >, <=, >=

// Logical Operators
// &&, ||, !

// Input
// Getting information
// input
// textarea
// buttons

// Output
// Displaying Information
// text boxes
// color changes


// AddTwoNumbers(1,5);

function AddTwoNumbers(num1, num2) {
    let total = num1 + num2;
    return total;
}

let compareExample = 5 % 3;
// alert(compareExample);