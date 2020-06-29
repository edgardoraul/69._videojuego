// Variables generales
var JUGADOR = document.getElementById('jugador');
var AREA = document.getElementById('area');
var tiempo = 30;
var puntos = 0;
var vidas = 3;
var nivel = 1;
var altura = AREA.clientHeight - JUGADOR.clientHeight;
var anchura = AREA.clientWidth - JUGADOR.clientWidth;

// Asignamos el contenido de la variable al HTML
document.getElementById('puntaje').innerText = puntos;
document.getElementById('vidas').innerText = vidas;
document.getElementById('nivel').innerText = nivel;
document.getElementById('tiempo').innerText = tiempo;

// Ejecutar funciones cuando se clickea al jugador
JUGADOR.addEventListener('click', randomizar);
document.getElementById('iniciar').addEventListener('click', temporizador);

// Localización random y automática del jugador con cada cliqueo
function randomizar()
{
    JUGADOR.style.top = aleatorio(0, altura) + 'px';
    JUGADOR.style.left = aleatorio(0, anchura) + 'px';
    puntos++;
    document.getElementById('puntaje').innerText = puntos;

    // Cierra el aviso de instrucción del juego. 
    if(document.querySelector('.tooltip'))
    {
        document.querySelector('.tooltip').remove();
    }
}

// Función temporizadora
function temporizador()
{
    setInterval(restarTiempo, 1000);

    // Chequea los niveles y la sucesiva dificultad
    if(nivel >= 3 && nivel < 6)
    {
        setInterval(restarTiempo, 800);
        console.log(nivel);
    }
    else if(nivel >= 6 && nivel < 8)
    {
        setInterval(restarTiempo, 600);
    }
    else if(nivel >= 8)
    {
        setInterval(restarTiempo, 300);
    }
}

// Generador de Números aleatorios
function aleatorio( min, maxi )
{
	var resultado;
	resultado = Math.floor( Math.random() * ( maxi - min + 1) ) + min;
	return resultado;
}

// Cuenta atrás y controla el resultado de la partida
function restarTiempo()
{
    tiempo--;
    document.getElementById('tiempo').innerText = tiempo;
    
    
    // Controla si se llego al nivel alcanzado
    if(puntos === 10)
    {
        tiempo = 30;
        nivel++;
        miNivel.innerText = 0;
        document.getElementById('tiempo').innerText = tiempo;
        alert("Ganaste");
        puntos = 0;
    }
    
}

// Controla si se acabó el tiempo
if(tiempo === 0)
{
    alert("Perdiste");
    tiempo = 30;
    vidas--;
    document.getElementById('vidas').innerText = vidas;
    document.getElementById('tiempo').innerText = tiempo;
}

// Controla si se acabaron las vidas
if(vidas === 0)
{
    alert("Perdiste totalmente");
    tiempo = 30;
    document.getElementById('vidas').innerText = 3;
    document.getElementById('nivel').innerText = 1;
    document.getElementById('tiempo').innerText = tiempo;
}