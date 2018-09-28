window.onload = function () {
    setLiveBanner();
}

function setLiveBanner() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var json = JSON.parse(this.responseText);
            var text = document.getElementById("live-text");
            
            if (json.online == true) {
                text.style.backgroundColor = "red";
                text.innerHTML = "I'm live on Picarto, click here to watch!";
            } else {
                text.style.backgroundColor = "#1da456";
                text.innerHTML = "Come visit my stream on Picarto?";
            }
        }
    };
    xhttp.open("GET", "https://api.picarto.tv/v1/channel/name/Cubdrawer", true);
    xhttp.send(null);
}