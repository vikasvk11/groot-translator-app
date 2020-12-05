var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var textOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Server down! I am Groot")
}

function clickHandler() {
    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            textOutput.innerText = translatedText;
        } )
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)