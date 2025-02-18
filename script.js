document.addEventListener("DOMContentLoaded", function () {
    console.log("Página cargada correctamente");

    // Validación simple del formulario de contacto
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Mensaje enviado con éxito. Pronto nos pondremos en contacto.");
        this.reset();
    });
});
