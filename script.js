function startTimer(){

let hours = document.getElementById("hours").value || 0;
let minutes = document.getElementById("minutes").value || 0;
let seconds = document.getElementById("seconds").value || 0;

let total = (hours*3600) + (minutes*60) + Number(seconds);

let countdown = setInterval(function(){

if(total <= 0){
clearInterval(countdown);

let audio = new Audio("https://www.soundjay.com/buttons/beep-07.mp3");
audio.play();

alert("Time is up!");
return;
}

total--;

let h = Math.floor(total/3600);
let m = Math.floor((total%3600)/60);
let s = total%60;

document.getElementById("display").innerHTML =
String(h).padStart(2,'0') + ":" +
String(m).padStart(2,'0') + ":" +
String(s).padStart(2,'0');

},1000);

}
