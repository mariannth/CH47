/* En JavaScript, los arreglos (arrays) son estructuras de datos que permiten almacenar múltiples valores en una sola variable.
Los arreglos son estructuras de datos que sirven para almacenar varios datos del mismo tipo en un contenedor. En programación, se les conoce como arrays. 
Algunas características de los arreglos son:
Son colecciones finitas, homogéneas y ordenadas. 
Tienen un límite, es decir, se debe determinar el número máximo de elementos que podrán formar parte del arreglo. 
Todos los elementos de un arreglo son del mismo tipo. 
Se distinguen y se refieren por un índice. 
Tienen un nombre de variable único que representa a cada elemento dentro de él. 
Los elementos dentro del array son guardados en posiciones de memoria de forma continua. */
// Ejemplo 1: Creando y Modificando Arreglos
function ejemplo1() {
  let frutas = ["manzana", "naranja", "pera"];
  frutas[1] = "kiwi";
  frutas[3] = "mango";
  document.getElementById("example1").textContent = frutas;
}

// Ejemplo 2: Funciones de Arreglos
function ejemplo2() {
  let numeros = [1, 2, 3, 4, 5];
  let resultado = "";
  //   forEach(): Ejecuta una función para cada elemento del array
  numeros.forEach((num) => (resultado += `forEach: ${num}\n`));
  //   map(): Crea un nuevo array con los resultados de aplicar una función a cada elemento del array
  resultado += "map: " + numeros.map((num) => num * 2) + "\n";
  //   filter(): Crea un nuevo array con los elementos que cumplan una condición
  resultado += "filter: " + numeros.filter((num) => num > 2) + "\n";
  //   reduce(): Aplica una función a un acumulador y a cada elemento del array para reducirlo a un único valor
  resultado += "reduce: " + numeros.reduce((acc, num) => acc + num, 0);

  document.getElementById("example2").textContent = resultado;
}

// Ejemplo 3: forEach, slice, shift
function ejemplo3() {
  let frutas = ["manzana", "kiwi", "pera"];
  let resultado = "";
  //   forEach(): Ejecuta una función para cada elemento del array
  frutas.forEach((fruta) => (resultado += `${fruta}\n`));
  //   slice(): Crea una copia del array
  resultado += "slice: " + frutas.slice(0, 2) + "\n";
  //   shift(): Remueve un elemento del principio del array
  resultado += "shift: " + frutas.shift() + "\n" + frutas;

  document.getElementById("example3").textContent = resultado;
}

// Ejemplo 4: Cola y Pila
/* Cola (FIFO - First In, First Out)
Una cola sigue el principio de "Primero en entrar, primero en salir" (FIFO). Usamos push para agregar elementos al final de la cola y shift para eliminar elementos del principio.*/
function ejemplo4() {
  // Creando una Cola
  let cola = [1, 2, 3, 4, 5];
  // Agregar elementos a la cola (con push)
  cola.push("6"); // ["Elemento1"]
  cola.push("7"); // ["Elemento1", "Elemento2"]
  cola.push("8"); // ["Elemento1", "Elemento2", "Elemento3"]
  let cola2 = [1, 2, 3, 4, 5, 6, 7, 8];
  // Eliminar elementos de la cola (con shift)
  let eliminado = cola2.shift(); // "Elemento1" es eliminado, la cola es ahora ["Elemento2", "Elemento3"]
  console.log("Elemento eliminado de la cola:", eliminado);
  console.log("Cola luego de eliminar un elemento:", cola2);
  cola2.pop(); //Se elimina un elemento al final de la cola

  //PILA
  /*Pila (LIFO - Last In, First Out)
Una pila sigue el principio de "Último en entrar, primero en salir" (LIFO). Usamos push para agregar elementos al final de la pila y pop para eliminar el último elemento.*/

  // Creando una Pila
  let pila = [1, 2, 3, 4, 5];
  let pila2 = [1, 2, 3, 4, 5, 6, 7, 8];
  // Agregar elementos a la pila (con push)
  pila.push("6"); // ["Elemento1"]
  pila.push("7"); // ["Elemento1", "Elemento2"]
  pila.push("8"); // ["Elemento1", "Elemento2", "Elemento3"]

  // Eliminar elementos de la pila (con pop)
  let eliminadoPila = pila2.pop(); // "Elemento3" es eliminado, la pila es ahora ["Elemento1", "Elemento2"]
  console.log("Elemento eliminado de la pila:", eliminadoPila);

  document.getElementById(
    "example4"
  ).textContent = `Cola original: ${cola}\nCola eliminando un elemento: ${cola2}\nPila Original: ${pila}\nPila eliminando un elemento: ${pila2}`;
}
/*Explicación de push y pop
push: Agrega uno o más elementos al final de un arreglo. Es útil cuando queremos agregar elementos de manera ordenada al final de una estructura como una pila o cola.
pop: Elimina el último elemento de un arreglo y lo devuelve. Es útil en estructuras de pila donde se necesita el último elemento que se agregó.*/
// Ejemplo 5: Push y Pop
function ejemplo5() {
  let numeros = [1, 2, 3];
  let numeros1 = [1, 2, 3];
  let numeros2 = [1, 2, 3, 4, 5];
  let numeros3 = [1, 2, 3, 4, 5];
  numeros1.push(4); // Añade 4 al final
  numeros3.pop(); // Remueve el último elemento

  document.getElementById(
    "example5"
  ).textContent = `Arreglo original: ${numeros}\nArreglo con push: ${numeros1}\nArreglo antes de pop: ${numeros2}\nArreglo con pop: ${numeros3}`;
}

