/* Before each exercise, make sure you think about the 4 steps of a function.
//// Antes de cada ejercicio, asegúrate de pensar en los 4 pasos de una función.

// 1. Understand the purpose of the function.
// 1. Comprende el propósito de la función.

// 2. Define the data that comes into the function from the caller (in the form of parameters)!
// 2. Define los datos que llegan a la función desde el llamador (en forma de parámetros)!

// 3. Define what data variables are needed inside the function to accomplish its goal.
// 3. Define qué variables de datos se necesitan dentro de la función para lograr su objetivo.

// 4. Decide the set of steps that the program will use to accomplish this goal (the algorithm).
// 4. Decide el conjunto de pasos que el programa utilizará para lograr este objetivo (el algoritmo).

// Start coding up your answer once you have completed step 4.
// Comienza a codificar tu respuesta una vez que hayas completado el paso 4. */

/* Exercise #1
 Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?

 Return the value of what she should be paying. 
 _________________________________________
 Ejercicio n.° 1
 María tiene que calcular el costo de sus pagos del mes. Por cada transacción hay una tarifa de $3 y una tarifa de interés del 0,1 % (0,01). ¿Puedes ayudarla a calcular sus costos?
 Devuelve el valor de lo que debería pagar.
*/
// function calculaCostos(transacciones, montosTransaccion) {
//   const tarifaFija = 3;
//   const tarifaInteres = 0.001;
//   let total = (montosTransaccion * tarifaInteres + tarifaFija) * transacciones;
//   return total;
// }
// let transacciones = prompt("Escribe la cantidad de transacciones: ");
// let montosTransaccion = prompt("Dame el monto de las transacción");

// console.log(
//   "El costo total del mes es: ",
//   calculaCostos(transacciones, montosTransaccion)
// );

//_______________________________________

function calcularCosto(transacciones) {
  const tarifaFija = 3; // tarifa fija por transacción
  const tasaInteres = 0.001; // 0.1% de interés
  let totalCosto = 0;
  // Itera por cada transacción para sumar el costo total
  for (let i = 0; i < transacciones.length; i++) {
    let montoTransaccion = parseFloat(transacciones[i]); // Convertir a número
    totalCosto +=
      montoTransaccion + tarifaFija + montoTransaccion * tasaInteres;
  }
  return totalCosto.toFixed(2); // Devolver el resultado con 2 decimales
}
// Función para pedir las transacciones mediante prompt
function pedirTransacciones() {
  let transacciones = [];
  let numTransacciones = parseInt(
    prompt("¿Cuántas transacciones deseas ingresar?")
  );
  for (let i = 0; i < numTransacciones; i++) {
    let monto = prompt(`Ingresa el monto de la transacción ${i + 1}:`);
    transacciones.push(monto);
  }
  return transacciones;
}
// Llamar a pedirTransacciones y calcular el costo
const transaccionesIngresadas = pedirTransacciones();
console.log("Costo total del mes:", calcularCosto(transaccionesIngresadas));

/* Exercise #2
 Part 1
 Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.

 Part 2
 Ed would like to create a function that takes in a birth year and returns the age.
 i.e. 1990 returns 30 

Part 3
 Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}. 
 _________________________________________
 Ejercicio n.° 2
 Parte 1
 Ed quiere una forma de ingresar los nombres de 3 amigos. El resultado debería ser un saludo de consola para sus amigos que diga: Bienvenido {nombre1}, {nombre2}, {nombre3}.

 Parte 2
 Ed quiere crear una función que tome un año de nacimiento y devuelva la edad.
 es decir, 1990 devuelve 30

 Parte 3
 Ed quiere crear una función que imprima: Bienvenido {nombre1}, tienes {edad1}. Bienvenido {nombre2}, tienes {edad2}. Bienvenido {nombre3}, tienes {edad3}.
*/

//PARTE 1

// let amigos = [];
// for (let i = 1; i <= 3; i++) {
//   let nombre = prompt(`Ingresa el nombre del amigo ${i}:`);
//   amigos.push(nombre);
// }
// console.log(`Bienvenido ${amigos[0]}, ${amigos[1]}, ${amigos[2]}`);

// //PARTE 2
// function calculaEdad(anioNac) {
//   const anioActual = new Date().getFullYear();
//   return anioActual - anioNac;
// }

// let a = prompt("Dame tu año de nacimiento");
// console.log("Tu edad es: " + calculaEdad(a));

// //PARTE 3

// function bienvenida(nombres, aniosNac) {
//   for (let i = 0; i < nombres.length; i++) {
//     let edad = calculaEdad(aniosNac[i]);
//     console.log(`Bienvenido ${nombres[i]}, tienes ${edad}.`);
//   }
// }

// let anosNacimiento = [
//   parseInt(prompt("Ingresa el año de nacimiento del primer amigo:")),
//   parseInt(prompt("Ingresa el año de nacimiento del segundo amigo:")),
//   parseInt(prompt("Ingresa el año de nacimiento del tercer amigo:")),
// ];

// bienvenida(amigos, anosNacimiento);

/* Challenge Yourself
 A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

 Part 1
 A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.

 Part 2
 A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.

 Part 3
A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.
__________________________________________
Ponte a prueba
Un profesor quiere crear una rúbrica para calificar. La rúbrica va de 0 a 11.

Parte 1
Un estudiante aprueba si tiene una puntuación mayor o igual a 5. Crea una función que devuelva un booleano verdadero o falso.

Parte 2
Un estudiante tiene una calificación excelente si tiene una puntuación mayor a 8. Agrega a tu función para imprimir "Excelente" para puntuaciones mayores a 8.

Parte 3
Un estudiante tiene una calificación perfecta si su puntuación es 11. Agrega a tu función para imprimir "Perfecto" para una puntuación de 11.
*/

// //PARTE 1
// function evaluarCalif(puntos) {
//   if (puntos >= 5) {
//     return true;
//   }
//   return false;
// }
// console.log(evaluarCalif(9)); //TRUE
// console.log(evaluarCalif(2)); //FALSE

// //PARTE 2
// function evaluarCalificacion(puntuacion) {
//   if (puntuacion >= 5) {
//     if (puntuacion > 8) {
//       console.log("Excelente");
//     }
//     return true;
//   }
//   return false;
// }

// console.log(evaluarCalificacion(9)); //EXCELENTE
// console.log(evaluarCalificacion(7)); //TRUE

// //PARTE 3
// function evaluarCalificacion(puntuacion) {
//   if (puntuacion === 11) {
//     console.log("Perfecto");
//     return true;
//   } else if (puntuacion > 8) {
//     console.log("Excelente");
//     return true;
//   } else if (puntuacion >= 5) {
//     return true;
//   }
//   return false;
// }

// console.log(evaluarCalificacion(11)); //PERFECTO
// console.log(evaluarCalificacion(9)); //EXCELENTE
// console.log(evaluarCalificacion(7)); //TRUE
// console.log(evaluarCalificacion(3)); //FALSE
