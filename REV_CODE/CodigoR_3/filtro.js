// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

// const li = document.getElementsByName("lista-de-productos")
// const $i = document.querySelector('.input');

/// Selección de elementos del DOM
const listaDeProductos = document.getElementById("lista-de-productos");
const filtroInput = document.querySelector("input[type='text']"); // Aseguramos el selector correcto
const botonDeFiltro = document.querySelector("button");

// for (let i = 0; i < productos.length; i++) {
//   var d = document.createElement("div")
//   d.classList.add("producto")

//   var ti = document.createElement("p")
//   ti.classList.add("titulo")
//   ti.textContent = productos[i].nombre
   
//   var imagen = document.createElement("img");
//   imagen.setAttribute('src', productos[i].img);

//   d.appendChild(ti)
//   d.appendChild(imagen)

//   li.appendChild(d)
// }
// Función para mostrar productos en la lista
function displayProductos(lista) {
  // Limpiamos el contenedor antes de renderizar
  listaDeProductos.innerHTML = "";

  lista.forEach((producto) => {
    // Crear contenedor del producto
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    // Crear título del producto
    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    // Crear imagen del producto
    const imagen = document.createElement("img");
    imagen.setAttribute("src", producto.img);
    imagen.setAttribute("alt", producto.nombre);

    // Agregar elementos al contenedor
    divProducto.appendChild(titulo);
    divProducto.appendChild(imagen);
    listaDeProductos.appendChild(divProducto);
  });
}
// Función para filtrar productos
function filtrarProductos(texto) {
  texto = texto.toLowerCase().trim(); // Normalizamos el texto
  return productos.filter(
    (producto) =>
      producto.tipo.toLowerCase().includes(texto) ||
      producto.color.toLowerCase().includes(texto)
  );
}

// Mostramos todos los productos al cargar la página
displayProductos(productos); //Falta ;

// const botonDeFiltro = document.querySelector("button");

// botonDeFiltro.onclick = function() {
//   while (li.firstChild) {
//     li.removeChild(li.firstChild);
//   }

//   const texto = $i.value;
//   console.log(texto);
//   const productosFiltrados = filtrado(productos, texto );

//   for (let i = 0; i < productosFiltrados.length; i++) {
//     var d = document.createElement("div")
//     d.classList.add("producto")
  
//     var ti = document.createElement("p")
//     ti.classList.add("titulo")
//     ti.textContent = productosFiltrados[i].nombre
    
//     var imagen = document.createElement("img");
//     imagen.setAttribute('src', productosFiltrados[i].img);
  
//     d.appendChild(ti)
//     d.appendChild(imagen)
  
//     li.appendChild(d)
//   }
// }

// const filtrado = (productos = [], texto) => {
//   return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
// }  

// Evento para el botón de filtro
botonDeFiltro.onclick = function () {
  const textoFiltro = filtroInput.value; // Obtenemos el texto ingresado
  const productosFiltrados = filtrarProductos(textoFiltro); // Filtramos productos
  displayProductos(productosFiltrados); // Mostramos los productos filtrados
};