var operation = 0;
var secondOperand = 0;
var result = 0;
var resultReceived = false;

function input(x) {
    // if (resultReceived) {
    //     document.getElementById("result").value = "0";
    //     resultReceived = false;
    // }

    if (document.getElementById("result").value == "0" || resultReceived) { // if the value is 0, replace it with the input.;
        document.getElementById("result").value = x;
        resultReceived = false;
    }
    else {
        document.getElementById("result").value += x;
    }
}

function allclear() {
    document.getElementById("result").value = "0";
    afterOperator = 0;
}

function decimalPoint() {
    
    if(resultReceived) {
        document.getElementById("result").value = "0.";
        resultReceived = false;
    }

    if (document.getElementById("result").value.indexOf(".") == -1) { // if there is no decimal point, add one
        document.getElementById("result").value += ".";
    }
}

function plusMinus() {
    if (document.getElementById("result").value.indexOf("-") == -1) { // if there is no minus sign, add one
        document.getElementById("result").value = "-" + document.getElementById("result").value;
    }
    else {
        document.getElementById("result").value = document.getElementById("result").value.replace("-", "");
    }
}

function persent() {
    secondOperand = parseFloat(document.getElementById("result").value) * 0.01 * result;
    switch (operation) {
        case 1: result += secondOperand;
            break;
        case 2: result -= secondOperand;
            break;
        case 3: result *= secondOperand;
            break;
        case 4: result /= secondOperand;
            break;
    }
    document.getElementById("result").value = result;
    operation = 0;
    resultReceived = true;
}

function square() {
    document.getElementById("result").value = Math.sqrt(document.getElementById("result").value);
}

function operator(x) {
    if(x == operation) return; // if the operator is clicked twice, do nothing

    if(operation == 0) {
        result = parseFloat(document.getElementById("result").value);
    }
    else {
        secondOperand = parseFloat(document.getElementById("result").value);
        switch (operation) {
            case 1: result += secondOperand;
                break;
            case 2: result -= secondOperand;
                break;
            case 3: result *= secondOperand;
                break;
            case 4: result /= secondOperand;
                break;
        }
    }
    
    switch (x) {    // if the operator is clicked, add it to the input
        case 1: operation = 1; // +
        break;
        case 2: operation = 2; // -
        break;
        case 3: operation = 3;  // *
        break;
        case 4: operation = 4;  // /
        break;
    }
    resultReceived = true;
}

function equal() {
    if(resultReceived) {
        document.getElementById("result").value = result;
        operation = 0;
        resultReceived = true;
    }
    else {
        secondOperand = parseFloat(document.getElementById("result").value);
        switch (operation) {
            case 1: result += secondOperand;
                break;
            case 2: result -= secondOperand;
                break;
            case 3: result *= secondOperand;
                break;
            case 4: result /= secondOperand;
                break;
        }
        document.getElementById("result").value = result;
        operation = 0;
        resultReceived = true;
    }
}