window.onload = function() {
    var textInput = document.getElementById("ingresa");
    //Evento para el input
    textInput.oninput = function() {
        var inputDiv = document.getElementById("inputDiv");
        var oldAlert = document.getElementById("alerta");
        if (oldAlert) {
            inputDiv.removeChild(oldAlert);
        }

        if (isNaN(parseInt(textInput.value))) {
            var pAlert = document.createElement("p");
            pAlert.id = "alerta";
            pAlert.textContent = "No es un número y debería serlo";
            pAlert.style.color = "red";
            pAlert.style.fontStyle = "bold";

            inputDiv.appendChild(pAlert);
        }
    }
}