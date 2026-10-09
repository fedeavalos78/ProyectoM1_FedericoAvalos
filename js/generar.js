// console.log("Script cargado correctamente.");

// variables de elementos del DOM
const botonGenerar = document.querySelector(".generar-paleta");
const selectCantidad = document.getElementById("cantidad");
const selectFormato = document.getElementById("for-c");
const contenedor = document.querySelector(".color-line");
const toastGen = document.querySelector(".toast");
const toastCop = document.querySelector(".toast-copiar");
const botonGuardar = document.querySelector(".btn-guardar");

//arrays para guardar paletas
let paletaActual = []
const paletasGuardadas = JSON.parse(localStorage.getItem("paletasGuardadas")) || []

//variables para armar paletas de colores
const PASO = 30;
const SATURACION = 70;
const LUMINOSIDAD = 50;

//variables para timeout
let temp = 0;
let tempCopiar = 0; 

// funciones para transformar hsl/hex - ACLARACIÓN: esta función compleja 
// fue generada integramente con IA

function numeroAHex(numero) {
  const hex = Math.round(numero).toString(16);
  return hex.padStart(2, "0");
}

function hslAHex(tono, saturacion, luminosidad) {
  const s = saturacion / 100;
  const l = luminosidad / 100;
  const a = s * Math.min(l, 1 - l);

  function canal(n) {
    const k = (n + tono / 30) % 12;
    const valor = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return 255 * valor;
  }

  return "#" + numeroAHex(canal(0)) + numeroAHex(canal(8)) + numeroAHex(canal(4));
}

  // funcion de generar
  botonGenerar.addEventListener("click", function () {
    paletaActual=[]
    const cantColores = selectCantidad.value;
    const formatoColores = selectFormato.value;
    const cantColNum = Number(cantColores);
    // console.log(cantColNum);
    const tonoBase = Math.floor (Math.random() * 360);
    
    // Limpia el div de los colores de portada
    contenedor.innerHTML = "";

    
    // for que genera los colores, los divs donde van los colores
    // y el texto con el valor de cada color
    for (let i = 0; i < cantColNum; i++) {
      const tonoPaleta = tonoBase+(i*PASO);
      const tonoFinal = tonoPaleta % 360;
     
      //crea el div donde va a ir el color con el texto del codigo
      const franjaVertical = document.createElement("div");
      franjaVertical.classList.add("color");
      contenedor.appendChild(franjaVertical);

      //crea el div donde va a ir solo el color
      const franjaColor = document.createElement("div");
      franjaColor.classList.add("c");
      franjaColor.style.backgroundColor = `hsl(${tonoFinal}, ${SATURACION}%, ${LUMINOSIDAD}%)`;
      franjaVertical.appendChild(franjaColor);

      //crea el texto del formato
      const franjaTextoFormato = document.createElement("p");
      franjaTextoFormato.textContent = formatoColores;
      franjaVertical.appendChild(franjaTextoFormato);
      
      //crea el <p> del codigo
      const franjaTextoValores = document.createElement("p");
      
      //if para generar el codigo de color en el formato solicitado
      if (formatoColores === "HSL") {
        franjaTextoValores.textContent = `${tonoFinal}, ${SATURACION}%, ${LUMINOSIDAD}%`;
        paletaActual.push({formato: "HSL", color: franjaTextoValores.textContent})      
        } 
        else {
          franjaTextoValores.textContent = hslAHex(tonoFinal, SATURACION, LUMINOSIDAD);
          paletaActual.push({formato: "HEX", color: franjaTextoValores.textContent })
        }
      
      //carga el texto en <p>
      franjaVertical.appendChild(franjaTextoValores);
      
      //event listener para copiar codigo de color clickeando - timeout toast
      franjaColor.addEventListener("click", function () {
        navigator.clipboard.writeText(franjaTextoValores.textContent).then(function() {
          clearTimeout(tempCopiar);
          toastCop.classList.add("visible");
          tempCopiar = setTimeout(function () {
            toastCop.classList.remove("visible");
            }, 1000);  
        });
      });

    } 
    //timeout toast  generar paletas
    clearTimeout(temp);
    toastGen.classList.add("visible");
    temp = setTimeout(function () {
      toastGen.classList.remove("visible");
      }, 1000);
    
  });

  botonGuardar.addEventListener("click", function () {
    console.log(paletaActual);
    paletasGuardadas.push(paletaActual);
    localStorage.setItem("paletasGuardadas", JSON.stringify(paletasGuardadas));
      
  })
