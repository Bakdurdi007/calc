function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteNumber() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Xato';
    }
}
