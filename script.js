'speechSynthesis' in window ? console.log("Web Speech API supported!") : console.log("Web Speech API not supported :-(");
const synth = window.speechSynthesis;
let ourText = "";
const utterThis = new SpeechSynthesisUtterance(ourText);
utterThis.pitch = 0;
for (const voice of synth.getVoices()) {
  if (voice.name === "Microsoft James - English (Australia) (en-AU)") {
    utterThis.voice = voice;
  }
}
audioStatic = new Audio('static.wav');
audioStatic.loop = true;

audioStatic.play();
setInterval(update, 5000);

function update() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    ourText = this.responseText;
    document.getElementById("demo").innerHTML = ourText;
    if (ourText == ".") {
      playSound("tone");
    } else {
      utterThis.text = ourText;
      synth.speak(utterThis);
    }
  }
  xhttp.open("GET", "crypt.txt", true); //import from py
  xhttp.send();
}

function playSound(name) {
  document.getElementById(name).play();
} 