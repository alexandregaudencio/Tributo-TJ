const title = document.querySelector("#title");
const legend = document.querySelector("#legend");
const bgBeach = document.querySelector("#issue");

var trilha = new Audio("./song/ipanema.mp3");

var d = new Date();
var h = AddZero(d.getUTCHours());
var m = AddZero(d.getUTCMinutes());
var s = AddZero(d.getUTCSeconds());




function PlaySong() {
    trilha.play();

}

function AddZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

//não pega fuso horário do brasil
function StartTimer() {
    setInterval(() => {
        document.querySelector("#timer").innerHTML 
        = h + ":" + m + ":" + s; 
    }, 1000);
}


//Não funciona
function checkDayTime() {
    if(h >= 6 && h < 16) {
        title.style.color = "black";
        legend.style.color = "black";   
        bgBeach.style.backgroundImage = "url('Tropical-day.gif')";
    } else if(h >= 16 && h < 19) {
        title.style.color = "white";
        legend.style.color = "white"; 
        bgBeach.style.backgroundImage = "url('./imgs/Tropical-sunset.gif')";
    } else {
        title.style.color = "white";
        legend.style.color = "white"; 
        bgBeach.style.backgroundImage = "url('./imgs/Tropical-night.gif')";
    }
}


window.onload = function() {
    PlaySong();
    StartTimer();
    checkDayTime();
}


