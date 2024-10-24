/*Comentarios 
multilinea
en 
JS*/

//comentarios de una sola linea

/*JavaScript 
Lenguaje de programación
-Imperativo: Que se leee de arriba a abajo y de izquierda a derecha
-Interpretado
-Tipado débil
-Orientado a objetos
-ECMASRIPT
*/

//alert ("Hola Mundo"); Nos muestra mensaje de alerta

//console.log("Este es un mensaje de la consola"); nos muestra un mensaje en la consola

//document.write("Hola CH 47"); Escribe en el documento es decir imprime algún mensaje

//let nombre = prompt("Ingresa tu nombre: ");  variable, en un prompt y guarda algo
//alert("Hola, " + nombre + " Bienvenidx al mundo de JS"); imprime la variable

//let nombre = prompt("Regalame tu nombre");

//let signo = prompt("Ingresa tu signo");

//let resultado = nombre + " y tu signo es: " + signo;

//alert("Eres " + resultado);

//VARIABALES
let nombre = prompt("Dame tu nombre");
let edad = prompt ("Dame tu edad: ");

if (edad >=18){
    alert(nombre + " tienes " + edad + " años, vamos por unas!");
}else{
    alert(nombre + " tienes " + edad + " años, eres menor, ponte a hacer tu tarea!");
}

let a = prompt("Piensa en un número");
let simbolo = "#";
let contador = 0;

while(contador < a){
    console.log(simbolo);
    simbolo = simbolo + "#";
    contador = contador + 1;
};

