//Cuando buscamos modificar un valor de input html, generalmente utilizamos la
//const inputOne = document.getElementById("inputText").value;
//const otroElemento = inputOne.getElementById(""); //No se puede porque el inputOne ya está obteniedo un valor
//La estructura de como interactuamos con el DOM en JS, es la siguiente:
/*
    1. Palabra reservada: document
    2. Nombre de la etiqueta: .querySelector, en este caso, getElementById, es el método/API para buscar un elemento
    3. Nombre de la propiedad: .value, Utilizamos el atributo del elemento que en este caso conocemos previamente que es un input
    Por este conocimiento previo, value. 
*/
document.getElementById("registrarse").addEventListener("click", function () {
  const nombre = document.querySelector("#nombre input").value.trim();
  //const email = document.querySelector("#email input").value.trim();
  const password = document.querySelector("#password input").value.trim();
  if (nombre === "") {
    alert("Por favor ingresa tu nombre, este campo no puede quedar vacio");
    //} else if (email === "") {
    // alert("Oshe, esto no puede estar vacío");
    //}else if (!email.includes("@")) {
    //  alert("Correo no aceptado");
  } else if (password === "") {
    alert("Contraseña incorrecta");
  } else if (password.length >=8) {
    const mensaje = document.getElementById("msj");
    //mensaje.className = "valid";
    mensaje.style.display = "none";
  } else {
    alert("Registro completo " + nombre + "!");
  }
});
