//Operadores de asignacion

let numero = 10;

numero += 5; //suma

numero -= 8; //resta

numero *= 10; //multiplicacion

numero /= 2; //division

numero %= 8; //resto o sobrante de una división. (35/8) todo en enteros

numero **= 5; //exponenciación, elevado al cuadrado, al cubo, etc

//asignacion =
console.log(numero);

//operadores aritmeticos

let numero1 = 10;

let numero2 = 5;

//resultado = numero1 + numero2//- * /

resultado = numero1--; //solo necesita un numero para incrementar o decrementar

alert(numero1);

//Concatenación: unir dos cadenas de texto

let saludo = "Hola Fer";
let pregunta = " Como estas?";

let mensaje = saludo + pregunta;

console.log(mensaje);

//Forzar un string/ cuando js detecta un string convierte a las demas variables en string, es decir todo lo que esta despues de las comillas
let numero3 = "7";
let numero4 = 9;

let suma = "" + numero3 + numero4;

console.log(suma);

//Concat es un metodo que solo es para los strings. Es decri necesitamos que al menos una de las variables sea un string (es un metodo de cadena)

let conc = numero3.concat(numero4);

console.log(conc);

// con backticks ${} ``(alt + 96 o alt + ctrl + el signo que cierra estas llaves })

let nombre = "Fernanda";
let saludin = `Hola ${nombre}, que gusto verte!`;

console.log(saludo);

//Escape de comillas simples (alt 39)

let frase = 'Esos que se apellidan "Ramos" y no son de flores';

//Escape de comillas dobles

let flores = "Esos que se apellidan 'Ramos' y no son de flores";

//Operadores de comparación: los operdores lógicos se basan en el true o flase . Comparan dos expresiones y devuelve un valor boolean, si la relación es verdadera nos va a dar true o de lo contrario nos devuelve un false

//Igualdad: == Verifica si es igual a otro
let num = 23;
let num1 = "23";

let igualdad = num == num1; //no diferencia los tipos de datos
console.log(igualdad);

//Inigualdad != le pregunta si son distintos

let inIgualdad = num != num1;
console.log(inIgualdad);

//Igualdad estricta === verifica el mismo valor, pero tambien el mismo tipo de dato
let estIgualdad = num === num1;
console.log(estIgualdad);

//Estricta desigualdad !==
let estDesIgualdad = num !== num1;
console.log(estDesIgualdad);

console.log(num < num1); //mayor que
console.log(num > num1); //menor que
console.log(num <= num1); //menor o igual que
console.log(num >= num1); //mayor o igual que

//Operadores lógicos &&, ||, ! and, or o not
//Devuelven un resultado a partir de que se cumpla o no una condición, true o false (valores booleanos)

//AND &&, OR || Y NOT !||

let valor1 = true;
let valor2 = false;

let resultado1 = valor1 && valor2; //Si las dos son true me devuelve true
let resultado2 = valor1 || valor2; //si una de las dos es true me devuelve true
let resultado3 = !valor1; //Cambia el resultado

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

let ejem1 = 23;
let ejem2 = 63;
let ejem3 = 85;
let ejem4 = 41;

let ejemplo1 = ejem1 < ejem4;
let ejemplo2 = ejem2 != ejem3;
let ejemplo3 = ejem4 >= ejem2;

console.log(ejemplo1 && ejemplo3); //tiene que cumplirse ambas condiciones
console.log(ejemplo2 || ejemplo1); //con que una de las condiciones se cumpla nos arroja true
console.log(!ejemplo3); //regresa lo contrario de lo que tengo

console.log(ejem2 > ejem3 && ejem4 === ejem1);
console.log(ejem4 == ejem1 || ejem3 <= ejem2);
console.log(ejem3 != ejem3 || ejem2 > ejem1);

//Condicionales
/*Trabajan con bloques de código 
if es el primer bloque se ejecuta solo si es true o si la condición se cumple
else if lo podemos utilizar las veces que lo necesitemos y básicamente nos dice que si lo anterior no se cumple vamos a tener otra condición 
if es el primero 
else if son infifnitos 
else solo una vez al final 
Si la primera condición se cumple ya no avanza a la siguiente y asi sucesivamente  */

let edad = 32;

if (edad >= 18) {
  console.log("Eres adultx");
} else if (edad <= 17) {
  console.log("Disfruta tu energia");
} else if (edad >= 60) {
  console.log("El sueño");
} else {
  console.log("No se en que categoria ubicarte");
}
