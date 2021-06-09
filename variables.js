const PI = 3.14;
let marca = "bh";
let radio = 3 * 10;
let rueda = 2 * PI * radio;
let esDeCarretera = true;
// let marca = "orbea"
marca = "orbea";
radio = 400;
// PI = 9;
console.log("Marca : " + marca);
console.log("Longitud rueda: " + rueda);
console.log(radio);
console.log(esDeCarretera);

let bici = {
  marca: "bh",
  precio: 300,
  radio: 30,
  esDeCarretera: true,
  color: "rojo",
};
console.log(bici.color);
bici.color = "azul";
console.log(bici);
console.log(bici.precio);
console.log(bici.color);

let colores = ["rojo", "azul", "blanco"];
console.log(colores);
console.log(colores[1]);
colores[2] = "negro";
console.log(colores);

bici.marca = marca;
console.log(bici);
marca = "specialized";
console.log(bici.marca);
console.log(marca);
bici.color = colores[0];
console.log(bici);

let esGrande = bici.radio < 25;
let meGusta = bici.color == "azul";
console.log(esGrande);
console.log(meGusta);
bici.color = colores[1];
console.log(meGusta);
meGusta = bici.color != "azul";
console.log(meGusta);

// declaracion
let etiqueta;
// asignación
etiqueta = "hola";
// instruccion
console.log(etiqueta);
// expresion
etiqueta = "horas: " + 12 + 12;
// comparaciones
// > < >= <= == !=

// jugando con tipos

console.log(1 + 1);
console.log("1" + "1");
console.log("1" + 1);
console.log(1 + "1");
console.log("1" * "1");
