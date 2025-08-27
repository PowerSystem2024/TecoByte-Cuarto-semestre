// --- VARIABLES GLOBALES ---

// Variables de juego
let ataqueJugador; 
let ataqueEnemigo; 
let vidasJugador = 3;
let vidasEnemigo = 3;

// Elementos del DOM
let sectionContenedorReglas;
let sectionContenedorpersonaje;
let sectionContenedorataque;
let seccionMensajes;
let botonesIniciales;
let spanVidasJugador;
let spanVidasEnemigo;
let spanPersonajeJugador;
let spanPersonajeEnemigo;
let sectionReiniciar;

// Botones y controles
let botonReglas;
let botonPersonajeJugador;
let botonReiniciar;
let botonPunio;
let botonPatada;
let botonBarrida;

// Imágenes (aunque no se usan en el código JavaScript, es buena práctica mantenerlas globales si se van a usar)
let imagenZuko= new Image();
imagenZuko.src='imagenes/zuko.png';
imagenZuko.alt="Imagen Zuko";

let imagenKatara=new Image();
imagenKatara.src='imagenes/katara.png';
imagenKatara.alt='Imagen Katara';

let imagenAang=new Image();
imagenAang.src="imagenes/aang.png";
imagenAang.alt="Imagen Aang";

let imagenToph=new Image();
imagenToph.src="imagenes/toph.png";
imagenToph.alt="Imagen Toph";

let imagenSokka=new Image();
imagenSokka.src="imagenes/sokka.png"
imagenSokka.alt="Imagen sokka";

let imagenPatada=new Image();
imagenPatada.src="imagenes/patada.png";
imagenPatada.alt="Imagen patada";


let imagenBarrida=new Image();
imagenBarrida.src="imagenes/barrida.png";
imagenBarrida.alt="Imagen barrida";

let imagenPunio=new Image();
imagenPunio.src="/imagenes/punio.png";
imagenPunio.alt="Imagen punio";


// --- FUNCIONES DEL JUEGO ---

function iniciarJuego() {
    // Asignar elementos del DOM a las variables globales
    sectionContenedorReglas = document.getElementById("contenedor-reglas");
    sectionContenedorpersonaje = document.getElementById("seleccionar-personaje");
    sectionContenedorataque = document.getElementById("selecionar-ataque");
    seccionMensajes = document.getElementById("mensajes");
    sectionReiniciar = document.getElementById("reiniciar");
    spanVidasJugador = document.getElementById("vidas-jugador");
    spanVidasEnemigo = document.getElementById("vidas-enemigo");
    botonesIniciales = document.getElementById("botones-regla-jugar");
    spanPersonajeJugador = document.getElementById('personaje-jugador');
    spanPersonajeEnemigo = document.getElementById('personaje-enemigo');

    // Ocultar las secciones al inicio del juego
    sectionContenedorReglas.style.display="none";
    sectionContenedorpersonaje.style.display="block";
    sectionContenedorataque.style.display="none";
    sectionReiniciar.style.display = "none";
    botonesIniciales.style.display="flex";

    // Asignar botones y agregar event listeners
    botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
    
    botonReiniciar = document.getElementById("boton-reiniciar");
    botonReiniciar.addEventListener('click', reiniciarJuego);

    botonPunio = document.getElementById('boton-punio');
    botonPunio.addEventListener('click', ataquePunio);
    botonPatada = document.getElementById('boton-patada');
    botonPatada.addEventListener('click', ataquePatada);
    botonBarrida = document.getElementById('boton-barrida');
    botonBarrida.addEventListener('click', ataqueBarrida);

    // Iniciar el juego con las funciones iniciales
    botonVerReglas();
}

function botonVerReglas(){
    botonReglas=document.getElementById('reglas');
    botonReglas.addEventListener('click',verReglas);
}

function verReglas(){
    botonesIniciales.style.display="none";
    sectionContenedorReglas.style.display="block";
    volverInicio();
}

