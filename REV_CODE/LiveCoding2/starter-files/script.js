// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
 

// Función que hace la petición al API y maneja la respuesta
const fetchAnswer = () => {
    // Validar que el input no esté vacío antes de hacer la petición
    const input = document.getElementById('input').value.trim();
    const errorElement = document.getElementById('error');
    if (input === '') {
        errorElement.textContent = 'Please enter a question!';
        return;
    } else {
        errorElement.textContent = ''; // Limpiar mensaje de error si hay texto
    }

    // Mostrar un estado de carga
    const answerElement = document.getElementById('answer');
    answerElement.textContent = 'Loading...';

    // Realizar la llamada a la API
    fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(data => {
            // Mostrar la respuesta de la API
            answerElement.textContent = data.answer;

            // Limpiar la respuesta después de 5 segundos
            setTimeout(() => {
                document.getElementById('input').value = ''; // Limpiar la pregunta
                answerElement.textContent = ''; // Limpiar la respuesta
            }, 5000);
        })
        .catch(error => {
            // Manejar cualquier error en la llamada a la API
            answerElement.textContent = 'Error fetching answer!';
        });
};

// Agregar un eventListener al botón
document.getElementById('button').addEventListener('click', fetchAnswer);

// Bonus: Desactivar el botón si el input está vacío
document.getElementById('input').addEventListener('input', () => {
    const inputValue = document.getElementById('input').value.trim();
    const button = document.getElementById('button');
    if (inputValue === '') {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
});
