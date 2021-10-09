"use strict";
function ValidarRut(valor) {
    var tmp = valor.split('-');
    var digito = tmp[1];
    var rut = tmp[0];
    if (digito == 'K')
        digito = 'k';
    var M = 0, S = 1;
    for (; rut; rut = Math.floor(rut / 10))
        S = (S + rut % 10 * (9 - M++ % 6)) % 11;
    console.log(S ? S - 1 : 'k');
    return S ? S - 1 : 'k';
}
function ValidarCheckbox() {
    var checkboxes = document.getElementsByName("lenguajes");
    var numberOfCheckedItems = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked)
            numberOfCheckedItems++;
    }
    if (numberOfCheckedItems >= 1) {
        return true;
    }
    return false;
}
function LimpiarDatos() {
    var reset = document.getElementById("limpiar");
    reset.type = "reset";
}
(function () {
    var reset = document.getElementById("limpiar");
    var nombreCompleto = document.getElementById("nombrecompleto");
    var telefono = document.getElementById("telefono");
    var rut = document.getElementById("rut");
    var email = document.getElementById("email");
    var rango1 = document.getElementById("rango1");
    var rango2 = document.getElementById("rango2");
    var opinion = document.getElementById("opinion");
    opinion.maxLength = "500";
    telefono.maxLength = "9";
    rut.pattern = "^[0-9]{8}-[0-9Kk]{1}$";
    var campos = document.getElementById("campos");
    console.log(nombreCompleto.value);
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');
    reset.addEventListener("click", LimpiarDatos);
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                if (nombreCompleto.value == "") {
                    campos.children[0].getElementsByClassName("invalid-feedback")[0].innerHTML = "Campo requerido";
                }
                if (rut.value == "") {
                    campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML = "Campo requerido";
                }
                if (ValidarRut(rut.value) > 1) {
                    campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML = "Rut no válido";
                }
                if (!ValidarCheckbox()) {
                    var element = document.getElementById("checkbox1");
                    element.setCustomValidity({ 'valueMissing': true });
                    campos.children[4].getElementsByClassName("invalid-feedback")[0].innerHTML = "Selecciona al menos un lenguaje";
                    campos.children[4].getElementsByClassName("invalid-feedback")[0].style.display = "block";
                }
                else {
                    var element = document.getElementById("checkbox1");
                    element.setCustomValidity("");
                    campos.children[4].getElementsByClassName("invalid-feedback")[0].innerHTML = "";
                    campos.children[4].getElementsByClassName("invalid-feedback")[0].style.display = "none";
                }
                if (rango1.value == 0) {
                    console.log("valor");
                    rango1.setCustomValidity({ 'valueMissing': true });
                    campos.children[5].getElementsByClassName("invalid-feedback")[0].innerHTML = "El valor debe ser diferente de cero";
                }
                else {
                    rango1.setCustomValidity("");
                }
                if (rango2.value == 0) {
                    rango2.setCustomValidity({ 'valueMissing': true });
                    campos.children[5].getElementsByClassName("invalid-feedback")[0].innerHTML = "El valor debe ser diferente de cero";
                }
                else {
                    rango2.setCustomValidity("");
                }
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                form.style.display = "none";
                var mensaje = document.getElementById("mensaje");
                mensaje.style.display = "block";
            }
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
        }, false);
    });
})();
