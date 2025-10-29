import React from "react";

function AboutPage() {
  return (
    <div>
      <h1 className="text-center font-bold py-4 px-3 text-4xl">
        Tecnologías Utilizadas
      </h1>

      <h2 className="text-2xl py-4 px-2">
        Principales herramientas del proyecto:
      </h2>
      <ul className="list-disc pl-8 py-2">
        <li>PostgreSQL: Base de datos relacional para usuarios y tareas.</li>
        <li>Express: Framework de Node.js para el servidor y las API.</li>
        <li>React: Biblioteca para construir la interfaz de usuario.</li>
        <li>Node.js: Entorno para ejecutar el backend y la lógica del servidor.</li>
        <li>JWT: Sistema de autenticación segura con tokens.</li>
      </ul>

      <h2 className="text-2xl py-4 px-2">Configuración del Proyecto</h2>
      <ul className="list-disc pl-8 py-2">
        <li>Configura PostgreSQL y crea la base de datos.</li>
        <li>Implementa un servidor Express con rutas de autenticación y tareas.</li>
        <li>Conecta el servidor a la base de datos.</li>
        <li>Desarrolla el frontend con React y componentes reutilizables.</li>
        <li>Agrega autenticación con JWT y operaciones CRUD para tareas.</li>
      </ul>

      <h2 className="text-2xl py-4 px-2">
        Ventajas del Sistema
      </h2>
      <ul className="list-disc pl-8 py-2">
        <li>🔒 Seguridad: Solo usuarios autenticados acceden a sus datos.</li>
        <li>⚙️ Eficiencia: CRUD completo para gestionar tareas fácilmente.</li>
        <li>🎨 Personalización: Listas de tareas adaptadas a cada usuario.</li>
        <li>📚 Aprendizaje: Ideal para mejorar habilidades con el stack PERN.</li>
      </ul>

      <h2 className="text-2xl py-4 px-2">Conclusión</h2>
      <p className="py-2 px-2">
        Este proyecto PERN combina tecnologías modernas para crear una aplicación
        segura, eficiente y escalable. Una excelente base para futuros proyectos
        más avanzados.
      </p>
    </div>
  );
}

export default AboutPage;
