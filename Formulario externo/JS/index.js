// FORMULARIO
function validar() {
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("lastname");
    var email = document.getElementById("email");

    checkInput(nombre);
    checkInput(apellido);
    checkInput(email);
}

function checkInput(elemento) {
    if (elemento.value == "") {
        elemento.style.border = "solid red 2px";
    }
}