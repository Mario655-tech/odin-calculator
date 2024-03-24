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

addButton.addEventListener("click", () => {
    currentOperation = "add";
    if (firstNumber !== "") {
        firstNumber = runCurrent(Number(firstNumber), Number(secondNumber), currentOperation);
        secondNumber = ""; 
    }
})

allClearButton.addEventListener("click", () => {

});
  
plusMinusButton.addEventListener("click", () => {
    // Your logic here
});
  
percentageButton.addEventListener("click", () => {
    // Your logic here
});
  
divideButton.addEventListener("click", () => {
    // Your logic here
});
  
sevenButton.addEventListener("click", () => {
    // Your logic here
});
  
eightButton.addEventListener("click", () => {
    // Your logic here
});
  
nineButton.addEventListener("click", () => {
    // Your logic here
});
  
multiplyButton.addEventListener("click", () => {
    // Your logic here
});
  
fourButton.addEventListener("click", () => {
    // Your logic here
});
  
fiveButton.addEventListener("click", () => {
    // Your logic here
});
  
sixButton.addEventListener("click", () => {
    // Your logic here
});
  
subtractButton.addEventListener("click", () => {
    // Your logic here
});
  
oneButton.addEventListener("click", () => {
    runCurrent(firstNumber, secondNumber, currentOperation)
    if (firstNumber === "") {
        firstNumber = 1
        displayText.textContent = "1"
    } else {
        secondNumber = 1
        displayText.textContent = "1"
    }
});
  
twoButton.addEventListener("click", () => {
    runCurrent(firstNumber, secondNumber, currentOperation)
    if (firstNumber === "") {
        firstNumber = 2
        displayText.textContent = "2"
    } else {
        secondNumber = 2
        displayText.textContent = "2"
    }
});
  
threeButton.addEventListener("click", () => {
    // Your logic here
});
  
addButton.addEventListener("click", () => {
    // Your logic here
});
  
zeroButton.addEventListener("click", () => {
    // Your logic here
});
  
decimalButton.addEventListener("click", () => {
    // Your logic here
});
  
equalsButton.addEventListener("click", () => {
    // Your logic here
});
  
function runCurrent(firstNumber, secondNumber, currentOperation) {
    if (firstNumber !== "" && secondNumber !== "") {
    
    if (currentOperation === "add") {
        let result;
        result = add(firstNumber, secondNumber)
        displayText.textContent = result
        firstNumber = result
        secondNumber = ""
    }
    return firstNumber
  }
}
