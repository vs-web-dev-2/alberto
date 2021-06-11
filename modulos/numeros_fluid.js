let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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

resultado = numeros.filter(esPar).filter(esPrimo).map(elevarAlCubo);

console.log(resultado);
let sergio = numeros.map((numero) => Math.sqrt(numero)).map(elevarAlCubo);
console.log(sergio);
console.log(numeros);
