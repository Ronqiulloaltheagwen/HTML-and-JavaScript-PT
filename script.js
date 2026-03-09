function startTimer(){

let h = Number(document.getElementById("hours").value) || 0;
let m = Number(document.getElementById("minutes").value) || 0;
let s = Number(document.getElementById("seconds").value) || 0;

let total = h*3600 + m*60 + s;

let timer = setInterval(function(){

if(total <= 0){
clearInterval(timer);

let sound = new Audio("https://www.soundjay.com/buttons/beep-07.mp3");
sound.play();

alert("Time's up!");
return;
}

total--;

let hh = Math.floor(total/3600);
let mm = Math.floor((total%3600)/60);
let ss = total%60;

document.getElementById("display").innerText =
String(hh).padStart(2,'0') + ":" +
String(mm).padStart(2,'0') + ":" +
String(ss).padStart(2,'0');

},1000);

}
