 //Habiamos comentado que el flujo Javascript es el proceso en el cual
 //se van interpretando las lineas de tu codigo, y es flujo se puede interrumpir,
 //se puede pausar y se ejecutar en un solo hilo o en linea

 const jsFlow = () =>{
    console.log(4);
 }

 console.log(1);
 console.log(2);
 //invocando
 jsFlow();
 console.log(3);

 //If y el else son ejecutables que modifican el flujo JS, las condicionales if y else modifican elflujo
 //al crear dos posibles bloques de codigo ejecutable que en lenguaje natural serian dos finales posibles

 const mostrarMensaje = (mensaje) =>{
    alert(mensaje);
   }

 const validarEdad = (edad) =>{
    if(edad >= 18){
        mostrarMensaje("bbva te presta mil pesos");
    }else{
        mostrarMensaje("bbva necesitas tener 18 años");
    }

    if(edad === 25){
        console.log("es buen candidato")
    }

 }

validarEdad(25);

/*Javascript utiliza estructuras de control de flujo para hacer tu codigo eficiente y flexible:
Estas estructuras son:
1.Condicionales(if, else if, else, switch (en base a casos));
2.Ciclos(for, while, do..while): la manera en que controlan el flujo es por medio de iteraciones. 
3.Controles de salto (break): es capaz de modificar y romper los ciclos permitiendote salir del ciclo o saltar de una iteración especifica
*/

//switch -> que es como en la vida real, han real tenemos una series de casos o de categoria pre reconocidas
//en las cuales necesitamos que nuestros bloques de codigo se ejecuten segun sea el caso a valdiar

// if(x === x)
// if(x >= x ) or (x>= x) 
const  ValidarLaborable = (dia) =>{
    switch(dia){
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "viernes":
            console.log("Dia laborable")
            break;
        default:
            console.log("este dia no es laborable")
            break;        
    }
}

ValidarNoLaborable("sabado");
