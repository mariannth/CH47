const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector(".name"); // Corregido, le faltaba el .
const $b = document.querySelector(".blog"); // Corregido, tenía un # en vez del .
const $l = document.querySelector(".location");

async function displayUser(username) {
  //Faltaba la palabra async
  try {
    $n.textContent = "cargando...";
    const response = await fetch(`${usersEndpoint}/${username}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } // Corregido, faltaba esta condición
    const data = await response.json(); //Faltaba la extracción de la data
    console.log(data);
    // Usamos la data correctamente, faltaba || para evitar undefined
    $n.textContent = `${data.name || "Sin nombre"}`;
    $b.textContent = `${data.blog || "Sin blog"}`;
    $l.textContent = `${data.location || "Sin ubicación"}`;
  } catch (error) {
    handleError(error); // Delegamos el manejo de errores, faltaba el try catch
  }
}

function handleError(err) {
  console.error("OH NO!");
  console.error(err);
  $n.textContent = `Algo salió mal: ${err.message}`;  //Faltaba el $ en la variable
}

// Llamamos a la función
displayUser("stolinski").catch(handleError);