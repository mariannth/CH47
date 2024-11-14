// // Obtener productos usando Fetch API (GET)
// function obtenerProductos() {
//     fetch("https://fakestoreapi.com/products")
//         .then(response => response.json()) // Convertir la respuesta a JSON
//         .then(data => {
//             console.log("Productos:", data);
//             mostrarProductos(data); // Llama a la función para mostrar productos en el DOM
//         })
//         .catch(error => console.error("Error al obtener productos:", error));
// }

// // Función para mostrar productos en el DOM
// function mostrarProductos(productos) {
//     const catalogo = document.getElementById("product-catalog");
//     catalogo.innerHTML = ""; // Limpiar el catálogo

//     productos.forEach((producto) => {
//         const card = document.createElement("div");
//         card.className = "col-md-4 mb-4";

//         card.innerHTML = `
//             <div class="card">
//                 <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${producto.title}</h5>
//                     <p class="card-text">${producto.description}</p>
//                     <p class="card-text"><strong>Precio:</strong> $${producto.price}</p>
//                 </div>
//             </div>
//         `;
        
//         catalogo.appendChild(card);
//     });
// }

// // Llamar a la función al cargar la página
// window.onload = obtenerProductos;

// // Agregar un nuevo producto usando Fetch API (POST)
// function agregarProducto() {
//     const nuevoProducto = {
//         title: "Nuevo Producto",
//         price: 29.99,
//         description: "Este es un producto de prueba",
//         image: "https://via.placeholder.com/150",
//         category: "electronics"
//     };

//     fetch("https://fakestoreapi.com/products", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(nuevoProducto) // Convertir objeto a JSON
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log("Producto agregado:", data);
//         obtenerProductos(); // Actualizar el catálogo después de agregar un producto
//     })
//     .catch(error => console.error("Error al agregar producto:", error));
// }

// // Llamar a la función agregarProducto para probar el POST
// document.getElementById("add-product").addEventListener("click", agregarProducto);
// Las promesas en JavaScript representan el resultado de una operación asincrónica. Una promesa puede estar en uno de estos estados:

// Pendiente: La operación aún no se ha completado.
// Resuelta: La operación se completó con éxito.
// Rechazada: La operación falló.
// Cuando usamos fetch(), obtenemos una promesa que podemos manejar con los métodos .then() para manejar una resolución exitosa y .catch() para capturar errores.
// fetch("https://fakestoreapi.com/products")
//     .then(response => response.json()) // Si la solicitud es exitosa, convierte la respuesta a JSON
//     .then(data => console.log("Productos obtenidos:", data)) // Manejo de la respuesta exitosa
//     .catch(error => console.error("Error al obtener productos:", error)); // Manejo del error
    
// Para hacer una solicitud HTTP de manera sincrónica en JavaScript, puedes utilizar el objeto XMLHttpRequest con el modo sincrónico. 
// Sin embargo, es importante notar que las solicitudes sincrónicas de red en el navegador se consideran malas prácticas, ya que pueden 
// "congelar" la interfaz de usuario y hacer que la página se sienta poco receptiva. Este método solo se debería usar para propósitos de 
// demostración o en situaciones controladas.

// // Función para hacer una solicitud sincrónica HTTP GET
// function solicitudSincrona() {
//     const xhr = new XMLHttpRequest();
//     const url = "https://fakestoreapi.com/products";

//     console.log("Iniciando solicitud sincrónica...");

//     // Abre la solicitud en modo sincrónico (el tercer parámetro es false)
//     xhr.open("GET", url, false);

//     // Envía la solicitud. Esto bloqueará el flujo de la aplicación.
//     xhr.send();

//     if (xhr.status === 200) {
//         console.log("Respuesta recibida:", xhr.responseText);
//     } else {
//         console.log("Error en la solicitud:", xhr.status);
//     }

//     console.log("Solicitud sincrónica completada.");
// }

// console.log("Antes de la solicitud sincrónica");
// solicitudSincrona();
// console.log("Después de la solicitud sincrónica");
