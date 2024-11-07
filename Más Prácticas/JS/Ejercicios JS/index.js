/* El flujo de trabajo de JS es el proceso en el cual se van interpretando las líneas de tu código, y ese flujo se puede interrumpir, se puede pausar y se ejecuta en un solo hilo o en la línea
 */

const jsFlow = () => {
  console.log(4);
};
console.log(1);
console.log(2);

//invocando
jsFlow();
console.log(3);

//If y else son ejecutables que modifican el flujo JS, las condicionales if y else modifican
//al crear dos posibles bloques de código ejecutable, que en lenguaje natuaral serían dos finales

const mostrarMensaje = (mensaje) => {
  alert(mensaje);
};

const validarEdad = (edad) => {
  if (edad >= 18) {
    mostrarMensaje("BBVA te presta mil pesos");
  } else {
    mostrarMensaje("Necesitas tener más de 18 años para un prestamo");
  }
  if (edad === 25) {
    console.log("es un buen candidato");
  }
};
validarEdad(25);

/*JS utiliza estructuras de control de flujo para hacer tu código eficiente y flexible: 
Estructuras son:
1. Condicionales(if, else, switch(en base a casos));
2. Ciclos(for, while, do .. while): la manera en que controlan el flujo es por medio de iteraciones
3. Controles de salto(break)
*/

//switch

const validarNoLaborable = (dia) => {
  switch (dia) {
    case "sabado":
      console.log("Dia no laborable");
      break;
    case "domingo":
      console.log("Dia no laborable");
      break;
    default:
      break;
  }
};
validarNoLaborable("sabado");

const validarLaborable = (day) => {
  switch (day) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
      console.log("Dia laborable");
      break;
    default:
      break;
  }
};
validarLaborable("miercoles");
