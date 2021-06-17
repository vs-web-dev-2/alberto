const origen = "GBP";
const divisa = "USD";
const nodoUnidades = document.getElementById("unidades");

document.getElementById("origen").innerText = origen;
document.getElementById("divisa").innerText = divisa;
nodoUnidades.addEventListener("input", obtenerContravalor);

function obtenerContravalor() {
  const unidades = nodoUnidades.value;
  const url = `https://api.frankfurter.app/latest?amount=${unidades}&from=${origen}&to=${divisa}`;

  fetch(url)
    .then((response) => response.json())
    .then(procesarDatos);
}

function procesarDatos(datos) {
  const contravalor = parseFloat(datos.rates[divisa]).toFixed(2);
  document.getElementById("contravalor").innerText = contravalor;
}
