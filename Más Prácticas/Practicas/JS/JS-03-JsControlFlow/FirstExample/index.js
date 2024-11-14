function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const cantidad = document.getElementById("cantidad").value;
    const correo = document.getElementById("correo").value;

    const campos = [
        { nombreCampo: "nombre", valor: nombre },
        { nombreCampo: "cantidad", valor: cantidad },
        { nombreCampo: "correo", valor: correo }
    ];

    let camposCompletos = true;

    for (let i = 0; i < campos.length; i++) {
        if (!campos[i].valor) {
            camposCompletos = false;
            break;
        }
    }

    if (camposCompletos && !isNaN(cantidad) && cantidad >= 25) {
        document.getElementById("mensaje").innerText = "¡Formulario enviado con éxito!";
    } else if (!camposCompletos) {
        document.getElementById("mensaje").innerText = "Por favor complete todos los campos.";
    } else if (isNaN(edad) || edad <= 18) {
        document.getElementById("mensaje").innerText = "La cantidad debe ser mayor a.";
    }
}