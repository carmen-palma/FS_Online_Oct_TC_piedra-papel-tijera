const opciones = ["piedra", "papel", "tijera"];

let puntosUsuario = 0;
let puntosOrdenador = 0;

const botonesJugada = document.querySelectorAll('.boton-jugada');
const resultadosDiv = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');

botonesJugada.forEach(boton => {
    boton.addEventListener('click', () => {
        const jugadaUsuario = boton.getAttribute('data-jugada');
        const jugadaOrdenador = opciones[Math.floor(Math.random() * opciones.length)];
        const resultado = obtenerResultado(jugadaUsuario, jugadaOrdenador);

        mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado);

        actualizarPuntuacion(resultado);
    });
});

function obtenerResultado(usuario, ordenador) {
    if (usuario === ordenador) {
        return 'Empate';
    } else if ((usuario === 'piedra' && ordenador === 'tijera') ||
        (usuario === 'papel' && ordenador === 'piedra') ||
        (usuario === 'tijera' && ordenador === 'papel')) {
        return 'Ganaste';
    } else {
        return 'Perdiste';
    }
}

function mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado) {
    resultadosDiv.textContent = `Elegiste ${jugadaUsuario}. La máquina eligió ${jugadaOrdenador}. Resultado: ${resultado}`;
}

function actualizarPuntuacion(resultado) {
    if (resultado === 'Ganaste') {
        puntosUsuario++;
    } else if (resultado === 'Perdiste') {
        puntosOrdenador++;
    }
    contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
    contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
}