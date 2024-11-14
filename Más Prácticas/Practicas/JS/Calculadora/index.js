function append(value) {
  document.getElementById("display").value += value;
  console.log(document.getElementById("display").value);
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calcular() {
  try {
    let resultado = eval(document.getElementById("display").value);
    document.getElementById("display").value = resultado;
    console.log(document.getElementById("display").value);
  } catch (error) {
    document.getElementById("display").value = "Error";
    console.log(document.getElementById("display").value);
  }
}
