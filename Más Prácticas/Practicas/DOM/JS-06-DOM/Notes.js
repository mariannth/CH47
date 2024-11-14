// Datos de ejemplo para el catálogo de productos
const productos = [
    { id: 1, nombre: "Producto 1", descripcion: "Descripción del producto 1", precio: "$10.00" },
    { id: 2, nombre: "Producto 2", descripcion: "Descripción del producto 2", precio: "$20.00" }
];

// Función para crear y mostrar productos en el DOM
function mostrarProductos() {
    const catalogo = document.getElementById("product-catalog");
    catalogo.innerHTML = ""; // Limpiar el catálogo

    productos.forEach((producto) => {
        // Crear una tarjeta de producto usando createElement y Bootstrap
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";

        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">${producto.precio}</p>
                    <button class="btn btn-danger" onclick="eliminarProducto(${producto.id})">Eliminar</button>
                </div>
            </div>
        `;
        
        // Añadir la tarjeta al catálogo
        catalogo.appendChild(card);
    });
}

// Función para eliminar un producto del catálogo
function eliminarProducto(id) {
    // Encontrar el índice del producto a eliminar
    const index = productos.findIndex((producto) => producto.id === id);
    if (index !== -1) {
        productos.splice(index, 1); // Eliminar del array
        mostrarProductos(); // Actualizar el catálogo en el DOM
    }
}

// Event Listener para agregar un nuevo producto
document.getElementById("add-product").addEventListener("click", () => {
    // Crear un nuevo producto
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: `Producto ${productos.length + 1}`,
        descripcion: `Descripción del producto ${productos.length + 1}`,
        precio: `$${(productos.length + 1) * 10}.00`
    };
    productos.push(nuevoProducto);
    mostrarProductos(); // Actualizar el catálogo en el DOM
});

// Event Listener para cargar el contenido al abrir la página
window.onload = function () {
    mostrarProductos();
};

// Ejemplo de uso de setAttribute y getAttribute
function modificarAtributoProducto(id, atributo, valor) {
    const producto = document.getElementById(`producto-${id}`);
    if (producto) {
        producto.setAttribute(atributo, valor);
        console.log(`Atributo ${atributo} modificado a:`, producto.getAttribute(atributo));
    }
}
