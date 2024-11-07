// Declarar o definir funciones

function nombreFuncion(param1, param2) {//function paabe¿ra reservada
    // Código a ejecutar
    return param1 + param2; 
}

// Invocar funciones
console.log(nombreFuncion("hola","Liliana"));

// alcance local

function sumar(a, b) {
    let resultado = a + b; 
    return resultado;
  }

  //funcionSumar <- el tipo es function
  
  console.log(resultado);

//   alcance global

  let mensaje = "Hola a todos"; // Variable global

function mostrarMensaje() {
  console.log(mensaje); 
}

mostrarMensaje(); 

// alcance lexico

function padre() {
    let mensaje = "Hola desde el padre";
    
    function hijo() {
      console.log(mensaje); 
    }
    
    hijo();
  }
  
  padre(); 
  
//Funcion es un objeto
  console.log((function () {}).constructor === Function); //true

//Los nombres van en camelCase
function miFuncionEjemplo() {
  console.log("Ejemplo de función en camelCase");
}

//Que es un Objeto

//Prototype JS

//Existe un constructor del objeto global function
const sumar = new Function("a", "b", "return a + b");
console.log(sumar(2, 3)); // 5

  //Propiedades de funcion y metodos
  function saludar(nombre) {
    console.log("Hola, " + nombre);
  }
  console.log(saludar.name); 
  console.log(saludar.length);
  //Las funciones se declaran, y se invocan, cuando le pedimos JS ejecute el codigo dentro de la función. 
  saludar("Liliana");

  //This
  const persona = {
    nombre: "Ana",
    saludar: function() {
      console.log("Hola, soy " + this.nombre);
    }
  };
  
  persona.saludar(); // "Hola, soy Ana"

  //Instancia

  function Persona(nombre) {
    this.nombre = nombre;
  }
  
  const juan = new Persona("Juan");
  console.log(juan.nombre); // "Juan"

//Prototype

function Persona(nombre) {
  this.nombre = nombre;
}

// Agregar un método al prototype
Persona.prototype.saludar = function() {
  console.log("Hola, soy " + this.nombre);
};

const maria = new Persona("María");
const pedro = new Persona("Pedro");

maria.saludar(); // "Hola, soy María"
pedro.saludar(); // "Hola, soy Pedro"


  // Actividad - reconocer antes de programar 

  var x = 10;
  function createFunction1() {
 var x = 20;
    return new Function('return x;'); 
  }
 
  function createFunction2() {
    var x = 20; function f() {
       return x; 
     }
     return f;
   }
   var f1 = createFunction1();
   console.log(f1()); // 10
   var f2 = createFunction2();
   console.log(f2()); // 20  

//Hoisting 

saludar();

function saludar() {
  console.log("Hola!");
}

//Auto-invocación

(function() {
    const mensaje = "Esta es una IIFE";
    console.log(mensaje);
  })(); 

  //nombreFuncion();
  //(Funcion)();

  // Funciones utilizadas como valores
  
  const multiplicar = function(a, b) {
    return a * b;
  };
  
  function calcular(operacion, a, b) {
    return operacion(a, b);
  }
  
  console.log(calcular(multiplicar, 2, 3)); 
  

//Funciones anónimas

const numeros = [1, 2, 3, 4];

const duplicados = numeros.map(function(numero) {
  return numero * 2;
});

console.log(duplicados); // [2, 4, 6, 8]

//Funciones Arrow 
const saludar = () => console.log("Hola!");

saludar(); 
