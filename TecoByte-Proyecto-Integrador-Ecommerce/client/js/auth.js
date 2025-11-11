// Esperamos a que todo el contenido del DOM (HTML) esté cargado
document.addEventListener("DOMContentLoaded", () => {
  
  // --- LÓGICA DE REGISTRO ---
  const registerForm = document.getElementById("register-form");
  
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault(); // Evitamos que el formulario recargue la página

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const messageEl = document.getElementById("message");

      messageEl.innerText = ""; // Limpiamos mensajes anteriores

      try {
        const response = await fetch("http://localhost:8080/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) { // Si el status es 200-299
          messageEl.innerText = data.message;
          messageEl.style.color = "green";
          // Esperamos 2 segundos y redirigimos al login
          setTimeout(() => {
            // CORREGIDO: Añadir /media/
            window.location.href = "/media/login.html";
          }, 2000);
        } else { // Si hay un error (status 400, 500...)
          messageEl.innerText = data.message || data.error;
          messageEl.style.color = "red";
        }
      } catch (error) {
        console.error("Error en el fetch de registro:", error);
        messageEl.innerText = "Error de conexión. Inténtalo de nuevo.";
        messageEl.style.color = "red";
      }
    });
  }

  // --- LÓGICA DE LOGIN ---
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const messageEl = document.getElementById("message");

      messageEl.innerText = ""; // Limpiamos mensajes

      try {
        const response = await fetch("http://localhost:8080/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          messageEl.innerText = data.message;
          messageEl.style.color = "green";
          // Esperamos 1 segundo y redirigimos al inicio (tienda)
          setTimeout(() => {
            // CORREGIDO: Usar "/" (raíz) que el server maneja
            window.location.href = "/";
          }, 1000);
        } else {
          messageEl.innerText = data.message || data.error;
          messageEl.style.color = "red";
        }
      } catch (error) {
        console.error("Error en el fetch de login:", error);
        messageEl.innerText = "Error de conexión. Inténtalo de nuevo.";
        messageEl.style.color = "red";
      }
    });
  }
});