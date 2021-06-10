// un array de productos
// cada producto debe tener un tipo de iva (normal, reducido o exento)
// { nombre: 'libreta', precio: 1.80, iva: normal }

let productos = [
  { nombre: "libreta", precio: 1.8, iva: "normal" },
  { nombre: "lapiz", precio: 0.5, iva: "normal" },
  { nombre: "libro", precio: 19.9, iva: "reducido" },
];

// carrito es un array (subconjunto de los productos escogidos)
// criterio => precio <10

let carrito = [];
productos.forEach(function (producto) {
  if (producto.precio < 10) {
    carrito.push(producto);
  }
});

// calcular subtotal sin iva

let subtotal = 0;
carrito.forEach((producto) => (subtotal += producto.precio));

// un array de tipos de iva { nombre:'normal', tipo: 21 }

// calcular el total con iva
