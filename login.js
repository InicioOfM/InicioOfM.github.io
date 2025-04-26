// Modo claro/oscuro
document.getElementById('modo-toggle').addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');
  });
  
  // Validación de login
  document.getElementById('login-formulario').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
  
    const usuarioCorrecto = "Myshell";
    const contrasenaCorrecta = "VEINTE&IX";
  
    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
      window.location.href = "pregunta.html";
    } else {
      alert("Usuario o contraseña incorrecto bonita. Intenta de nuevo MUAJAJAJA");
      
    }
  });

  setTimeout(function() {
    alert("Pista: usa las notitas amor");
  }, 7000);
  
  
