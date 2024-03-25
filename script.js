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


allClearButton.addEventListener("click", () => handleClick(inputHandling('allClear')));
plusMinusButton.addEventListener("click", () => handleClick(inputHandling('+-')));
percentageButton.addEventListener("click", () => handleClick(inputHandling('%')));
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

let firstNum = ""
let secondNum = ""
let operator = ""
let result = ""
let secondOperator = ""

function inputHandling(num) {
    const numbers = "1234567890"
    const operators = ["+", "-", "*", "/", "=", "%", "allClear", "+-"];


    if(numbers.includes(num)) {
        if (operator === "") {
            displayText.textContent = ""
            firstNum += num
            displayText.textContent += firstNum
        } else {
            displayText.textContent = ""
            secondNum += num
            displayText.textContent += secondNum
        }
    }

    if (operators.includes(num)) {
        if (num === "allClear") {
            clear();
            return;
        }
        if (num === "+-") {
            // Breaks after a few usages. Future me problem :)
            displayText.textContent = Number(displayText.textContent) * -1;
            if (operator === "") {
                firstNum = displayText.textContent;
            } else {
                secondNum = displayText.textContent;
            }
            return;
        }
        
        if (num === "%") {
            // Calculate percentage
            if (operator === "") {
                firstNum = (Number(firstNum) / 100).toString();
                displayText.textContent = firstNum;
            } else {
                secondNum = (Number(secondNum) / 100).toString();
                displayText.textContent += "%";
            }
            return; // Exit early after calculating percentage
        }

        if (secondNum !== "") {
            calculate();
            firstNum = result.toString(); // Update firstNum with the result
            secondNum = ""; // Reset secondNum
        }
        operator = num;
    }
}

function calculate() {
    switch (operator) {
        case "+":
            result = Number(firstNum) + Number(secondNum);
            break;
        case "-":
            result = Number(firstNum) - Number(secondNum);
            break;
        case "*":
            result = Number(firstNum) * Number(secondNum);
            break;
        case "/":
            result = Number(firstNum) / Number(secondNum);
            break;
        case "%":

            break
        case "+-":
            displayText.textContent = Number(displayText.textContent) * -1
            break;
        default:
            result = "Error";
    }
    displayText.textContent = result;
}

function clear() {
    firstNum = ""
    secondNum = ""
    operator = ""
    result = ""
    secondOperator = ""
    displayText.textContent = ""
}