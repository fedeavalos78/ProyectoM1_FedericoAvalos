console.log("script cargado");

const paletasGuardadas = JSON.parse(localStorage.getItem("paletasGuardadas")) || []
const divPaletas = document.querySelector(".contenedor-paletas");

const cantPaletas = paletasGuardadas.length
// formatoColoresPaletas = 
for (let i = 0; i < cantPaletas; i++) {
    const paleta = paletasGuardadas[i];
    
//crea el div de una paleta
const franjaHorizontal = document.createElement("div");
franjaHorizontal.classList.add("franja-horizontal-paleta");
divPaletas.appendChild(franjaHorizontal);
    
    for (let j = 0; j < paleta.length; j++) {
        const colorPaleta = paleta[j]
        const formato = colorPaleta.formato;
        const codigo = colorPaleta.color;
        console.log(formato,codigo)

        //crea la franja para el color y el texto 
        const franjaVertical = document.createElement("div");
        franjaVertical.classList.add("franja-vertical");
        franjaHorizontal.appendChild(franjaVertical);

        //crea el div donde va a ir solo el color
        const franjaColor = document.createElement("div");
        franjaColor.classList.add("col");
        if(formato === "HSL"){
            franjaColor.style.backgroundColor = `${formato}(${codigo})`
        } else {franjaColor.style.backgroundColor = codigo}
        franjaVertical.appendChild(franjaColor);

        //crea el texto del formato
        const franjaTextoFormato = document.createElement("p");
        franjaTextoFormato.textContent = formato;
        franjaVertical.appendChild(franjaTextoFormato);
        
        //crea el <p> del codigo
        const franjaTextoValores = document.createElement("p");
        
        franjaTextoValores.textContent = `${codigo}`;
        
        //carga el texto en <p>
        franjaVertical.appendChild(franjaTextoValores);
    }
}
 