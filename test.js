/*

function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if ( numero % 3 === 0 && numero % 5 === 0 ) {
      return 'fizzbuzz';
     } else if( numero % 3 === 0 ) {
      return 'fizz';
     } else if( numero % 5 === 0 ) {
      return 'buzz';
     } else {
      return numero;
     }
  }

console.log(fizzBuzz(valor));


function esPrimo(numero) {
  if ( numero < 2 ) {
    return false;
  };
  for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(esPrimo(valor));

*/

const valor = 100;

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if ( Number(numero) ) {
    if ( Math.floor(numero) == numero ) {
      let valor = numero.toString();
      if ( valor.length === 3) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  } else {
    return false;
  }
}

console.log(tieneTresDigitos(valor))