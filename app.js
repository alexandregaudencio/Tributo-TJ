// const timer = ;

var trilha = new Audio("./song/ipanema.mp3");
window.onload = function() {
    PlaySong();
    StartTimer();
}


function PlaySong() {
    trilha.play();

}

function AddZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

function StartTimer() {
    setInterval(() => {
        var d = new Date();
        var h = AddZero(d.getUTCHours());
        var m = AddZero(d.getUTCMinutes());
        var s = AddZero(d.getUTCSeconds());
        document.querySelector("#timer").innerHTML = h + ":" + m + ":" + s;
        console.log(h);
        
    }, 1000);
}



