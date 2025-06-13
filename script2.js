let currentPage = 1;
    const totalPages = 12;

function openAlbum() {
  const cover = document.getElementById('cover');
  const navButtons = document.getElementById('navButtons');
  
  cover.style.transform = 'rotateY(-90deg)';
  cover.style.opacity = '0';
  
  setTimeout(() => {
    cover.style.display = 'none';
    navButtons.classList.remove('hidden'); 
  }, 1000);
}


    function closeAlbum() {
      const cover = document.getElementById('cover');
      cover.style.display = 'flex';
      setTimeout(() => {
        cover.style.opacity = '1';
        cover.style.transform = 'rotateY(0deg)';
      }, 10);
      document.getElementById(`page${currentPage}`).classList.remove('active');
      currentPage = 1;
      document.getElementById(`page${currentPage}`).classList.add('active');
    }

    function changePage(direction) {
      document.getElementById(`page${currentPage}`).classList.remove('active');
      currentPage += direction;
      if (currentPage < 1) currentPage = totalPages;
      if (currentPage > totalPages) currentPage = 1;
      document.getElementById(`page${currentPage}`).classList.add('active');
    }

function ajustarTamañoPantalla() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // También aseguramos el ancho si hiciera falta ajustes más adelante
  const vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}

window.addEventListener('resize', ajustarTamañoPantalla);
window.addEventListener('load', ajustarTamañoPantalla);
ajustarTamañoPantalla();



window.addEventListener('resize', ajustarAlturaViewport);



    setTimeout(function() {
  alert("Con mucho amor para ti mi niña ❤️✨");
}, 1500);