// Ejemplo 6: For, While, Do While
/*Explicación de For, Do while, y While
For: Se usa cuando conocemos la cantidad de iteraciones.
While: Se usa cuando la condición es verdadera antes de cada iteración.
Do while: Ejecuta al menos una vez antes de verificar la condición.*/
function ejemplo6() {
  let resultado = "";
  for (let i = 0; i < 3; i++) resultado += `For: ${i}\n`;
  let j = 0;
  while (j < 3) {
    resultado += `While: ${j}\n`;
    j++;
  }
  let k = 0;
  do {
    resultado += `Do While: ${k}\n`;
    k++;
  } while (k < 3);

  document.getElementById("example6").textContent = resultado;
}

// Ejemplo 7: For Anidados
function ejemplo7() {
  let resultado = "";
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      resultado += `i=${i}, j=${j}\n`;
    }
  }
  document.getElementById("example7").textContent = resultado;
}

//_______________________________________________________
// Exercise #1
// Part 1
// There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

let names = ["Sofia", "David", "Juan"];
console.log("Fila original:", names);

// Part 2
// Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

names.push("Sara", "Agustin"); // Agregar a Sara y Agustin al final de la cola
names.shift(); // Eliminar a Sofia del principio de la cola
console.log("Fila actualizada:", names);

// Part 3
// It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?

names.splice(1, 0, "Renata"); // Insertar a Renata detrás de David (en la posición 1)
names.push("Elena"); // Agregar a Elena al final de la cola
console.log("Fila actualizada con el cambio de posición:", names);

// Exercise #2
// Write a JavaScript program to construct the following pattern, using a nested for loop.

// *
// * *
// * * *
// * * * *
// * * * * *
console.log("Exercise #2 - Patrón de diseño:");
let pattern = "";
for (let i = 1; i <= 5; i++) {
  pattern += "* ".repeat(i) + "\n";
}
console.log(pattern);

//*****
//*   *
//*   *
//*   *
//*****
function printBoxPattern(size) {
  let pattern = "";

  for (let i = 0; i < size; i++) {
    if (i === 0 || i === size - 1) {
      // Imprimir línea completa de asteriscos para la primera y última fila
      pattern += "*".repeat(size) + "\n";
    } else {
      // Imprimir asterisco, espacios y otro asterisco para las filas intermedias
      pattern += "*" + " ".repeat(size - 2) + "*" + "\n";
    }
  }
  console.log(pattern);
}

// Llamada a la función con tamaño de 5
printBoxPattern(5);

// Exercise #3
// Write while loops to do the following:

// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
// - Print all the odd numbers between 1 - 100.
// - Write a method with a while loop to print 1 through n in square brackets.
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
// - Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

// Part 1: Repeatedly print the value of xValue, decreasing it by 0.5 each time, as long as it remains positive
let xValue = 5; // Puedes cambiar el valor inicial de xValue
console.log("Disminuir xValue en 0,5 hasta que no sea positivo:");
while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
}

// Part 2: Print all the odd numbers between 1 and 100
console.log("Números impares entre 1 y 100:");
let num = 1;
while (num <= 100) {
  console.log(num);
  num += 2; // Saltar cada dos números para imprimir solo impares
}

// Part 3: Print numbers from 1 through n in square brackets
function numerosEntreCorchetes(n) {
  let i = 1;
  let result = "";
  while (i <= n) {
    result += `[${i}] `;
    i++;
  }
  console.log(result);
}
console.log("Números entre corchetes del 1 al n");
numerosEntreCorchetes(6); // Cambia el valor de n según lo necesites

// Part 4: Compute the sum of the first n positive integers
function sumaPrimerosNums(n) {
  let i = 1;
  let sum = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}
console.log("Suma de los primeros n números enteros positivos:");
console.log("Suma cuando n = 5:", sumaPrimerosNums(5));
console.log("Suma cuando n = 10:", sumaPrimerosNums(19));

//_________________________________________________

