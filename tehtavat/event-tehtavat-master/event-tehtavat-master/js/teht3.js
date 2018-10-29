const kentta = document.getElementById('num1');

const nappi = document.getElementById('laske');

const vastaus = document.getElementById('vastaus');

nappi.addEventListener('click', laske2);

function laske2(){
  let lasku = kentta.value;

  let tulos = 0;
  //erotellaan numerot laskumerkeistä
  if(lasku.includes("+")){

    lasku = lasku.split("+");

    tulos =  +lasku[0] + +lasku[1];

  }else if(lasku.includes("-")){

      lasku = lasku.split("-");

      tulos =  +lasku[0] - +lasku[1];

  }else if(lasku.includes("*")){

    lasku = lasku.split("*");

    tulos =  +lasku[0] * +lasku[1];

  }else if(lasku.includes("/")){

    lasku = lasku.split("/");

    tulos =  +lasku[0] / +lasku[1];
  }

  vastaus.innerHTML = "Vastaus: "+tulos;

}
