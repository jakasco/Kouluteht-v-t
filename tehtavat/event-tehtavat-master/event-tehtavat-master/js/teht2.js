const kuva = document.getElementById('kuva');

const p = document.querySelector('p');

const open = () => {
  p.style.display = "block";
}

const close = () => {
  p.style.display = "none";
}

kuva.addEventListener('mouseenter', open);
kuva.addEventListener('mouseleave', close);
