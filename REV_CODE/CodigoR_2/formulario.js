// Seleccionamos el formulario por su clase
var formulario = document.querySelector(".formulario");

formulario.onsubmit = function (e) {
  // e.prevent(); //Faltaba la palabra Default
  e.preventDefault(); // Evitamos la recarga de la página

  // Seleccionamos los campos del formulario
  // var n = formulario.elements[0]
  // var e = formulario.elements[1]
  // var na = formulario.elements[2]

  // var nombre = n.value
  // var edad = e.value

  var nombreInput = document.querySelector("#name"); //Usaremos el querySelector para seleccionar el input
  var edadInput = document.querySelector("#age");
  var nacionalidadInput = document.querySelector("#nationality");

  var nombre = nombreInput.value.trim(); // Eliminamos espacios innecesarios
  var edad = parseInt(edadInput.value, 10); // Convertimos edad a número

  // Obtenemos el valor de la nacionalidad seleccionada
  // var i = na.selectedIndex
  // var nacionalidad = na.options[i].value
  var nacionalidad =
    nacionalidadInput.options[nacionalidadInput.selectedIndex].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  // Validaciones
  //   if (nombre.length === 0) {
  //     n.classList.add("error")
  //   }
  //   if (edad < 18 || edad > 120) {
  //     e.classList.add("error")
  //   }

  // if (nombre.length > 0
  //   && (edad > 18
  //     && edad < 120) ) {
  //   agregarInvitado(nombre, edad, nacionalidad)
  //   }
  //}

  if (nombre === "") {
    nombreInput.classList.add("error");
    return; // Detenemos la ejecución
  } else {
    nombreInput.classList.remove("error");
  }

  if (isNaN(edad) || edad < 18 || edad > 120) {
    edadInput.classList.add("error");
    return;
  } else {
    edadInput.classList.remove("error");
  }

  // Si todo está bien, agregamos al invitado, se agregó esta parte
  agregarInvitado(nombre, edad, nacionalidad);
};

var botonBorrar = document.createElement("button");
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

// function agregarInvitado(nombre, edad, nacionalidad) {

//   if (nacionalidad === "ar") {
//     nacionalidad = "Argentina"
//   }
//   else if (nacionalidad === "mx") {
//     nacionalidad = "Mexicana"
//   }
//   else if (nacionalidad === "vnzl") {
//     nacionalidad = "Venezolana"
//   }
//   else if (nacionalidad === "per") {
//     nacionalidad = "Peruana"
//   }

// var lista = document.getElementById("lista-de-invitados")

// var elementoLista = document.createElement("div")
// elementoLista.classList.added("elemento-lista")
// lista.appendChild(elementoLista)

// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

// function crearElemento(descripcion, valor) {
// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = descripcion + ": "
// inputNombre.value = valor 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)
// }

// crearElemento("Nombre", nombre)
// crearElemento("Edad", edad)
// crearElemento("Nacionalidad", nacionalidad)


// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// elementoLista.appendChild(corteLinea)
// elementoLista.appendChild(botonBorrar);

//  botonBorrar.onclick = function() {
// // this.parentNode.style.display = 'none';
// botonBorrar.parentNode.remove()
//   }
// }

function agregarInvitado(nombre, edad, nacionalidad) {
  // Convertimos la nacionalidad al formato legible
  var nacionalidades = {
    ar: "Argentina",
    mx: "Mexicana",
    per: "Peruana",
    vnzl: "Venezolana",
  };
  var nacionalidadTexto = nacionalidades[nacionalidad] || "Desconocida";

  // Seleccionamos la lista de invitados
  var lista = document.getElementById("lista-de-invitados");

  // Creamos el contenedor para el invitado
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");

  // Función para crear elementos de información
  function crearElemento(descripcion, valor) {
    var contenedor = document.createElement("p");
    contenedor.textContent = `${descripcion}: ${valor}`;
    return contenedor;
  }

  // Agregamos información del invitado
  elementoLista.appendChild(crearElemento("Nombre", nombre));
  elementoLista.appendChild(crearElemento("Edad", edad));
  elementoLista.appendChild(crearElemento("Nacionalidad", nacionalidadTexto));

  // Botón para eliminar al invitado
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.onclick = function () {
    lista.removeChild(elementoLista);
  };

  elementoLista.appendChild(botonBorrar);
  lista.appendChild(elementoLista);
}
