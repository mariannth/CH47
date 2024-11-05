document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pass').value;
    const birthDate = document.getElementById('fecha').value;
    const termsAccepted = document.getElementById('opc').checked;
    const alertContainer = document.getElementById('alertContainer');

    // Función para mostrar mensajes de error
    function showAlert(message, type = "danger") {
        alertContainer.textContent = message;
        alertContainer.className = `alert alert-${type} position-fixed w-50`; // Cambia el tipo de alerta (danger o success)
        alertContainer.classList.remove('d-none');
        alertContainer.scrollIntoView({ behavior: 'smooth' }); // Desplazarse al contenedor de alerta
    }

    // Validaciones
    if (name.length <= 5) {
        showAlert("El nombre completo debe tener más de 5 caracteres.");
        return;
    }

    if (!email.includes('@')) {
        showAlert("El email debe tener un formato válido con '@'.");
        return;
    }

    if (password.length < 8) {
        showAlert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    if (birthDate === "") {
        showAlert("La fecha de nacimiento es requerida.");
        return;
    }

    if (!termsAccepted) {
        showAlert("Debes aceptar los términos y condiciones.");
        return;
    }

    // Ocultar la alerta si todas las validaciones pasan
    alertContainer.classList.add('d-none');

    // Mostrar mensaje de confirmación y log en consola
    const confirmationMessage = `Se registró la siguiente información:\nNombre: ${name}\nEmail: ${email}\nFecha de nacimiento: ${birthDate}`;
    showAlert(confirmationMessage, "success"); // Mostrar mensaje de éxito en verde
    console.log("Información registrada:");
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Fecha de nacimiento:", birthDate);
    console.log("Fecha de registro:", new Date());
    console.log("Contraseña:", password);
    console.log("Terminos aceptados:", termsAccepted);
});
