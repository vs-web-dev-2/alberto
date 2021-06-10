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

colores.forEach(function imprimir(color) {
  console.log(color);
});

colores.forEach(function (color) {
  console.log(color);
});

colores.forEach((color) => console.log(color));
