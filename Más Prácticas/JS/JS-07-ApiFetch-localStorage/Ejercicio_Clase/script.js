//JS tiene la capacidad de ser sincrono y asincrono
// siendo la parte asíncrona la que se encarga de administrar los flujos de control de flujo
//Como los request y response, y las peticiones y respuestas
//Estas opciones u operaciones asincronas permiten que el programa siga ejecutando otras tareas mienstras espera que la operacion actual se complete, JS es asincrono y puede utilizar funciones predefinidas como setTimeout, setInterval, Promise, Async/Await, etc.

//JS utiliza estructuras de control de flujo para hacer tu codigo eficiente y flexible:
//Estas estructuras son:
//1.Condicionales(if, else if, else, switch (en base a casos));
//2.Ciclos(for, while, do..while): la manera en que controlan el flujo es por medio de iteraciones.
//3.Controles de salto (break): es capaz de modificar y romper los ciclos permitiendote salir del ciclo o saltar de una iteración especifica

//fetch es una API nativa de JS que nos permite hacer peticiones a un servidor
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API

// //EJEMPLO DE UNA FUNCION SINCRONA
//  function procesoSincrono() {
//    console.log("Inicio del proceso sincrono");
//    for (let i = 0; i < 1e9; i++) {}
//    console.log("Fin del proceso sincrono");
//  }

//  console.log("Este punto es antes de la función");
//  procesoSincrono();
//  console.log("Este punto es despues de la función");

// const failed = false; // Declara una constante 'failed' con el valor 'true', indicando que la promesa fallará. En caso contrario, la promesa se resuelve.

// const myPromise = new Promise((resolve, reject) => { // Crea una nueva promesa 'myPromise' que recibe dos funciones: 'resolve' y 'reject'.
//     if(failed)  // Verifica si 'failed' es verdadero.
//         reject('fail promise'); // Si 'failed' es verdadero, llama a 'reject' y pasa el mensaje 'fail promise'.
//     else
//         resolve('resolved!!'); // Si 'failed' es falso, llama a 'resolve' y pasa el mensaje 'resolved!!'.
// });

// function success(result){ // Define una función 'success' que recibe un parámetro 'result'.
//   console.log(result); // Imprime el valor de 'result' en la consola.
// }

// function onFailed(error){ // Define una función 'onFailed' que recibe un parámetro 'error'.
//   console.log(error); // Imprime el valor de 'error' en la consola.
// }

// myPromise.then((result) => success(result)) // Llama a 'then' en 'myPromise', que se ejecutará si la promesa se resuelve.
// .catch((error) => onFailed(error)); // Llama a 'catch' en 'myPromise', que se ejecutará si la promesa falla.

//EJEMPLO DE UNA FUNCION ASINCRONA
// function procesoAsincrono() {
//   console.log("Inicio del proceso asincrono");
//   setTimeout(()=>{
//     console.log("Fin del proceso asincrono");
//   },5000);
// }

// console.log("Este punto es antes de la función asincrona");
// procesoAsincrono();
// console.log("Este punto es despues de la función asincrona");

// URL de la API para obtener la información de Pikachu
//LLAMANDO A PIKACHU
// const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

// // Función para obtener los datos del Pokémon
// async function getPokemonData() {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         // Extraemos el nombre y la imagen del Pokémon
//         const pokemonName = data.name;
//         console.log(pokemonName);
//         const pokemonImage = data.sprites.front_default;

//         // Mostramos la información en el HTML
//         const pokemonInfoDiv = document.getElementById("pokemon-info");
//         pokemonInfoDiv.innerHTML = `
//             <h2>${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
//             <img src="${pokemonImage}" alt="${pokemonName}">
//         `;
//     } catch (error) {
//         console.error("Error al obtener los datos del Pokémon:", error);
//     }
// }

// // Llamamos a la función para mostrar los datos en la página
// getPokemonData();

//LAMANDO MUCHOS POKEMONES
// URL de la API de Pokémon con un límite de 9 resultados para esta demostración
// const url = "https://pokeapi.co/api/v2/pokemon?limit=54"; 

// // Función asíncrona para obtener la información de cada Pokémon
// async function fetchPokemons() {
//   try {
//     // Realiza una solicitud a la API de Pokémon y espera la respuesta
//     const response = await fetch(url);
//     // Convierte la respuesta a JSON para obtener los datos
//     const data = await response.json();
//     // Selecciona el contenedor HTML donde se insertarán las cards de los Pokémon
//     console.log(data.results);
//     const pokemonContainer = document.getElementById("pokemon-container");
    
