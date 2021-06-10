// un array de productos
// cada producto debe tener un tipo de iva (normal, reducido o exento)
// { nombre: 'libreta', precio: 1.80, iva: normal }
let productos = [
  { nombre: "libreta", precio: 1.8, iva: "normal" },
  { nombre: "lapiz", precio: 0.5, iva: "normal" },
  { nombre: "libro", precio: 19.9, iva: "reducido" },
];
console.log("Nos ofrecen:");
console.log(productos);
// carrito es un array (subconjunto de los productos escogidos)
// criterio => precio <10
let carrito = [];
productos.forEach(function (producto) {
  if (producto.precio < 10) {
    carrito.push(producto);
  }
});
console.log("Hemos comprado:");
console.log(carrito);
// calcular subtotal sin iva
let subtotal = 0;
carrito.forEach((producto) => (subtotal += producto.precio));
console.log("Hemos gastado:" + subtotal);
// un array de tipos de iva { nombre:'normal', tipo: 21 }
let tiposIva = [
  { nombre: "normal", tipo: 21 },
  { nombre: "reducido", tipo: 4 },
];
console.log("Las tablas de IVA: ");
console.log(tiposIva);
// calcular el total con iva
let cuotaCarritoIVA = 0;
carrito.forEach(function (producto) {
  let tipoIvaProducto = tiposIva.find((tipoIva) => tipoIva.nombre === producto.iva);
  let cuotaIVA = producto.precio * (tipoIvaProducto.tipo / 100);
  cuotaCarritoIVA += cuotaIVA;
});
console.log("Y el IVA es de: " + cuotaCarritoIVA);
console.log("Y el importe a pagar será de: " + (subtotal + cuotaCarritoIVA));
