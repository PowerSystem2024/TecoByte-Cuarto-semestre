# Proyecto Final - E-Commerce Funcional

## 🚀 Sobre este Proyecto

Este repositorio contiene nuestro proyecto final para la **Tecnicatura en Programación**. El objetivo fue construir una aplicación web de e-commerce completa y funcional, aplicando los conocimientos de stack MERN (MongoDB, Express, React y Node.js), aunque en este caso, el frontend se desarrolló con **JavaScript vainilla** para demostrar un profundo manejo del DOM.

Como grupo, estamos orgullosos de haber construido un proyecto desde cero que no solo es una "maqueta", sino que implementa lógica de negocio real, como un sistema de autenticación seguro y una pasarela de pagos funcional.

## 📝 Puntos Clave y Funcionalidades Implementadas

Este proyecto va más allá de un simple CRUD. Nos enfocamos en integrar múltiples tecnologías para crear una experiencia de usuario coherente y segura:

### 1. Arquitectura Full-Stack (Cliente-Servidor)
* **Backend:** Construimos un servidor robusto con **Node.js** y **Express** que gestiona toda la lógica de negocio, las rutas de la API y la comunicación con la base de datos.
* **Frontend:** Desarrollado íntegramente con **HTML, CSS y JavaScript vainilla (vanilla JS)**. Todo el dinamismo del carrito y la renderización de productos se maneja a través de la manipulación directa del DOM.

### 2. Integración de Pagos Reales con Mercado Pago
* Implementamos el **SDK de Mercado Pago** en nuestro backend.
* El servidor genera una **"preferencia de pago"** con el total del carrito del usuario.
* El frontend renderiza el botón de checkout que redirige a la pasarela de Mercado Pago.
* Incluye **redirección automática (`auto_return`)** a una página de `feedback` (éxito, pendiente o fallo) después de completarse el pago.

### 3. Sistema de Autenticación y Seguridad
* **Base de Datos NoSQL:** Utilizamos **MongoDB** (con **Mongoose** como ODM) para almacenar todos los registros de usuarios.
* **Hashing de Contraseñas:** ¡La seguridad es clave! No guardamos contraseñas en texto plano. Implementamos **`bcrypt.js`** para hashear y verificar las contraseñas de forma segura.
* **Gestión de Sesiones:** Usamos **`express-session`** en el servidor para que un usuario permanezca logueado y su estado persista entre peticiones.
* **Rutas Protegidas:** El endpoint para crear la preferencia de pago está **protegido**. Un usuario **debe** estar logueado para poder proceder al pago.

### 4. Carrito de Compras Dinámico
* Toda la lógica del carrito (añadir, sumar, restar y eliminar productos) está manejada en el frontend con JavaScript.
* El ícono del carrito se actualiza con un contador en tiempo real.
* El modal del carrito se genera y actualiza dinámicamente, recalculando los totales al instante.

## 👨‍💻 Integrantes del Grupo

* ENRIQUEZ LEANDRO
* FAGUEIRO LUCIANA
* BATALLÓN COSTA JUAN PABLO
* JACOB ELÍAS DAVID
* LOPEZ ROBERTO JOSE
* SALINAS AGUSTÍN
* TOMIO MAXIMILIANO DAVID
* ORTIZ EDUARDO JAVIER
