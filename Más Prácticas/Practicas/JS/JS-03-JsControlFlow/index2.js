let resultado = 0; // Inicializamos resultado en 0
function onInputChange(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    console.log(numero1);
    return numero1;
}
function calcular(operacion) {
  const numero1 = parseFloat(document.getElementById("numero1").value);
  const numero2 = parseFloat(document.getElementById("numero2").value);

    switch (operacion) {
    case 'Suma':
        resultado = numero1 + numero2;
        break;
    case 'Resta':
        resultado = numero1 -numero2;
        break;
    // ... otros casos
    case 'Multiplicacion':
        resultado = numero1*numero2;
        break;
    case 'Division':
        resultado = numero1/numero2;
        break;
    default:
        resultado = "Operacion no valida"
  }

// Mostrar el resultado solo si la operación es válida
document.getElementById("result").textContent = `Resultado: ${resultado}`;
}

// Función para actualizar el resultado en el HTML
function actualizarResultado() {
  document.getElementById("result").textContent = `Resultado: ${resultado}`;
}

// Asignar los eventos de click a cada botón de forma más específica
document.querySelector("#miSuperCalculadora .btn-primary:first-child").onclick = () => calcular('Suma');
document.querySelector("#miSuperCalculadora .btn-secondary").onclick = () => calcular('Resta');
document.querySelector("#miSuperCalculadora .btn-primary:nth-child(3)").onclick = () => calcular('Multiplicacion');
document.querySelector("#miSuperCalculadora .btn-success").onclick = () => calcular('Division');
// Llamamos a actualizarResultado al cargar la página para mostrar un resultado inicial
actualizarResultado();