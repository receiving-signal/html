'speechSynthesis' in window ? console.log("Web Speech API supported!") : console.log("Web Speech API not supported :-(")
const synth = window.speechSynthesis
let ourText = ""
const utterThis = new SpeechSynthesisUtterance(ourText)

setInterval(update, 5000);

function update() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
    }
  xhttp.open("GET", "crypt.txt", true); //import from py
  xhttp.send();

  utterThis.text = this.responseText;
  synth.speak(utterThis)
}