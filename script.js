let timer;

function start() {
  let [h,m,s] = document.getElementById("t").value.split(":").map(Number);
  let total = h*3600 + m*60 + s;

  clearInterval(timer);
  timer = setInterval(() => {
    if (total <= 0) return clearInterval(timer);
    total--;
    let H = String(Math.floor(total/3600)).padStart(2,'0');
    let M = String(Math.floor(total%3600/60)).padStart(2,'0');
    let S = String(total%60).padStart(2,'0');
    document.getElementById("d").innerText = ${H}:${M}:${S};
  }, 1000);
}
