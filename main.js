let operator = null;
let numMem = "";

const btnClear = document.querySelector(".btn-clear");
const btnPourcent = document.querySelector(".btn-pourcent");
const btnDivision = document.querySelector(".btn-division");
const btnMultiplication = document.querySelector(".btn-multiplication");
const btnSubstraction = document.querySelector(".btn-substraction");
const btnAddition = document.querySelector(".btn-addition");
const btnComma = document.querySelector(".btn-comma");
const btnEgal = document.querySelector(".btn-egal");
const numberBtn = document.querySelectorAll(".number")
const operationBtn = document.querySelectorAll(".btn-operation");
const output = document.querySelector(".output");
const previousOuput = document.querySelector(".total");
const currentOutput = document.querySelector(".current-operation");

function clear() {
    num1 = "";
    num2 = "";
    operator = null;
}

function pourcent(num1) {
    let a = Number(num1);
    return a / 100;
}

function operate(operator, num1, num2) {
    let a = Number(num1);
    let b = Number(num2);
    switch(operator) {
        case "+":
            previousOuput.textContent =  a + b;
            currentOutput.textContent = a + b;
            break;
        case "-":
            previousOuput.textContent = a - b;
            currentOutput.textContent = a - b;
            break;
        case "/":
            previousOuput.textContent = a / b;
            currentOutput.textContent = a / b;
            break;
        case "x":
            previousOuput.textContent = a * b;
            currentOutput.textContent = a * b;
            break;
    }
}

function appendNumber(number) {
    currentOutput.textContent += number;
}

function setOperator(sign) {
    operator = sign;
    numMem = currentOutput.textContent;
    previousOuput.textContent = numMem + " " + sign;
    currentOutput.textContent = "";
}

numberBtn.forEach(button => button.addEventListener('click', () => appendNumber(button.textContent)));
operationBtn.forEach(button => button.addEventListener('click', () => setOperator(button.textContent)));
btnEgal.addEventListener('click', () => operate(operator, numMem, currentOutput.textContent));