//     // Itera sobre cada resultado en la lista de Pokémon obtenida
//     for (const pokemon of data.results) {
//       // Realiza una solicitud para obtener la información específica de cada Pokémon
//       const pokemonData = await fetch(pokemon.url);
//       // Convierte la respuesta a JSON para acceder a los detalles del Pokémon
//       const pokemonInfo = await pokemonData.json();

//       // Crea un elemento <div> que servirá como la estructura de la card de Bootstrap
//       const pokemonCard = document.createElement("div");
//       // Añade la clase de Bootstrap para hacer que la card ocupe una columna
//       pokemonCard.classList.add("col");

//       // Inserta el contenido HTML de la card, incluyendo la imagen y el nombre del Pokémon
//       pokemonCard.innerHTML = `
//         <div class="card h-100 text-center">  <!-- Card de Bootstrap con altura completa y texto centrado -->
//           <img src="${pokemonInfo.sprites.front_default}" class="card-img-top" alt="${pokemonInfo.name}"> <!-- Imagen del Pokémon -->
//           <div class="card-body">  <!-- Cuerpo de la card -->
//             <h5 class="card-title text-capitalize">${pokemonInfo.name}</h5> <!-- Nombre del Pokémon con estilo capitalizado -->
//           </div>
//         </div>
//       `;
//       // Añade la card creada al contenedor de Pokémon en el HTML
//       pokemonContainer.appendChild(pokemonCard);
//     }
//   } catch (error) { // Captura cualquier error que ocurra durante el proceso de fetch
//     // Muestra un mensaje de error en la consola en caso de que algo falle
//     console.error("Error fetching Pokémon data:", error);
//   }
// }

// // Llama a la función para cargar los Pokémon al iniciar el script
// fetchPokemons();

// //OTRA FORMA DE LLAMAR A PIKACHU
// const url1 = "https://pokeapi.co/api/v2/pokemon/pikachu";

// console.log("antes del fetch");

// fetch(url1, {
//     method: 'GET'
// })
// .then((response) => { //recibe la respuesta
//     // Convierte la respuesta a JSON
//     return response.json();
// })
// .then((data) => { //trabaja con la data de la respuesta
//     // Accede al nombre del Pokémon
//     console.log(data.name);
//      localStorage.setItem("nombrePokemon", data.name);
//     //localStorage.removeItem("nombrePokemon");
// })
// .catch((error) => {
//     console.error("Ups, algo salió mal", error);
// });

// console.log("después del fetch");

// function peleaPokemon() {
//   const miPrimerPokemon = localStorage.getItem("nombrePokemon");
//   console.log("primerContrincante: " + miPrimerPokemon);
// }

// peleaPokemon();
//TAREA: Metodo post, para hacer algo, esto debe ser: un body con tu nombre y team_name
//Body:  {
//   nombre: "liliana",
//   teamName: "chicatana"
// }

// ------------------------------------------------
//TAERA
const url = 'https://pokeapi.co/api/v2/';

// Función para obtener datos del Pokémon
const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${url}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

// Función para mostrar la tarjeta del Pokémon en el DOM
const displayPokemonCard = (pokemon) => {
    const cardContainer = document.querySelector('.card--container');
    cardContainer.innerHTML = `
        <div class="card text-center">
            <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
            <div class="card-body">
                <h5 class="card-title text-capitalize">${pokemon.name}</h5>
                <p>ID: ${pokemon.id}</p>
                <p>Peso: ${pokemon.weight / 10} kg</p>
            </div>
        </div>
    `;
};

// Obtener Pokémon inicial al cargar la página
document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    if (pokemon) {
        localStorage.setItem('currentPokeId', pokemon.id);
        displayPokemonCard(pokemon);
    }
});

// Obtener Pokémon por nombre o ID cuando se presiona el botón "Get Pokémon"
document.getElementById('get-btn').addEventListener('click', async () => {
    const text = document.getElementById('poke-name').value.toLowerCase();
    const pokemon = await fetchPokemon(text);
    if (pokemon) {
        localStorage.setItem('currentPokeId', pokemon.id);
        displayPokemonCard(pokemon);
    }
});

// Obtener Pokémon anterior
document.getElementById('previous-btn').addEventListener('click', async () => {
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
    const newId = Math.max(1, currentPokeId - 1);
    const pokemon = await fetchPokemon(newId);
    if (pokemon) {
        localStorage.setItem('currentPokeId', pokemon.id);
        displayPokemonCard(pokemon);
    }
});

// Obtener Pokémon siguiente
document.getElementById('next-btn').addEventListener('click', async () => {
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
    const newId = currentPokeId + 1;
    const pokemon = await fetchPokemon(newId);
    if (pokemon) {
        localStorage.setItem('currentPokeId', pokemon.id);
        displayPokemonCard(pokemon);
    }
});
