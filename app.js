window.onload = function() {
    var textInput = document.getElementById("ingresa");
    //Evento para el input
    textInput.oninput = function() {
        if (isNaN(parseInt(textInput.value))) {
            alert("No es un número");
        }
    }
}