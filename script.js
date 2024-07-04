

let digitOne = 0;
let digitTwo = 0;
let operator;
let displayValue = 0;

function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    if (second != 0) {
        return first / second;
    }
    else {
        return msg = "ffs";
    }
}

function operate(operation, first, second) {
    if (operation === "+") {
        return add(first, second);
    }
    else if (operation === "-")
        return subtract(first, second);
    else if (operation === "*")
        return multiply(first, second);
    else
        return divide(first, second);
}




