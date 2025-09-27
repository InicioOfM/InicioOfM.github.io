// === CRONÓMETRO ===
// Definir la fecha objetivo SOLO UNA VEZ
const now = new Date();

// Para pruebas: redirige al minuto siguiente



 const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 58, 0, 0);

const elH = document.getElementById('hours');
const elM = document.getElementById('minutes');
const elS = document.getElementById('seconds');
const status = document.getElementById('status');

function pad(n) {
  return String(n).padStart(2, '0');
}

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    // Redirigir al terminar
    window.location.replace("cumple.html");
    return;
  }

  const totalSec = Math.floor(diff / 1000);
  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;

  elH.textContent = pad(hours);
  elM.textContent = pad(minutes);
  elS.textContent = pad(seconds);
  status.textContent =
    'Faltan ' +
    (hours > 0 ? hours + 'h ' : '') +
    minutes + 'm ' + seconds + 's';
}

updateCountdown();
setInterval(updateCountdown, 1000);

// === CARRUSEL ===
const slides = Array.from(document.querySelectorAll('.slide'));
let current = 0,
  autoplay = true,
  slideTimer;

function showSlide(idx) {
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === idx);
    const v = s.querySelector('video');
    if (v) {
      if (i === idx && autoplay) {
        v.play().catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    }
  });
  current = idx;
}

function nextSlide() {
  showSlide((current + 1) % slides.length);
}

function startAutoplay() {
  stopAutoplay();
  function schedule() {
    const s = slides[current];
    const type = s.getAttribute('data-type');
    const duration = type === 'video' ? 8000 : 6000;
    slideTimer = setTimeout(() => {
      nextSlide();
      schedule();
    }, duration);
  }
  schedule();
}

function stopAutoplay() {
  if (slideTimer) clearTimeout(slideTimer);
  slideTimer = null;
}

showSlide(0);
startAutoplay();

document.getElementById('pause').addEventListener('click', () => {
  autoplay = !autoplay;
  document.getElementById('pause').textContent = autoplay
    ? "Pausar fondos"
    : "Reanudar fondos";
  if (autoplay) startAutoplay();
  else stopAutoplay();

  const v = slides[current].querySelector('video');
  if (v) {
    if (!autoplay) v.pause();
    else v.play().catch(() => {});
  }
});

document.getElementById('next').addEventListener('click', () => {
  nextSlide();
  if (autoplay) {
    stopAutoplay();
    startAutoplay();
  }
});

