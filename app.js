window.onload = function() {
    var textInput = document.getElementById("ingresa");
    textInput.oninput = function() {
        console.log("textInput text > " + textInput.value);
    }
}