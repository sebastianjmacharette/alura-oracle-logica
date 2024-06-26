let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numerosMaximo = 10;
//funcion

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numerosMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //si ya sorteamos todos los numeros para que no entre en un bucle finalizamos el juego
if (listaNumerosSorteados.length == numerosMaximo) {
 
   //informamos que el juego finalizado
  asignarTextoElemento("h1", "Juego finalizado");
  asignarTextoElemento(
    "p",
    `Felicidades, adivinaste todos numeros
     `
  );
  document.getElementById("reiniciar").removeAttribute("disabled");
  return; //buena practica aunque no retorne nada
  
} else {



  //tenemos que preguntarnos si el numero esta en la lista, y dependiendo de si esta o no realizar una accion 
  if (listaNumerosSorteados.includes(numeroGenerado)) {
    //utilizar concepto de recursividad, que la misma funcion se llame a si misma
    return generarNumeroSecreto();

    
  } else {
    //si el numero no esta , entonces devuelve el numero generado y lo guarda en la lista
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}
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
  asignarTextoElemento("p", `indica un numero del 1 al ${numerosMaximo}`);
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
