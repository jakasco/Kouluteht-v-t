let kello = document.getElementById("kello");


function updateTime(){
  let d = new Date();

  //24h ominaisuudet
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();

  //nollat eteen
  if(s<10){
    s = "0"+s;
  }
  if(m<10){
    s = "0"+s;
  }
  if(h<10){
    s = "0"+s;
  }

  kello.innerHTML = h+":"+m+":"+s;
}

const interval = setInterval(updateTime, 1000);
