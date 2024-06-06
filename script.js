function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Error!";
    }
}

// Initialise numbers
let firstNum = null;
let secondNum = null;
let operator = null;

const display = document.querySelector('.display');
const allButtons = document.querySelectorAll('button');
const numberButtons = document.querySelectorAll('.numbers > button');
const miscButtons = document.querySelectorAll('.misc > button');
const operatorButtons = document.querySelectorAll('.operators > button');

let displayValue = '';

allButtons.forEach(button => {
    button.addEventListener('click', function(event) {

    })
});
