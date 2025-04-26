const btnNo = document.getElementById('no');
const btnSi = document.getElementById('si');

btnNo.addEventListener('mouseover', () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const btnRect = btnNo.getBoundingClientRect();

  const maxX = windowWidth - btnRect.width;
  const maxY = windowHeight - btnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  btnNo.style.transition = 'all 0.3s ease, transform 0.3s ease';
  btnNo.style.position = 'fixed'; // que se mueva fijo en pantalla
  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
  btnNo.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
});

// Botón "Sí"
btnSi.addEventListener('click', () => {
  btnSi.style.transition = 'all 0.5s ease';
  btnSi.style.transform = 'scale(1.5) rotate(10deg)'; // animación
  setTimeout(() => {
    window.location.href = 'si.html'; // Redirige a si.html
  }, 500); // espera que termine la animación (0.5s)
});

setTimeout(function() {
  alert("AVER SI LE DAS A NO PSSS GAAAAAAA XD");
}, 7000);
