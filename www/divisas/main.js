const nodoFecha = document.getElementById("fecha");
const nodoCotizacionesList = document.getElementById("cotizacionesList");

const url = "https://api.frankfurter.app/latest";

const request = fetch(url);

const bodyJson = request.then((response) => response.json());

bodyJson.then(procesarDatos);

function procesarDatos(data) {
  const fecha = data.date;
  console.log("fecha: " + fecha);
  nodoFecha.innerText = fecha;
  const objetoCotizaciones = data.rates;

  const claves = Object.keys(objetoCotizaciones);

  claves.forEach((divisa) => {
    const nodoDivisaItem = document.createElement("li");

    const nodoDivisaSpan = document.createElement("span");
    nodoDivisaSpan.innerText = divisa;
    nodoDivisaSpan.className = "divisa";

    const nodoCotizacionSpan = document.createElement("span");
    nodoCotizacionSpan.innerText = objetoCotizaciones[divisa];
    nodoCotizacionSpan.className = "cotizacion";

    nodoDivisaItem.appendChild(nodoDivisaSpan);
    nodoDivisaItem.appendChild(nodoCotizacionSpan);
    nodoCotizacionesList.appendChild(nodoDivisaItem);
  });
}

request.catch();
