window.onload = function(doc) {
    console.log("DOC > " + JSON.stringify(doc));
    var textInput = document.getElementById("ingresa");
    //Evento para el input
    textInput.oninput = function(ev) {
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
    demoButton.onclick = function(ev) {
        console.log("Evento input > " + JSON.stringify(ev.target.value));
        alert("Me apretaste fuertón");
    }
    var currentColor = 0;
    var colorArray = ["green", "blue", "red", "yellow", "deeppink", "white", "grey", "orange"];
    demoButton.onmouseover = function(ev) {
        console.log("Evento input > " + JSON.stringify(ev.target.value));
        demoButton.style.color = colorArray[currentColor++ % colorArray.length];
    }
}