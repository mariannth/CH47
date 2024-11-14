const axios = require('axios');

async function makeDeleteRequest(userNum) {
    try {
        // Realiza la solicitud DELETE usando el parámetro userNum
        let res = await axios.delete(`http://localhost:3000/users/${userNum}`);
        console.log(`Usuario con ID ${userNum} eliminado. Código de estado: ${res.status}`);
      } catch (error) {
        console.error("Error al eliminar el usuario:", error);
      }
    }
    
    // Llama a la función con el ID del usuario que deseas eliminar, por ejemplo, ID 3
    makeDeleteRequest(3);