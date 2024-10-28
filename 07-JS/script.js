/* Tipos de datos y variables

    Variable: es un espacio en memoria dentro de nuestro programa

    Formas de declarar una variable: var, let y const

    var: tiene un alcance global
    let: tiene un alcance local
    const: es una constante

    scope: alcance de mis variables

    string: Cadena de texto
    number: numero
    boolean: true or false 0/1
    undefined: no definido
    null: no tiene un valor
    nan: no es un numero o dato
 */

let nombre;

nombre = "Mariana";

const ap = "Ramos";

let edad = 26;

let telefono = null;

let cp = "23405";

let direccion;

//múltiples variables

let num1 = 15;
let num2 = 18;
let num3 = 21;

let a, b, c;
a = 1;
b = "Juan";
c = "3b";

console.log(b + " pertenece al grupo: " + c + " su numero de lista es: " + a);

//Encasillamiento o cohersion se refiere a una conversión automática

let precio = prompt("Cual es tu rango de precio de equis producto");
console.log(typeof precio);
console.log(precio);

//objeto Number
let numero1 = "41";
let newNumber = Number(numero1);
console.log(numero1);
console.log(typeof numero1);
console.log(newNumber);
console.log(typeof newNumber);

//conversion de tipo string a number
console.log("Cambio de string a number");
let numcp = parseInt(cp);
console.log(numcp);
console.log(typeof cp);
console.log(typeof numcp);

//conversión de un numero a string
console.log("Cambio de number a string");
let ed = 32;
let edS = ed.toString();
console.log(edS);
console.log(typeof ed);
console.log(typeof edS);

//conversión de un boleano a string
console.log("Cambio de boolean a string");
let ine = true;
console.log(ine);
console.log(typeof ine);
let ineRespuesta =  ine.toString();
console.log(ineRespuesta);
console.log(typeof ineRespuesta);
if (ine == true){
    console.log("Si");
}
else console.log("No")

console.log(edad + nombre);
