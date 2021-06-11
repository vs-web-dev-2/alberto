let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let primos = [2, 3, 5, 7];

// Pares
function obtenerPares1(numeros) {
  let pares = [];
  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (esPar(numero)) {
      pares.push(numero);
    }
  }
  return pares;
}
console.log(obtenerPares1(numeros));

function obtenerMultiplos1(numeros, factor) {
  let result = [];
  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (esMultiplo(numero, factor)) {
      result.push(numero);
    }
  }
  return result;
}
console.log(obtenerMultiplos1(numeros, 3));

function obtenerCriterio1(numeros, funcionCriterio) {
  let result = [];
  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (funcionCriterio(numero)) {
      result.push(numero);
    }
  }
  return result;
}
console.log(obtenerCriterio1(numeros, esPrimo));

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function esMultiplo(numero, factor) {
  if (numero % factor === 0) {
    return true;
  } else {
    return false;
  }
}

function esPrimo(numero) {
  for (let i = 0; i < primos.length; i++) {
    if (numero === primos[i]) {
      return true;
    }
  }
  return false;
}
