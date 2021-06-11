let primos = [2, 3, 5, 7];

let esPar = (numero) => (numero % 2 === 0 ? true : false);

function esPrimo(numero) {
  for (let i = 0; i < primos.length; i++) {
    if (numero === primos[i]) {
      return true;
    }
  }
  return false;
}

let elevarAlCubo = (x) => x * x * x;

let resultado;
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
resultado = numeros.filter(esPar).filter(esPrimo).map(elevarAlCubo);

console.log(resultado);
let sergio = numeros.map((numero) => Math.sqrt(numero)).map(elevarAlCubo);
console.log(sergio);
console.log(numeros);

let suma = 1;
numeros.forEach((numero) => (suma += numero));
console.log(suma);

const sumaReducida = numeros.reduce((acumulador = 0, numero) => (acumulador += numero));
console.log(sumaReducida);

function sqrt(n) {
  let sqrt = n ** (1 / 2);
  let sqrt2 = 9;
  return sqrt;
}
console.log(sqrt(9));
