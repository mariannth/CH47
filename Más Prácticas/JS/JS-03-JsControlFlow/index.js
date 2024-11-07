//HAbiamos comentado que el flujo de JS es el proceso en el cual
//se van interpretando las lineas de tu codigo, y es el flujo que se puede interrumpir,
// se puede pausar y se puede ejecutara en un solo hilo o en linea
/* 
const jsFlow = () =>{
    console.log(4);
}

console.log(1);
console.log(2);
jsFlow();
console.log(3);
 */
// If y el eslse son ejecutables que modifican el flujo de JS

/* const validarEdad = (edad)=>{
    if (edad >= 18){
        alert ("Bbva te presta mil pesos");
    else{

    }
    }
} */

/* 
java scriot utiliza las estructuras de control  para hacer tu codigo efieciente
y flexible:
Estas estructuras son:
1. Condiciones (if, else if, else), switch (en base a casos);

*/
/* const  ValidarNoLaborable = (dia) =>{
    switch(dia){
        case "sabado":
            console.log("Dia no laborable");
            break;
        case "domingo":
            console.log("dia no laborable");
            break; 
        default:
            break;        
    }
}
ValidarNoLaborable("sabado"); 
*/
//let numero1 = parseFloat(document.getElementById("numero1").value);
//let numero2 = parseFloat(document.getElementById("numero2").value);
//
let resultado = 0;
//let numero1;
//let numero2;
/* 
function onInputOneChange(){
    console.log("----Aqui inica  inputOnechange")
    let numero1Local = parseFloat(document.getElementById("numero1").value);
    let numero2Local = parseFloat(document.getElementById("numero2").value);
    console.log(numero1,numero2);
    //return numero1;
    //return numero2; undefined, null, NaN, " ", 0
}; */
//Ligar un evento al HTML
/* function onInputTwoChange(){
    let numero2 = parseFloat(document.getElementById("numero2").value);
    console.log(numero2);
    return numero2;
}; */

function operacionMatematica(typoOperacion){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    //console.log(typoOperacion);
    switch(typoOperacion){
        case "suma":
            resultado = numero1 + numero2;
            console.log("Este es el console.log de la suma " + numero1,numero2)
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multi":
            resultado = numero1 * numero2;
            break;
        default:
            alert("syntax error")
    }
    console.log()
    console.log(resultado);
    document.getElementById("result").innerHTML = `Resultado: ${resultado}`;
}


/* 
function calculadora(numero1,numero2, operacion){
    switch (operacion) {
        case 'suma':
            resultado = numero1 + numero2;
            break;
        case 'resta':
            resultado = numero1 - numero2;
            break;
        case 'multiplicacion':
            resultado = numero1 * numero2;
            break;
        case 'division':
            resultado = numero2 !== 0 ? numero1 / numero2 : "Error: No se puede dividir por cero";
            break;
        default:
            resultado = "Operación no válida";
    }
    
}
// Mostrar el resultado en el HTML
document.getElementById("result").textContent = `Resultado: ${resultado}`;


// Asignar los eventos de click a cada botón
document.querySelector(".btn-primary:nth-child(1)").onclick = () => calculadora('Suma');
document.querySelector(".btn-secondary").onclick = () => calculadora('Resta');
document.querySelector(".btn-primary:nth-child(3)").onclick = () => calculadora('Multiplicacion');
document.querySelector(".btn-sucess").onclick = () => calculadora('Division');
 */

