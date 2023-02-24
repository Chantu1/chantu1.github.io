const NUMBERS = document.querySelectorAll(".number");
const CALCOUTPUT = document.querySelector("#calculator-output");
const CLEARBTN = document.querySelector("#clearbtn");
const OPERATORS = document.querySelectorAll(".operator");
const EQUALBTN = document.querySelector("#equalbtn");
const DECIMALBTN = document.querySelector("#decimal");
const RECENTBTN = document.querySelector("#recentbtn");

// let screenText = CALCOUTPUT.textContent;
let currentOperator = null;
let equation = CALCOUTPUT.textContent.split(currentOperator);

function getOperator() {
    currentOperator = null;
    currentOperator = CALCOUTPUT.textContent.replace(/[^/X+—]/gi, "");
    if (currentOperator == "") {
        return undefined;
    }
    return currentOperator;
}

function removeLastDecimal() {
    if (equation[1] != undefined && equation[1] != NaN) {
        let removeDecimal = null;
        removeDecimal = CALCOUTPUT.textContent.split(currentOperator);
        removeDecimal[1] = removeDecimal[1].replace(".", "");
        removeDecimal.splice(1, 0, currentOperator);
        removeDecimal = removeDecimal.join("");
        CALCOUTPUT.textContent = removeDecimal;
    } else {
        CALCOUTPUT.textContent = CALCOUTPUT.textContent.replace(".", "");
    }
}

function solveEquation() {
    currentOperator = getOperator();
    equation = CALCOUTPUT.textContent.split(currentOperator);
    equation[0] = parseFloat(equation[0]);
    equation[1] = parseFloat(equation[1]);

    if (currentOperator == "+") {
        CALCOUTPUT.textContent = roundNum(add(equation[0], equation[1]));
    } else if (currentOperator == "—") {
        CALCOUTPUT.textContent = roundNum(subtract(equation[0], equation[1]));
    } else if (currentOperator == "X") {
        CALCOUTPUT.textContent = roundNum(multiply(equation[0], equation[1]));
    } else if (currentOperator == "/") {
        equation[1] == "0"
            ? (CALCOUTPUT.textContent = "NO")
            : (CALCOUTPUT.textContent = roundNum(
                  divide(equation[0], equation[1])
              ));
    }

    currentOperator = getOperator();
    equation = CALCOUTPUT.textContent.split(currentOperator);
}

function clearDisplay() {
    CALCOUTPUT.textContent = "";
    equation = CALCOUTPUT.textContent.split(currentOperator);
}

function removeLastOperator() {
    solveEquation();
    CALCOUTPUT.textContent = CALCOUTPUT.textContent.replace(/[^0-9.-]/gi, "");
}

function changeFontSize() {
    if (CALCOUTPUT.textContent.length >= 16) {
        CALCOUTPUT.style.fontSize = "20px";
    } else {
        CALCOUTPUT.style.fontSize = "30px";
    }
}

function roundNum(x) {
    return Math.round(x * 10000000) / 10000000;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

NUMBERS.forEach((number) => {
    number.addEventListener("click", () => {
        changeFontSize();
        if (
            CALCOUTPUT.textContent === "0" ||
            CALCOUTPUT.textContent === "Infinity" ||
            CALCOUTPUT.textContent === "NO"
        ) {
            clearDisplay();
            CALCOUTPUT.textContent += number.textContent;
        } else {
            CALCOUTPUT.textContent += number.textContent;
        }

        currentOperator = getOperator();
        equation = CALCOUTPUT.textContent.split(currentOperator);
    });
});

OPERATORS.forEach((operator) => {
    operator.addEventListener("click", () => {
        changeFontSize();
        if (
            CALCOUTPUT.textContent === "Infinity" ||
            CALCOUTPUT.textContent === "NO"
        ) {
            clearDisplay();
        } else {
            removeLastOperator();
            CALCOUTPUT.textContent += operator.textContent;
            currentOperator = getOperator();
        }
    });
});

EQUALBTN.addEventListener("click", () => {
    solveEquation();
    changeFontSize();
});

CLEARBTN.addEventListener("click", () => {
    changeFontSize();
    CALCOUTPUT.textContent = "0";
    currentOperator = null;
    equation = CALCOUTPUT.textContent.split(currentOperator);
});

DECIMALBTN.addEventListener("click", () => {
    changeFontSize();
    if (
        CALCOUTPUT.textContent === "0" ||
        CALCOUTPUT.textContent === "Infinity" ||
        CALCOUTPUT.textContent === "NO" ||
        CALCOUTPUT.textContent === "NaN"
    ) {
        clearDisplay();
    }
    if (equation[1] !== undefined && equation[1] != null) {
        removeLastDecimal();
        CALCOUTPUT.textContent += DECIMALBTN.textContent;
    } else if (currentOperator !== undefined || currentOperator != null) {
        CALCOUTPUT.textContent += DECIMALBTN.textContent;
    } else {
        removeLastDecimal();
        CALCOUTPUT.textContent += DECIMALBTN.textContent;
    }
});

RECENTBTN.addEventListener("click", () => {
    changeFontSize();
    const splittedCALCOUTPUT = CALCOUTPUT.textContent.split("");
    splittedCALCOUTPUT.pop();
    CALCOUTPUT.textContent = splittedCALCOUTPUT.join("");

    currentOperator = getOperator();
    equation = CALCOUTPUT.textContent.split(currentOperator);
});
