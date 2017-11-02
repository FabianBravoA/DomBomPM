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

    var demoButton = document.getElementById("demo");
    demoButton.onclick = function() {
        alert("Me apretaste fuertón");
    }
    var currentColor = 0;
    var colorArray = ["green", "blue", "red", "yellow", "deeppink", "white", "grey", "orange"];
    demoButton.onmouseover = function() {
        demoButton.style.color = colorArray[currentColor++ % colorArray.length];
    }
}