
let digitOne = null;
let digitTwo = null;
let operator = null;
let displayValue = null;
let keyPressed = null;
let operatorPressed = 0;

function operate(operation, first, second) {
    if (operation === "+") {
        first = parseInt(first);
        second = parseInt(second);
        return first + second;
    }
    else if (operation === "-")
        return first - second;
    else if (operation === "*")
        return first * second;
    else {
        if (second != 0) {
            return first / second;
        }
        else {
            return msg = "ffs";
        }
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
