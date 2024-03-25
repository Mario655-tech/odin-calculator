const displayText = document.querySelector(".displayText");
const allClearButton = document.querySelector("#allClear");
const plusMinusButton = document.querySelector("#plusMinus");
const percentageButton = document.querySelector("#percentage");
const divideButton = document.querySelector("#divide");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const multiplyButton = document.querySelector("#multiply");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const subtractButton = document.querySelector("#subtract");
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const addButton = document.querySelector("#add");
const zeroButton = document.querySelector("#zero");
const decimalButton = document.querySelector("#decimal");
const equalsButton = document.querySelector("#equals");


let currentOperation = ""
let firstNumber = ""
let secondNumber = ""
let displayValue = ""

function add (firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

function subtract (firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

function divide (firstNumber, secondNumber) {
    return firstNumber / secondNumber
}

function percentage (displayValue) {
    return displayValue / 100
}

allClearButton.addEventListener("click", () => handleClick(inputHandling('allClear')));
plusMinusButton.addEventListener("click", () => handleClick(inputHandling('plusMinus')));
percentageButton.addEventListener("click", () => handleClick(inputHandling('percentage')));
divideButton.addEventListener("click", () => handleClick(inputHandling('/')));
sevenButton.addEventListener("click", () => handleClick(inputHandling(7)));
eightButton.addEventListener("click", () => handleClick(inputHandling(8)));
nineButton.addEventListener("click", () => handleClick(inputHandling(9)));
multiplyButton.addEventListener("click", () => handleClick(inputHandling('*')));
fourButton.addEventListener("click", () => handleClick(inputHandling(4)));
fiveButton.addEventListener("click", () => handleClick(inputHandling(5)));
sixButton.addEventListener("click", () => handleClick(inputHandling(6)));
subtractButton.addEventListener("click", () => handleClick(inputHandling('-')));
oneButton.addEventListener("click", () => handleClick(inputHandling(1)));
twoButton.addEventListener("click", () => handleClick(inputHandling(2)));
threeButton.addEventListener("click", () => handleClick(inputHandling(3)));
addButton.addEventListener("click", () => handleClick(inputHandling('+')));
zeroButton.addEventListener("click", () => handleClick(inputHandling(0)));
decimalButton.addEventListener("click", () => handleClick(inputHandling('.')));
equalsButton.addEventListener("click", () => handleClick(inputHandling('=')));


const handleClick = () => {
  };

let operator = "";

function inputHandling(num) {
    const numbers = "1234567890"

    if (numbers.includes(num)) {
        if (operator === "") {
            secondNumber += num
            displayText.textContent += num 
        } else {
            displayText.textContent = ""
            firstNumber += num
            displayText.textContent += num
        }
  
        
    }


    if (num === "+" || num === "-" || num === "*" || num === "/") {
        operator = num;
        if (operator === "+") {
            if (firstNumber !== "" && secondNumber !== "") {
                displayText.textContent = (Number(firstNumber) + Number(secondNumber))
                firstNumber = displayText.textContent
                secondNumber = ""
                operator = ""
            }
        }

        if (operator === "-") {
            if (firstNumber !== "" && secondNumber !== "") {
                displayText.textContent = (Number(secondNumber) - Number(firstNumber))
                firstNumber = displayText.textContent
                secondNumber = ""
                operator = ""
            }
        }

        if (operator === "*") {
            if (firstNumber !== "" && secondNumber !== "") {
                displayText.textContent = (Number(firstNumber) * Number(secondNumber))
                firstNumber = displayText.textContent
                secondNumber = ""
                operator = ""
            }
        }

        if (operator === "/") {
            if (firstNumber !== "" && secondNumber !== "") {
                displayText.textContent = (Number(secondNumber) / Number(firstNumber))
                firstNumber = displayText.textContent
                secondNumber = ""
                operator = ""
            }
        }
    }

}

