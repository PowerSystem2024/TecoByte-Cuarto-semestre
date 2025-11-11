// Este script se ejecuta en todas las páginas (index.html, etc.)
document.addEventListener("DOMContentLoaded", () => {
  const authContainer = document.getElementById("auth-container");

  // Verificar el estado de la sesión al cargar la página
  fetch("http://localhost:8080/api/session-status")
    .then(res => res.json())
    .then(data => {
      if (data.isLoggedIn) {
        // Usuario está logueado
        authContainer.innerHTML = `
          <span>Hola, ${data.email}</span>
          |
          <button id="logout-btn">Cerrar Sesión</button>
        `;

        // Añadir evento al botón de logout
        document.getElementById("logout-btn").addEventListener("click", () => {
          fetch("http://localhost:8080/api/logout", { method: "POST" })
            .then(res => res.json())
            .then(() => {
              // CORREGIDO: Añadir /media/
              window.location.href = "/media/login.html";
            });
        });

      } else {
        // Usuario NO está logueado
        // CORREGIDO: Añadir /media/ a los enlaces
        authContainer.innerHTML = `
          <a href="/media/login.html">Iniciar Sesión</a>
          |
          <a href="/media/register.html">Registrarse</a>
        `;
      }
    })
    .catch(err => {
      console.error("Error al verificar sesión:", err);
      // CORREGIDO: Añadir /media/ al enlace de fallback
      authContainer.innerHTML = '<a href="/media/login.html">Iniciar Sesión</a>';
    });
});