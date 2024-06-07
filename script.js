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

function clearDisplay() {
    firstNum = null;
    operator = null;
    waitingForSecondNum = false;
    displayValue = 0;
    display.textContent = displayValue;
}

function handleNumber(number) {
    // IF waiting for second number:
        // SET displayValue to number
        // SET secondNum to displayValue
        // SET waitingForSecondNum to FALSE   
    if (waitingForSecondNum) {
        displayValue = number;
        waitingForSecondNum = false;
    }    
    // ELSE:
        // IF displayValue equals to 0:
            // SET displayValue to number
        // ELSE:
            // APPEND number to displayValue
    // SET display's text content to displayValue
    // END IF    
    else {
        if (displayValue == 0) {
            displayValue = number;
        } else {
            displayValue += number;
        }
    }
    display.textContent = displayValue;
}

function handleOperator(op) {
    const inputValue = parseInt(displayValue);
    // IF firstNum not set
        // SET waitingForSecondNum to TRUE at the end.
    if (firstNum == null && !waitingForSecondNum) {
        firstNum = inputValue;
        displayValue = '';
        operator = op;
        waitingForSecondNum = true;
    } 
    // IF firstNum already set, operator already set and waitingForSecondNum
        // UPDATE operator
    else if (firstNum != null && operator != null && waitingForSecondNum) {
        operator = op;
    }
    display.textContent = op;

}


function evaluateExpression() {
    const secondNum = parseInt(displayValue);
    const result = operate(firstNum, secondNum, operator);
    displayValue = result;
    display.textContent = displayValue;

    firstNum = null;
    opereator = null;
    waitingForSecondNum = false;
}



// Initialise numbers
let firstNum = null;
let operator = null;
let waitingForSecondNum = false;
let displayValue = 0;


const display = document.querySelector('.display');
display.textContent = displayValue;

const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        const buttonText = this.textContent;
        if (buttonText === "CLEAR") {
            clearDisplay();
        } else if (buttonText === "=") {
            evaluateExpression();
        } else if (buttonText >= "0" && buttonText <= "9") {
            handleNumber(buttonText);
        } else {
            handleOperator(buttonText);
        }
    })
});
