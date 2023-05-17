const nombre = document.getElementById("name")
const apellido = document.getElementById("lastname")
const telefono = document.getElementById("phone")
const email =document.getElementById("mail")
const direccion = document.getElementById("addres")
const form = document.getElementById("form")
const sucursal = document.getElementById("sucursal");
const parrafo = document.getElementById("warnings")
const closeModalButton = document.querySelector('.btn-close');
const modal = document.getElementById('m_enviado');

closeModalButton.addEventListener('click', () => {
modal.style.display = 'none';
});

nombre.addEventListener("input", () => {
    nombre.value = nombre.value.replace(/[\d\s]+/g, " "); 
});

apellido.addEventListener("input", () => {
    apellido.value = apellido.value.replace(/[\d\s]+/g, " "); 
});


form.addEventListener("submit", e => {
    e.preventDefault();

    const warnings = document.querySelectorAll(".warning");
    warnings.forEach(warning => {
        warning.remove(); 
    });

    let entrar = false;
    let regexName = /^[a-zA-Z\s]+$/;
    let regexApellido = /^[a-zA-Z\s]+$/;

    if (nombre.value.length < 5 || !regexName.test(nombre.value)) {
        mostrarAdvertencia(nombre, "El nombre no es válido");
        entrar = true;
    }

    if (apellido.value.length < 5 || !regexApellido.test(apellido.value)) {
        mostrarAdvertencia(apellido, "El apellido no es válido");
        entrar = true;
    }

    let regexTelefono = /^\+?\d{9,}$/;
    if (!regexTelefono.test(telefono.value)) {
        mostrarAdvertencia(telefono, "El teléfono no es válido");
        entrar = true;
    }

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!regexEmail.test(email.value)) {
        mostrarAdvertencia(email, "El email no es válido");
        entrar = true;
    }

    if (direccion.value.length < 5) {
        mostrarAdvertencia(direccion, "La dirección no es válida");
        entrar = true;
    }
    if (sucursal.value === "") {
        mostrarAdvertencia(sucursal, "Seleccione una sucursal de referencia");
        entrar = true;
    }

    /*if (!entrar) {
        form.submit(); // Enviar el formulario si no hay advertencias
    }*/
    if (!entrar) {
        mostrarVentanaModal("Formulario enviado exitosamente");
        /*form.submit();*/
    }

});

function mostrarAdvertencia(elemento, mensaje) {
    const p = document.createElement("p");
    p.className = "warning";
    p.innerHTML = mensaje;
    elemento.parentNode.insertBefore(p, elemento.nextSibling);
}

function mostrarVentanaModal(mensaje) {
    var modal = document.getElementById("m_enviado");
    var modalMessage = document.getElementById("modal-message");
    modalMessage.textContent = mensaje;
    modal.style.display = "block";
}