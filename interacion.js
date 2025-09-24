document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();   // Evita que el formulario se envíe automáticamente

   // valores
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let edad = parseInt(document.getElementById("edad").value);
    let email = document.getElementById("email").value.trim();
    let sexo = document.querySelector('input[name="sexo"]:checked');
    let password = document.getElementById("password").value.trim();
    let confirmar = document.getElementById("confirmar").value.trim();
    let mensajeError = document.getElementById("mensajeError");

    //validaciones
    if (nombre.length < 6 || nombre.length > 15 ) {
        mensajeError.textContent = "El nombre debe tener entre 6 y 15 letras";
        return;
    }

    if (apellido.length < 6 || apellido.length > 15 ) {
        mensajeError.textContent = "El apellido debe tener enetre 6 y 15 letras"
        return;
    }

    if (isNaN(edad) || edad< 18 || edad > 50) {
        mensajeError.textContent = "Tu edad debe estar en el rango de 18 a 50 años";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensajeError.textContent = "Email inválido.";
        return;
    }

    if (!sexo) {
        mensajeError.textContent = "Seleciona una opcion de sexo";
        return;
    }

    if (password.length < 10) {
        mensajeError.textContent = "La contraseña debe tener al menos 10 caracteres";
        return;
    }

    if (password !== confirmar) {
        mensajeError.textContent = "Las contraseñas no coinciden";
        return;
    }

    mensajeError.textContent = "";
    alert("Registro con exito");
});