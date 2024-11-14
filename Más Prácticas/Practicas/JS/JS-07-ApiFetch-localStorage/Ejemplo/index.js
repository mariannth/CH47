//Javascript tiene la capacidad de ser sincrono y asincrono,
//siendo la parte asincrona la que se encarga de administrar los flujos de control
//Como los request.
//Estas opciones o operaciones asincronas permiten que el progrma siga ejecutando otras
//tareas mientras espera que la operación actual se complete, JS es asincrono, y podemos
//utilizar funciones predefinidas como setTimeout, promesas, y async/await 
//Ejemplo de una funcion sincrona 
function procesoSincrono(){
   // console.log("inicia el proceso sincrono");
    for(let i=0; i< 1e9 ; i++){}
    //console.log("fin del proceso sincrono");
}

//console.log("Este punto es antes de la función");
procesoSincrono();
//console.log("despues de la función sincrona");

//Asincrono 
function procesoAsincrono(){
    //console.log("Inicia el proceso asincrono");
    setTimeout(()=>{
        //console.log("aqui termina el proceso asincrono");
    },5000);
}
//console.log("antes de la funcion asincrona");
procesoAsincrono();
//console.log("despues de la funcion asincrona");

const url = "https://pokeapi.co/api/v2/pokemon/Bulbasaur";

console.log("antes del fetch");
fetch(url,{
method: 'GET'
}).then((response)=>{
    console.log(response.data.name);
}).catch((error)=>{
    console.error("ups no se que paso");
});
 console.log("Despues del fetch");