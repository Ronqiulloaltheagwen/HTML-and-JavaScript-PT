function start() {
  let t = (+h.value||0)*3600 + (+m.value||0)*60 + (+s.value||0);
  let c = setInterval(()=>{
    if(t<=0){
      clearInterval(c);
      new Audio("https://www.soundjay.com/buttons/beep-07.mp3").play();
      alert("Time's up!");
      return;
    }
    t--;
    let H = Math.floor(t/3600),
        M = Math.floor((t%3600)/60),
        S = t%60;
    d.innerText = ${String(H).padStart(2,'0')}:${String(M).padStart(2,'0')}:${String(S).padStart(2,'0')};
  },1000);
}
