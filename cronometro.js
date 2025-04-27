// Obtiene la hora actual en Perú (UTC-5)
function obtenerHoraPeru() {
  const ahoraUTC = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
  return new Date(ahoraUTC - (5 * 60 * 60 * 1000));
}

// Calcula la fecha de hoy a las 18:00 (hora Perú)
function obtenerFechaObjetivo() {
  const ahora = obtenerHoraPeru();
  const objetivo = new Date(ahora);
  objetivo.setHours(19, 0, 0, 0); // HOY a las 18:00
  return objetivo;
}

const fechaFinal = new Date(obtenerHoraPeru().getTime() + 10000); // 10 segundos

function actualizarCuentaRegresiva() {
  const ahora = obtenerHoraPeru();
  const diferencia = fechaFinal - ahora;

  if (diferencia <= 0) {
    document.getElementById("countdown").innerText = "Llego el momento <3";
    clearInterval(intervalo);
    mostrarCartaRomantica();
    return;
  }

  const horas = Math.floor(diferencia / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  const texto =
    `${horas.toString().padStart(2, '0')}:` +
    `${minutos.toString().padStart(2, '0')}:` +
    `${segundos.toString().padStart(2, '0')}`;

  document.getElementById("countdown").innerText = texto;
}

function mostrarCartaRomantica() {
  document.getElementById("carta-container").classList.remove("oculto");
}

const intervalo = setInterval(actualizarCuentaRegresiva, 1000);
actualizarCuentaRegresiva();

setTimeout(function() {
  alert("Te quiero mucho mi niña, solo puedo decir que vayas juntando las notitas jeje.<3.");
}, 10000);
