console.log("Script cargado correctamente.");

const genPaleta = document.querySelectorAll(".gen-paleta");

genPaleta.forEach(function(paleta) {
  paleta.addEventListener('click', function(event) {
    console.log('Paleta generada');
    const paletaColor = `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%)`;})

    console.log('Paleta generada');


});