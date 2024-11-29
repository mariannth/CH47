// Escribe tu código aquí.

// Array de palabras a utilizar
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'ratón', 'pantalla', 'serpiente', 'computadora'];
  
function bigWords(str, arr) {
    return arr.filter(word => word.length > str.length);
  }
  
  // Función para imprimir las palabras en la lista HTML
  function printArray(arr) {
    const listContainer = document.getElementById('wordList'); // Contenedor de la lista en el HTML
    
    // Limpiamos la lista antes de agregar nuevos elementos
    listContainer.innerHTML = '';
  
    // Recorremos el arreglo y agregamos cada palabra como un <li>
    arr.forEach(word => {
      const li = document.createElement('li');
      li.textContent = word; // Asignamos el texto a cada <li>
      listContainer.appendChild(li); // Añadimos el <li> al contenedor
    });
  }
  
  
  // Evento de click en el botón
  document.getElementById('submitButton').addEventListener('click', () => {
    const userInput = document.getElementById('wordInput').value; // Obtenemos la palabra del input
    
    // Filtramos las palabras más largas que la palabra del input
    const result = bigWords(userInput, myArray);
    
    // Mostramos el resultado en el HTML
    printArray(result);
  });
  