//Ejercicio de Fechas: Eva acaba de comenzar su nuevo puesto como Desarrolladora Junior en un banco. Está trabajando en cuentas de clientes para una nueva aplicación de banca móvil. Se le pide que implemente una función que muestre la fecha de transacción más reciente para un cliente. Para comenzar a diseñar esto, ella comienza con 3 fechas de transacción.

//Tipos de datos = String

function obtenerFechaMasReciente(transacciones) {
  //Para comparar las fechas, conviene convertir cada una en un objeto Date, ya que esto facilita las operaciones de comparación.
  const fechasTransacciones = transacciones.map((fecha) => new Date(fecha));
  //Podemos usar el método reduce para recorrer las fechas y comparar cada una con la última fecha más reciente encontrada.
  const fechaMasReciente = fechasTransacciones.reduce(
    (fechaReciente, fechaActual) => {
      return fechaActual > fechaReciente ? fechaActual : fechaReciente;
    }
  );
  //Esta función reduce toma como primer parámetro la fecha más reciente encontrada hasta el momento (fechaReciente) y la compara con la fechaActual en cada iteración. Al final, devuelve la fecha más reciente.
  return fechaMasReciente.toISOString(); // Formato ISO
}

// Ejemplo de uso
const transacciones1 = [
  "2023-10-12T10:30:00",
  "2023-11-25T15:45:00",
  "2023-08-10T09:15:00",
  "2023-12-15T12:00:00",
  "2023-09-07T09:20:00",
];
console.log(
  "La fecha de transacción más reciente es:",
  obtenerFechaMasReciente(transacciones1)
);

//_______________________________________
// Crear y asignar un arreglo
const nums = [1, 2, 3, 4, 5, 6]; //arreglo estatico

let dinamico = []; //arreglo dinamico

const fruits = new Array("manzana", "kiwi", "pera", "sandia"); // fruits

//Los arreglos se pueden acceder a ellos a través de los index
console.log("El elemento en la posición 4 es:", nums[4]); // 5

fruits[2] = "mango"; //Espero que en donde había peras, ahora sea mango

console.log("Ahora el elemento en la ubicación 2 es:", fruits[2]); // mango
// Existen metodos pre-creados para los arreglos, porque los arreglos son objetos
//indexOf(), para usar un metodo de un arreglo, retoran un index es decir la posicion dentro del arreglo
//se usa la syntaxis nombre.nombreMetodo();

console.log("El index del elemento 'mango' es:", fruits.indexOf("mango")); // 2
console.log("El index del elemento 'pera' es:", fruits.indexOf("pera")); // 3

//los arreglos tienen atributos y metodos y un atributo es length
console.log("El arreglo tiene:", dinamico.length, "elementos"); // 0

//Otro método es push, para agregar elementos al final de un arreglo y retornar la nueva longitud
dinamico.push("jabon");
dinamico.push("arroz");
dinamico.push("azucar");

console.log("Ahora el arreglo tiene:", dinamico.length, "elementos"); // 3

//slice(), para extraer un segmento de un arreglo, es decir, hace un corte en base a un index inicial y un index final, hace una copia del arreglo para no modificarlo
console.log("Arrelgo original:", fruits); // ['manzana', 'kiwi', 'mango', 'sandia']
console.log("La copia del segmento de la matriz es:", fruits.slice(1, 3)); // ['kiwi', 'mango']

//Otra forma de clonar un arreglo es crendo uno nuevo y asignarlo
let clonFrutas = fruits.slice(3);

console.log("La copia del arreglo es:", clonFrutas); // ['manzana', 'kiwi', 'mango', 'sandia']
nums.push(7);
nums.push(8);
console.log("Arrelgo con push:", nums); // [1, 2, 3, 4, 5, 6, 7, 8]
let clonNumeros = nums.slice(-2, -1); //para un solo elemento se coloca -1, y la posicion inicial se coloca -2	es decir tomará en cuenta que inicia del final al inicio el conteo
console.log("La copia del arreglo es:", clonNumeros); // [2, 3]

// _____________________________________________________

//JS FOR Loops

// for in - ciclos en las propiedades de un objeto
// for of - valores de un objeto que tiene capacidad de ser iterado
// while -  ciclos de un bloque de codido "mientras" ciertara condición es true
// do/while - > ciclo que hace un bloque de código mientras la condición espcedificada sea true

//FOR
console.log("Ciclo FOR, para conocer lo que tiene el arreglo de frutas");
console.log(fruits.length);
for (let i = 0; i < fruits.length; i++) {
  console.log("Elemento: ", i, " es: ", fruits[i]);
}

//While
// function setBastaFlag(flag) {
//   const abc = ["a", "b", "c", "d"];
//   let i = 0;
//   do {
//     console.log(abc[i]);
//     i++;
//   } while (flag <= abc.length);
// }

//Metodo shift
//Shift() es para remover elementos del principio del arreglo
let primerElemento = nums.shift();
console.log(nums); // [2, 3, 4, 5, 6, 7, 8]
console.log(primerElemento); // 1