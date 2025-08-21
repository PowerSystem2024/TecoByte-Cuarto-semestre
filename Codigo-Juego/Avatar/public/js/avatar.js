

let ataqueJugador  //variable global
let ataqueEnemigo   //Variable global

let vidasJugador = 3;
let vidasEnemigo = 3;


let botonReglas;
let botonJugar;

let seccionMensajes;
let botonesIniciales;

let seccióntuataque; 

function iniciarJuego() {
    sectionContenedorReglas=document.getElementById("contenedor-reglas");
    sectionContenedorReglas.style.display="none";

     sectionContenedorpersonaje=document.getElementById("seleccionar-personaje");
    sectionContenedorpersonaje.style.display="block";

    sectionContenedorataque=document.getElementById("selecionar-ataque");
    sectionContenedorataque.style.display="none";
    seccionMensajes = document.getElementById("mensajes");
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none";
    
    let botonReiniciar = document.getElementById("boton-reiniciar");
    botonReiniciar.addEventListener('click', reiniciarJuego)
    // botonPersonajeJugador.addEventListener("click", seleccionarPersonajecomputadora);
    let botonPunio = document.getElementById('boton-punio')
    botonPunio.addEventListener('click', ataquePunio)
    let botonPatada = document.getElementById('boton-patada')
    botonPatada.addEventListener('click', ataquePatada)
    let botonBarrida = document.getElementById('boton-barrida')
    botonBarrida.addEventListener('click', ataqueBarrida)
    spanVidasJugador = document.getElementById("vidas-jugador");
    spanVidasEnemigo = document.getElementById("vidas-enemigo");

    botonesIniciales=document.getElementById("botones-regla-jugar");
    botonesIniciales.style.display="flex";

    botonVerReglas();
    botonJuego();
    
 

}
function botonVerReglas(){

    botonReglas=document.getElementById('reglas');
    botonReglas.addEventListener('click',verReglas);
    

}

function verReglas(){

    botonesIniciales.style.display="none";
   // sectionContenedorReglas=document.getElementById("contenedor-reglas");
    sectionContenedorReglas.style.display="block";
    volverInicio();
}


function volverInicio(){
    let botonVolverInicio=document.getElementById("volver-inicio");
    botonVolverInicio.addEventListener('click',iniciarJuego);
}


function seleccionarPersonajeJugador() {
    let inputZuko = document.getElementById('Zuko');
    let inputKatara = document.getElementById('Katara');
    let inputAang = document.getElementById('Aang');
    let inputToph = document.getElementById('Toph');
    let inputSokka = document.getElementById('Sokka');
    let spanPersonajeJugador = document.getElementById('personaje-jugador');

    sectionContenedorReglas.style.display="none";
    sectionContenedorataque.style.display="block";
    if (inputZuko.checked) {
        spanPersonajeJugador.innerHTML = 'Zuko';
    } else if (inputKatara.checked) {
        spanPersonajeJugador.innerHTML = 'Katara';
    } else if (inputAang.checked) {
        spanPersonajeJugador.innerHTML = 'Aang';
    } else if (inputToph.checked) {
        spanPersonajeJugador.innerHTML = 'Toph';
    } else if (inputSokka.checked) {
        spanPersonajeJugador.innerHTML = 'Sokka';
    } else {
        alert("Por favor, selecciona un personaje antes de continuar.");
        return;
    }

seleccionarPersonajecomputadora() 

 sectionContenedorpersonaje.style.display="none";
}

function seleccionarPersonajecomputadora() {
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
    let personajes = ['Zuko', 'Katara', 'Aang', 'Toph', 'Sokka'];
    let personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];
    spanPersonajeEnemigo.innerHTML = personajeAleatorio;
}

function ataquePunio (){  // modificamos la variable global 
    ataqueJugador='Punio'
    ataqueAleatorioEnemigo()
    combate()
}

function ataquePatada (){
    ataqueJugador='Patada'
    ataqueAleatorioEnemigo()
    combate()
}

function ataqueBarrida (){
    ataqueJugador='Barrida'
    ataqueAleatorioEnemigo()
    combate()
}

function aleatorio (min, max){  // a modo de ejemplo agregamos la funcion por separado proque es lo mismo que seleccionarpersonaje
    return Math.floor(Math.random() * (max - min +1) + min);
}

function ataqueAleatorioEnemigo(){ // ahora ocupando la variable global nueva le decimos
    let ataqueAleatorio = aleatorio (1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'Punio'
    } else if (ataqueAleatorio ==2){
        ataqueEnemigo = 'Patada'
    }else {
        ataqueEnemigo ='Barrida'
    }
    

}

//Clase 18/06
function combate() {        // modificamos la vida 
    let resultado;

    if (ataqueJugador == ataqueEnemigo) {
        resultado = "Empate 😐";
    } else if (
        (ataqueJugador == "Punio" && ataqueEnemigo == "Barrida") ||
        (ataqueJugador == "Patada" && ataqueEnemigo == "Punio") ||
        (ataqueJugador == "Barrida" && ataqueEnemigo == "Patada")
    ) {
        resultado = "¡Ganaste esta ronda! 🎉";
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        resultado = "Perdiste esta ronda 😢";
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }
    crearMensaje(resultado)
    
    
    revisarFinDelJuego();
}

function crearMensaje(resultado){
    // Limpia completamente la sección de mensajes antes de añadir el nuevo.
    seccionMensajes.innerHTML = ''; 

    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu personaje atacó con ' + ataqueJugador + '🆚 el personaje enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado;
    seccionMensajes.appendChild(parrafo);
}


function revisarFinDelJuego() { // funcion para controlar las vidas ver si son distintos de 0
    let sectionReiniciar = document.getElementById("reiniciar")

    if (vidasEnemigo == 0) {
        mostrarMensajeFinal("🎉 ¡Ganaste el juego completo! 🍾");
        deshabilitarBotonesAtaque();
        sectionReiniciar.style.display = 'block';
    } else if (vidasJugador == 0) {
        mostrarMensajeFinal("💀 Has perdido el juego... ¡Inténtalo de nuevo!");
        deshabilitarBotonesAtaque();
        sectionReiniciar.style.display = 'block';
    }
}

function mostrarMensajeFinal(mensaje) {
    const seccionMensajes = document.getElementById("mensajes");
    seccionMensajes.innerHTML += `<p><strong>${mensaje}</strong></p>`;
}


function deshabilitarBotonesAtaque() {
    document.getElementById('boton-punio').disabled = true;
    document.getElementById('boton-patada').disabled = true;
    document.getElementById('boton-barrida').disabled = true;
}


// 

function reiniciarJuego(){
    //Vamos a usar un nuevo metodo llamado "location.reload()" para recargar la pagina
    location.reload()
}

window.addEventListener('load', iniciarJuego);
