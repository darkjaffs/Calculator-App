
let digitOne = null;
let digitTwo = null;
let operator = null;
let displayValue = null;
let keyPressed = null;
let operatorPressed = 0;

function add(first, second) {
    first = parseInt(first);
    second = parseInt(second);
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
    else {
        return divide(first, second);
    }
}



function display(input) {

    const text = document.getElementById("screen");

    if (input === undefined)
        text.textContent = 0;
    else
        text.textContent = input;


}

function clear() {

    const text = document.querySelector('#screen')
    operator = null;
    digitOne = null;
    digitTwo = null;
    operatorPressed = 0;
    text.textContent = 0;
}


const main = document.querySelectorAll(".buttons")

main.forEach(button => {
    button.addEventListener("click", (e) => {

        keyPressed = e.target.textContent;

        if (keyPressed === 'AC') {
            clear();
        }
        else if (!isNaN(Number(keyPressed))) {
            if (digitTwo === null && operator === null) {
                if (digitOne === null) {
                    digitOne = keyPressed;
                    display(digitOne);
                }
                else {
                    digitOne = digitOne + keyPressed;
                    display(digitOne);
                }
            }
            else {
                if (digitTwo === null) {
                    digitTwo = keyPressed;
                    display(digitTwo);
                }
                else {
                    digitTwo = digitTwo + keyPressed;
                    display(digitTwo);
                }
            }

        }
        else if (isNaN(Number(keyPressed)) && keyPressed != "RM" && keyPressed != "=") {
            operator = keyPressed;
            if (operatorPressed != 1) {
                operatorPressed = 1;
            }
            else {
                displayValue = operate(operator, digitOne, digitTwo);
                display(displayValue);
                digitOne = displayValue;
                digitTwo = null;
            }
        }
        else if (keyPressed === '=' && operator != null && digitOne != null && digitTwo != null) {
            displayValue = operate(operator, digitOne, digitTwo);
            clear();
            display(displayValue);
        }
    })
});
