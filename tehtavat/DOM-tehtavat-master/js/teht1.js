let table = document.querySelector('table');

let tr = table.lastChild;

//lista kaikista tr sisällä olevista asioista
let trList = tr.getElementsByTagName("td");

let mina = ['Kasperi', 'M', 'None', 'Osoite'];

for(let i=0; i<trList.length; i++){

    trList[i].innerHTML = mina[i];
}
