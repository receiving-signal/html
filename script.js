setInterval(function () {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      }
    xhttp.open("GET", "crypt.txt", true); //import from py
    xhttp.send();
  }, 5000);