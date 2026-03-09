let timer;

function start(){
let time = document.getElementById("t").value;
let parts = time.split(":");

let total = parts[0]*3600 + parts[1]*60 + Number(parts[2]);

clearInterval(timer);

timer = setInterval(function(){

if(total <= 0){
clearInterval(timer);
return;
}

total--;

let h = String(Math.floor(total/3600)).padStart(2,'0');
let m = String(Math.floor(total%3600/60)).padStart(2,'0');
let s = String(total%60).padStart(2,'0');

document.getElementById("d").innerText = h + ":" + m + ":" + s;

},1000);
}
