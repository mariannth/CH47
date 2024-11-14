
function calculate(operation) {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = "Por favor ingrese números válidos";
    } else {
        if (operation === 'add') {
            result = number1 + number2;
        } else if (operation === 'subtract') {
            result = number1 - number2;
        } else if (operation === 'multiply') {
            result = number1 * number2;
        }
    }

    document.getElementById('result').innerText = `Resultado: ${result}`;
}

module.exports = calculate;