let numeroSecreto = 0;
let intentos = 0;
//funcion

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  // definir titulo
  elementoHTML.innerHTML = texto;
  return; //buena practica aunque no retorne nada
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroSecreto === numeroUsuario) {
    asignarTextoElemento("h1", `Adivinaste  es ${numeroSecreto}`);
    asignarTextoElemento(
      "p",
      `Felicidades, realizado en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      } `
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero es menor");
    } else {
      asignarTextoElemento("p", "El numero es mayor");
    }
    intentos++;
    //cuando no acierta limpiar la caja
    limpiarCaja();
  }
  return;
}
condicionesIniciales();

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
  return;
}

function condicionesIniciales() {
  //   limpirar caja
  limpiarCaja();
  asignarTextoElemento("h1", "juego del numero secreto");
  asignarTextoElemento("p", "indica un numero del 1 al 10");
  //generar numero aleatorio
  numeroSecreto = generarNumeroSecreto();
  //inicializar el numero ed intentos
  intentos = 1;
}

function reiniciarJuego() {
  // asignar mensajes
  condicionesIniciales();

  //desabilitar boton, esdpera 2 parametros
  document.getElementById("reiniciar").setAttribute('disabled', 'true');
}
