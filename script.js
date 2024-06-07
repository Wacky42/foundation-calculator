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
    // Handling first occurence of second number on first appearance OR after handleOperator is called
        // SET the first digit of the display value to be that number
    // No longer waiting for second number
        //waitingforSecondNum set to FALSE, ready to output result by calling evaluateExpression())
    if (waitingForSecondNum) {
        displayValue = number;
        waitingForSecondNum = false;
    }    
    // The number being handled is the SECOND number, append the next digit to the number. If the current displayed value is 0, make the current display the number.
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
    // Deal with first apperance of a second number, by checking if firstNum is currently null
    if (firstNum == null && !waitingForSecondNum) {
        firstNum = inputValue;
        displayValue = '';
        waitingForSecondNum = true;
        operator = op;
        display.textContent = operator;
    }  
    // Change operator after accidentally misclicking.
    else if (firstNum != null && operator != null && waitingForSecondNum) {
        operator = op;
        display.textContent = operator;
    } 
    // Third number onwards...
    else if (firstNum != null && !waitingForSecondNum) {
            const result = operate(firstNum, inputValue, operator);
            firstNum = parseInt(result);
            waitingForSecondNum = true;
            operator = op;
            display.textContent = firstNum;

        }
    // IF firstNum already set, operator already set and waitingForSecondNum
        // UPDATE operator


}


function evaluateExpression() {
    const secondNum = parseInt(displayValue);
    const result = operate(firstNum, secondNum, operator);
    displayValue = result;
    display.textContent = displayValue;

    firstNum = null;
    operator = null;
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
