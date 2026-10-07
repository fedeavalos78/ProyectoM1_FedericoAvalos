console.log("Script cargado correctamente.");

const botonGenerar = document.querySelector(".generar-paleta");
const selectCantidad = document.getElementById("cantidad");
const selectFormato = document.getElementById("for-c");
const contenedor = document.querySelector(".color-line");
const toastGen = document.querySelector(".toast");
const toastCop = document.querySelector(".toast-copiar");
const tonos = [];
let temp = 0
let tempCopiar = 0git 
let tonosUltPal =[]
let tonosBloq = []

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

if (botonGenerar) {
  botonGenerar.addEventListener("click", function () {
    const cantColores = selectCantidad.value;
    const formatoColores = selectFormato.value;
    console.log(cantColores);
    console.log(formatoColores);
    const cantColNum = Number(cantColores);
    console.log(cantColNum);

    const tonoBase = Math.floor (Math.random() * 360);
    console.log(tonoBase);

    contenedor.innerHTML = "";

    const PASO = 30;
    const SATURACION = 70; 
    const LUMINOSIDAD = 50;

    for (let i = 0; i < cantColNum; i++) {
      const tonoPaleta = tonoBase+(i*PASO);
      const tonoFinal = tonoPaleta % 360;
      tonos.push(tonoFinal);

      const franjaVertical = document.createElement("div");
      franjaVertical.classList.add("color");
      contenedor.appendChild(franjaVertical);

      const franjaColor = document.createElement("div");
      franjaColor.classList.add("c");
      franjaColor.style.backgroundColor = `hsl(${tonoFinal}, ${SATURACION}%, ${LUMINOSIDAD}%)`;
      franjaVertical.appendChild(franjaColor);

      const franjaTextoFormato = document.createElement("p");
      franjaTextoFormato.textContent = formatoColores;
      franjaVertical.appendChild(franjaTextoFormato);

      const franjaTextoValores = document.createElement("p");
      
      if (formatoColores === "HSL") {
        franjaTextoValores.textContent = `${tonoFinal}, ${SATURACION}%, ${LUMINOSIDAD}%`;      
        } 
        else {
          franjaTextoValores.textContent = hslAHex(tonoFinal, SATURACION, LUMINOSIDAD);
        }
      
      franjaVertical.appendChild(franjaTextoValores);
      
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
    clearTimeout(temp);
    toastGen.classList.add("visible");
    temp = setTimeout(function () {
      toastGen.classList.remove("visible");
      }, 1000);

    
    console.log(tonos);
  });
}

