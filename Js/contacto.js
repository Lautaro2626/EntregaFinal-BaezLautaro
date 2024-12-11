document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        const nombre = document.getElementById("nombre");
        const apellido = document.getElementById("apellido");
        const email = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");

        let errores = [];

        if (!validarTexto(nombre.value)) {
            errores.push("El nombre es inválido. Debe contener solo letras y no estar vacío.");
        }

        if (!validarTexto(apellido.value)) {
            errores.push("El apellido es inválido. Debe contener solo letras y no estar vacío.");
        }

        if (!validarEmail(email.value)) {
            errores.push("El correo electrónico es inválido. Debe tener un formato válido.");
        }

        if (mensaje.value.trim() === "") {
            errores.push("El mensaje no puede estar vacío.");
        }

        if (errores.length > 0) {
            alert(errores.join("\n"));
        } else {
            alert("Formulario enviado correctamente.");
            formulario.submit();
        }
    });

    function validarTexto(texto) {
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        return regex.test(texto.trim());
    }

    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email.trim());
    }
});
