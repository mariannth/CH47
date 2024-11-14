let resultado;

function onInputOneChange(){
    let numero1Local = parseFloat(document.getElementById("numero1").value);
    let numero2Local  = parseFloat(document.getElementById("numero2").value);
}

function operacionMatematica(typoOperacion){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    switch(typoOperacion){
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multi":
            resultado = numero1 * numero2;
            break;
        default:
             alert("syntax error");
    }
   document.getElementById("result").innerHTML = `Resultado: ${resultado}`;
}


