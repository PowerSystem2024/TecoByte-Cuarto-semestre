
// Imágenes (aunque no se usan en el código JavaScript, es buena práctica mantenerlas globales si se van a usar)
// let imagenZuko= new Image();
// imagenZuko.src='imagenes/zuko.png';
// imagenZuko.alt="Imagen Zuko";

// let imagenKatara=new Image();
// imagenKatara.src='imagenes/katara.png';
// imagenKatara.alt='Imagen Katara';

// let imagenAang=new Image();
// imagenAang.src="imagenes/aang.png";
// imagenAang.alt="Imagen Aang";

// let imagenToph=new Image();
// imagenToph.src="imagenes/toph.png";
// imagenToph.alt="Imagen Toph";

// let imagenSokka=new Image();
// imagenSokka.src="imagenes/sokka.png"
// imagenSokka.alt="Imagen sokka";

// let imagenPatada=new Image();
// imagenPatada.src="imagenes/patada.png";
// imagenPatada.alt="Imagen patada";


// let imagenBarrida=new Image();
// imagenBarrida.src="imagenes/barrida.png";
// imagenBarrida.alt="Imagen barrida";

// let imagenPunio=new Image();
// imagenPunio.src="/imagenes/punio.png";
// imagenPunio.alt="Imagen punio";




// --- CLASES ---
// Clase Personaje, que sirve como molde para crear a cada personaje.

class Personaje {
    constructor(nombre, vidas, ataques) {
        this.nombre = nombre;
        this.vidas = vidas;
        this.ataques = ataques;
    }
}

// --- VARIABLES GLOBALES Y OBJETOS DEL JUEGO ---
let personajeJugador;
let personajeEnemigo;
let ataqueJugador;
let ataqueEnemigo;

// Array de objetos Personaje, creados a partir de la clase.
const personajes = [
    new Personaje('Zuko', 3, ['Puño', 'Patada', 'Barrida']),
    new Personaje('Katara', 3, ['Puño', 'Patada', 'Barrida']),
    new Personaje('Aang', 3, ['Puño', 'Patada', 'Barrida']),
    new Personaje('Toph', 3, ['Puño', 'Patada', 'Barrida']),
    new Personaje('Sokka', 3, ['Puño', 'Patada', 'Barrida']),
    new Personaje('Goku', 3, ['Puño', 'Patada', 'Barrida'])
];

// Elementos del DOM
const sectionContenedorJuego = document.getElementById("contenedor-juego");
const sectionContenedorReglas = document.getElementById("contenedor-reglas");
const sectionContenedorpersonaje = document.getElementById("seleccionar-personaje");
const sectionContenedorataque = document.getElementById("selecionar-ataque");
const seccionMensajes = document.getElementById("mensajes");
const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
const spanPersonajeJugador = document.getElementById('personaje-jugador');
const spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
const sectionReiniciar = document.getElementById("reiniciar");

// Botones y controles
const botonesIniciales = document.getElementById("botones-regla-jugar");
const botonJugar = document.getElementById("botonJugar");
const botonReglas = document.getElementById('reglas');
const botonPersonajeJugador = document.getElementById("boton-personaje");
const botonReiniciar = document.getElementById("boton-reiniciar");
const botonVolverInicio = document.getElementById("volver-inicio");
const botonPunio = document.getElementById('boton-punio');
const botonPatada = document.getElementById('boton-patada');
const botonBarrida = document.getElementById('boton-barrida');

// --- FUNCIONES DEL JUEGO ---

function iniciarJuego() {
    
    sectionContenedorReglas.style.display="none"
    sectionContenedorReglas.style.display = "none";
    sectionContenedorpersonaje.style.display = "none";
    sectionContenedorataque.style.display = "none";
    sectionReiniciar.style.display = "none";
    botonesIniciales.style.display = "flex";
    seccionMensajes.style.display = "none";

    // Asignar event listeners
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
    botonReiniciar.addEventListener('click', reiniciarJuego);
    botonPunio.addEventListener('click', ataquePunio);
    botonPatada.addEventListener('click', ataquePatada);
    botonBarrida.addEventListener('click', ataqueBarrida);
    botonReglas.addEventListener('click', verReglas);
    botonVolverInicio.addEventListener('click', volverInicio);
    comenzarJuego();
    botonVerReglas();
}
function verJuego() {
    sectionContenedorpersonaje.style.display = "block";
    botonesIniciales.style.display = "none";
    botonJugar.style.display ="none"; 
}
function comenzarJuego (){
    botonJugar.addEventListener("click", verJuego);
}
 

