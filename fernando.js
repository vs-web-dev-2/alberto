let productos = [
  { name: "raton", precio: 100, iva: "normal" },
  { name: "boligrafo", precio: 200, iva: "reducido" },
  { name: "tv", precio: 50, iva: "exento" },
  { name: "movil", precio: 400, iva: "exento" },
  { name: "mesa", precio: 250, iva: "normal" },
  { name: "movil", precio: 400, iva: "exento" },
  { name: "coche", precio: 250, iva: "reducido" },
  { name: "ventana", precio: 600, iva: "exento" },
  { name: "pc", precio: 122, iva: "reducido" },
];
let totalIva = 0;
let sinlIva = 0;
let carrito = [];
let arrIva = [
  { nombre: "normal", tipo: 21 },
  { nombre: "reducido", tipo: 14 },
  { nombre: "exento", tipo: 0 },
];

let x = function () {
  console.log("hola");
};
x();

let x1 = () => console.log("hola");
x1();

function y() {
  console.log("hola");
}
y();

// y1 () => {
//   console.log("hola");
// }

let calIva = (prod) => {
  let prodIva = prod.iva;
  let numIva = arrIva.find((iva) => {
    return iva.nombre === prodIva;
  });

  if (!numIva.tipo == 0) {
    return prod.precio * (numIva.tipo / 100) + prod.precio;
  } else {
    return prod.precio;
  }
};

const calcularTotales = (prod) => {
  sinlIva = sinlIva + prod.precio;
  totalIva = totalIva + calIva(prod);
};

productos.forEach((producto) => {
  if (producto.precio < 200) {
    carrito.push(producto);
    calcularTotales(producto);
  }
});

console.log(carrito);

console.log(`
  productos del carrito es : ${carrito.length}
  El total sin Iva es : ${sinlIva}
  El total con Iva es : ${totalIva}
 `);
