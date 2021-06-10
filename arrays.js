function recorrerArray(unArray) {
  let tamaño = unArray.length;
  console.log(`Recorreremos un array de ${tamaño} elementos`);
  for (let i = 0; i <= tamaño; i++) {
    console.log(`En la posición ${i} tenemos el color ${unArray[i]}`);
  }
}

let colores = ["rojo", "azul", "blanco"];
recorrerArray(colores);

colores[1] = "amarillo";
recorrerArray(colores);

colores[3] = "negro";
recorrerArray(colores);

colores.push("marrón");
recorrerArray(colores);

function imprimir(argumento) {
  console.log(argumento);
}
imprimir("eclipse");

colores.forEach(imprimir);
// imprimir(colores[0]);
// imprimir(colores[1]);

colores.forEach(function imprimir(c) {
  console.log(c);
});

colores.forEach(function (kk) {
  console.log(kk);
});

colores.forEach((x) => console.log(x));