function verReglas() {

    sectionContenedorReglas.style.display = "block";
}

function botonVerReglas(){
    // botonReglas=document.getElementById('reglas');
    botonReglas.addEventListener('click',verReglas);
}

function ocultarReglas(){
    sectionContenedorReglas.style.display = "none";
}

function volverInicio() {
      botonVolverInicio.addEventListener('click', ocultarReglas);
}

function seleccionarPersonajeJugador() {
    const radioZuko = document.getElementById('Zuko');
    const radioKatara = document.getElementById('Katara');
    const radioAang = document.getElementById('Aang');
    const radioToph = document.getElementById('Toph');
    const radioSokka = document.getElementById('Sokka');
    const radioGoku = document.getElementById('Goku');

    if (radioZuko.checked) {
        personajeJugador = personajes.find(p => p.nombre === 'Zuko');
    } else if (radioKatara.checked) {
        personajeJugador = personajes.find(p => p.nombre === 'Katara');
    } else if (radioAang.checked) {
        personajeJugador = personajes.find(p => p.nombre === 'Aang');
    } else if (radioToph.checked) {
        personajeJugador = personajes.find(p => p.nombre === 'Toph');
    } else if (radioSokka.checked) {
        personajeJugador = personajes.find(p => p.nombre === 'Sokka');
    } else if (radioGoku.checked) {
        personajeJugador = personajes.find(p => p.nombre === 'Goku');
    } else {
        alert("Por favor, selecciona un personaje antes de continuar.");
        return;
    }

    spanPersonajeJugador.innerHTML = personajeJugador.nombre;
    spanVidasJugador.innerHTML = personajeJugador.vidas;

    seleccionarPersonajecomputadora();
    sectionContenedorpersonaje.style.display = "none";
    sectionContenedorataque.style.display = "block";
}

function seleccionarPersonajecomputadora() {
    const personajeAleatorio = Math.floor(Math.random() * personajes.length);
    personajeEnemigo = personajes[personajeAleatorio];

    spanPersonajeEnemigo.innerHTML = personajeEnemigo.nombre;
    spanVidasEnemigo.innerHTML = personajeEnemigo.vidas;
}

function ataquePunio() {
    ataqueJugador = 'Puño';
    ataqueAleatorioEnemigo();
    combate();
}

function ataquePatada() {
    ataqueJugador = 'Patada';
    ataqueAleatorioEnemigo();
    combate();
}

function ataqueBarrida() {
    ataqueJugador = 'Barrida';
    ataqueAleatorioEnemigo();
    combate();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = Math.floor(Math.random() * personajeEnemigo.ataques.length);
    ataqueEnemigo = personajeEnemigo.ataques[ataqueAleatorio];
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
        personajeEnemigo.vidas--;
        spanVidasEnemigo.innerHTML = personajeEnemigo.vidas;
    } else {
        resultado = "Perdiste esta ronda 😢😢";
        personajeJugador.vidas--;
        spanVidasJugador.innerHTML = personajeJugador.vidas;
    }
    crearMensaje(resultado);
    revisarFinDelJuego();
}

function crearMensaje(resultado) {
    seccionMensajes.style.display = "block";
    seccionMensajes.innerHTML = '';
    const parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu personaje atacó con ' + ataqueJugador + ' 🆚 el personaje enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado;
    seccionMensajes.appendChild(parrafo);
}

function revisarFinDelJuego() {
    if (personajeEnemigo.vidas == 0) {
        seccionMensajes.innerHTML = '';
        mostrarMensajeFinal("🎉 ¡Ganaste el juego completo! 🎉🍾");
        deshabilitarBotonesAtaque();
        sectionReiniciar.style.display = 'block';
        sectionContenedorataque.style.display = "none";
    } else if (personajeJugador.vidas == 0) {
        seccionMensajes.innerHTML = '';
        mostrarMensajeFinal("💀 Has perdido el juego... ¡Inténtalo de nuevo! 😢😢");
        deshabilitarBotonesAtaque();
        sectionReiniciar.style.display = 'block';
        sectionContenedorataque.style.display = "none";
    }
}

function mostrarMensajeFinal(mensaje) {
    const parrafoFinal = document.createElement('p');
    parrafoFinal.innerHTML = `<strong>${mensaje}</strong>`;
    seccionMensajes.appendChild(parrafoFinal);
}

function deshabilitarBotonesAtaque() {
    botonPunio.disabled = true;
    botonPatada.disabled = true;
    botonBarrida.disabled = true;
}

function reiniciarJuego() {
    location.reload();
}

window.addEventListener('load', iniciarJuego);