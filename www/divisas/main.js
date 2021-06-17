const nodoFecha = document.getElementById("fecha");
const nodoCotizacionesList = document.getElementById("cotizacionesList");

const url = "https://api.frankfurter.app/latest";

const request = fetch(url);

const bodyJson = request.then((response) => response.json());

bodyJson.then(procesarDatos);

function procesarDatos(data) {
  const fecha = data.date; // data["date"]
  console.log("fecha: " + fecha);
  nodoFecha.innerText = fecha;
  const objetoCotizaciones = data.rates; // data["rates"]

  // console.log(objetoCotizaciones);

  // {
  //   "USD" : 1.4,
  //   "CHF" : 4
  // }

  const claves = Object.keys(objetoCotizaciones);

  // console.log(claves);
  // ["USD", "CFH"]

  // console.log(objetoCotizaciones.USD);
  // console.log(objetoCotizaciones["USD"]);
  // 1.4

  claves.forEach((clave) => {
    // console.log(clave + " : " + objetoCotizaciones[clave]);
    const nodoDivisaItem = document.createElement("li");
    nodoDivisaItem.innerText = clave + " : " + objetoCotizaciones[clave];
    nodoCotizacionesList.appendChild(nodoDivisaItem);
  });
}

request.catch();