function volverInicio(){
    let botonVolverInicio=document.getElementById("volver-inicio");
    botonVolverInicio.addEventListener('click',iniciarJuego);
}

function seleccionarPersonajeJugador() {
    imagenZuko = document.getElementById('Zuko');
    imagenKatara = document.getElementById('Katara');
    imagenAang = document.getElementById('Aang');
    imagenToph = document.getElementById('Toph');
    imagenSokka = document.getElementById('Sokka');

    if (imagenZuko.checked) {
        spanPersonajeJugador.innerHTML = 'Zuko';
    } else if (imagenKatara.checked) {
        spanPersonajeJugador.innerHTML = 'Katara';
    } else if (imagenAang.checked) {
        spanPersonajeJugador.innerHTML = 'Aang';
    } else if (imagenToph.checked) {
        spanPersonajeJugador.innerHTML = 'Toph';
    } else if (imagenSokka.checked) {
        spanPersonajeJugador.innerHTML = 'Sokka';
    } else {
        alert("Por favor, selecciona un personaje antes de continuar.");
        return;
    }

    seleccionarPersonajecomputadora();
    sectionContenedorpersonaje.style.display="none";
    sectionContenedorataque.style.display="block";
}

function seleccionarPersonajecomputadora() {
    let personajes = ['Zuko', 'Katara', 'Aang', 'Toph', 'Sokka'];
    let personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];
    spanPersonajeEnemigo.innerHTML = personajeAleatorio;
}

function ataquePunio (){
    ataqueJugador = 'Puño';
    ataqueAleatorioEnemigo();
    combate();
}

function ataquePatada (){
    ataqueJugador = 'Patada';
    ataqueAleatorioEnemigo();
    combate();
}

function ataqueBarrida (){
    ataqueJugador = 'Barrida';
    ataqueAleatorioEnemigo();
    combate();
}

function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio (1,3);

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'Puño';
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'Patada';
    } else {
        ataqueEnemigo ='Barrida';
    }
}

function combate() {
    let resultado;

    if (ataqueJugador == ataqueEnemigo) {
        resultado = "Empate 😐";
    } else if (
        (ataqueJugador == "Puño" && ataqueEnemigo == "Barrida") ||
        (ataqueJugador == "Patada" && ataqueEnemigo == "Puño") ||
        (ataqueJugador == "Barrida" && ataqueEnemigo == "Patada")
    ) {
        resultado = "¡Ganaste esta ronda! 🎉🎉";
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        resultado = "Perdiste esta ronda 😢😢";
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }
    crearMensaje(resultado);
    revisarFinDelJuego();
}

function crearMensaje(resultado){
    seccionMensajes.innerHTML = ''; 
    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu personaje atacó con ' + ataqueJugador + '🆚 el personaje enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado;
    seccionMensajes.appendChild(parrafo);
}

function revisarFinDelJuego() {
    if (vidasEnemigo == 0) {
        seccionMensajes.innerHTML = ''
        mostrarMensajeFinal("🎉 ¡Ganaste el juego completo!🎉🎉🍾");
        deshabilitarBotonesAtaque();
        sectionReiniciar.style.display = 'block';
        sectionContenedorataque.style.display="none";
    } else if (vidasJugador == 0) {
        seccionMensajes.innerHTML = ''
        mostrarMensajeFinal("💀 Has perdido el juego... ¡Inténtalo de nuevo!😢😢");
        deshabilitarBotonesAtaque();
        sectionReiniciar.style.display = 'block';
        sectionContenedorataque.style.display="none";
    }
}

function mostrarMensajeFinal(mensaje) {
    seccionMensajes.innerHTML += `<p><strong>${mensaje}</strong></p>`;
}

function deshabilitarBotonesAtaque() {
    botonPunio.disabled = true;
    botonPatada.disabled = true;
    botonBarrida.disabled = true;
}

function reiniciarJuego(){
    location.reload();
}

window.addEventListener('load', iniciarJuego);