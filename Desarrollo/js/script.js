console.log("Script cargado correctamente.");

const botonGenerar = document.querySelector(".generar-paleta");
const selectCantidad = document.querySelector(".cantidad");
const selectFormato = document.querySelector(".for-c");

botonGenerar.addEventListener("click", function () {
  const cantColores = selectCantidad.value;
  const formatoColores = selectFormato.value;

  console.log(cantColores);
  console.log(formatoColores);
});