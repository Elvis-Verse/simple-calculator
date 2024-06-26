let nom1 = document.querySelector('.num1');
let nom2 = document.querySelector('.num2');
let info = document.querySelector('.result');

let num1 = enterNum();
nom1.innerHTML = num1; 
let num2 = enterNum();
nom2.innerHTML = num2;

function enterNum () {
    return parseInt(prompt('Enter a number: '));
}
function add () {
result = num1 + num2;
info.innerHTML = `Sum of ${num1} and ${num2} is ${result}`;
}
function subtract () {7
result = num1 - num2;
info.innerHTML = `Subtraction of ${num1} from ${num2} is ${result}`;
}
function divide () {
result = num1 / num2;
info.innerHTML = `Division of ${num1} and ${num2} is ${result}`;
}
function multiply () {
result = num1 * num2;
info.innerHTML = `Multiplication of ${num1} and ${num2} is ${result}`;
}

multiply();