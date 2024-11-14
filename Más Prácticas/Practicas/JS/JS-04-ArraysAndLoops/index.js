// Crear y asignar un arreglo /  Dos maneras de crear y asignar un arreglo
const numeros = [1,2,3,4,5,6];
let frutas = new Array("manzana","pera","sandia");
// en los arrays podemos acceder por medio del index
console.log(numeros[4]) // Espero que se imprima en consola el numero 5
frutas[0] = "Uvas"; //Espero que en donde habia manzanas, ahora tengamos uvas
console.log(frutas[0]); //Espero que el arreglo en el indice 0 me retorne uvas
<<<<<<< HEAD
//Existe metodos pre-creados para los arreglos, porque los arreglos son Objetos
//indexOf(), para usar un metodo de un arreglo 
//se usa la syntaxis nombre_arreglo.nombreMetodo
console.log(frutas.indexOf("Uvas")); // esperamos de retorno el indice de donde estan las uvas [0]
console.log(frutas.indexOf("manzana")) // retornar un -1
=======

// Los arreglos tienen atributos y uno de ellos es longitud
//console.log(dinamico.length)

//Existe metodos pre-creados para los arreglos, porque los arreglos son Objetos
//indexOf(), para usar un metodo de un arreglo 
//se usa la syntaxis nombre_arreglo.nombreMetodo
console.log(frutas.indexOf("uvas")); // esperamos de retorno el indice de donde estan las uvas [0]
console.log(frutas.indexOf("manzana")) // retornar un -1 porque ya no se encuentra el elemento

//El metodo push agregar uno mas elementos al final de la matriz y devuelve la nueva longitud de la matriz

numeros.push(7);
numeros.push(8);
numeros.shift();
console.log(numeros);
let primerElemento = numeros.shift();
// console.log(primerElemento);
// console.log(numeros);

//Slice, hace un corte en base a dos indices (indice de inicio y de final) hace una copia para 
// no modificar el original (copia temporal) hace un clon (copia) modificado de mi arreglo

let clonFrutas = frutas.slice(2)//Como ya no encuentra nada sespues del dos solo se extraiga el arreglo con 
//con el elemento sandia ya que es el unico que queda

console.log(clonFrutas);

let clonNumeros = numeros.slice(-2); //Deberiamos esperar un clon del arreglo de numeros que deberia ser el 7 o 6
console.log(clonNumeros);

/* for (let i = 1; i <= 5; i++) {
    pattern += "* ".repeat(i) + "\n";
  }
  // *
  // * *
  // * * *
  // * * * *
  // * * * * *
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
} */
/* console.log(pattern); }*/

//ciclos
//Switch,if, else, for, for/in, for/of, while y do while
//let frutas = new Array("manzana","pera","sandia");
console.log(frutas.length);
for(let i = 0; i <= frutas.length-1; i++){
    console.log("----Aqui se ejecuta mi for---")
    console.log(i)
    console.log(frutas[i]);//Esperamos que se impriman en cola uno a uno los valores dentro del arreglo de frutas
}

/* 
function setBastaFlag(flag){
    const abc = ["a","b","c","d"]
    // let i = 0;
    // do{
    //     console.log(abc[i]);
    //     i++
    // }while(flag)
    while(flag){
        console.log(abc[i])
        i++;
    }
}
 */

//Do while
function setBastaFlag(flag){
    const abc = ["a","b","c","d"]
    let i = 30;
          do{
             console.log(abc[i]);
            i++
         }while(flag)
} // Al menos se ejecuta 1 vez
>>>>>>> ed1f8586503c3fa18438ccee4b9b46721575cff5
