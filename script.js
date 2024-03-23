'speechSynthesis' in window ? console.log("Web Speech API supported!") : console.log("Web Speech API not supported :-(")
const synth = window.speechSynthesis
let ourText = ""
const utterThis = new SpeechSynthesisUtterance(ourText)
utterThis.pitch = 0;
for (const voice of synth.getVoices()) {
  if (voice.name === "Microsoft James - English (Australia) (en-AU)") {
    utterThis.voice = voice;
  }
}

setInterval(update, 5000);

function update() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    ourText = this.responseText;
    document.getElementById("demo").innerHTML = ourText;
    utterThis.text = ourText;
    synth.speak(utterThis)
    }
  xhttp.open("GET", "crypt.txt", true); //import from py
  xhttp.send();
}