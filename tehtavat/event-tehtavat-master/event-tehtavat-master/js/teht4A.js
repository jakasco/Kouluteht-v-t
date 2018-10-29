const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];

const div = document.getElementById('lista');
const div2 = document.getElementsByClassName("kuva")[0];
div.innerHTML += "<ul id='uli'></ul>"
ul = document.getElementById('uli');

div.append(ul);

//laita kuvat listaan
for(let i=0; i<pics.length; i++){
console.log(pics[i].thumb);
let li = document.createElement("li");
li.innerHTML = "<img src="+pics[i].thumb+" onclick='avaa("+i+")'>";
ul.append(li);
}

function avaa(num){
  div2.style.visiblity = "visible";
  div2.style.width = "500px;";
  div2.style.height = "500px;";
  let img = document.getElementById('kuva2');
  console.log(img);
  img.innerHTML = "<img src='"+pics[num].big+"'>";

}
