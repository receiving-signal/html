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

function startJS() { //on button click begin
  playSound("static"); //background static
  setInterval(update, 5000); //fetch txt + read it every 5 seconds
}

function update() {
  const xhttp = new XMLHttpRequest(); //import from py
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
  xhttp.open("GET", "crypt.txt", true);
  xhttp.send();
}

function playSound(name) {
  document.getElementById(name).play();
} 