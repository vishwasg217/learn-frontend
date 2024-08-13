let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result = document.getElementById('result');


function add() {
    console.log(Number(num1.value));
    let res = Number(num1.value) + Number(num2.value);
    result.innerText = 'Result: ' + res;
}

function subtract() {
    let res = Number(num1.value) - Number(num2.value);
    result.innerText = 'Result: ' + res;
}

function multiply() {
    let res = Number(num1.value) * Number(num2.value);
    result.innerText = 'Result: ' + res;
}

function divide() {
    let res = Number(num1.value) / Number(num2.value);
    result.innerText = 'Result: ' + res;
}

function clear_res() {
    result.innerText = 'Result: ';
    num1.value = '';
    num2.value = '';
}




