function crearCorazon() {
  const corazon = document.createElement('div');
  corazon.classList.add('corazon');
  corazon.innerText = '❤️';

  corazon.style.left = Math.random() * 100 + 'vw';
  corazon.style.animationDuration = (2 + Math.random() * 3) + 's';
  corazon.style.fontSize = (12 + Math.random() * 24) + 'px';

  document.querySelector('.corazones-container').appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 5000);
}

setInterval(crearCorazon, 300);
