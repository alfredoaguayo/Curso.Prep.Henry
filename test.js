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


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let valor1 = 0;
  let res = false;
  for (var i = 0; i < arreglo.length; i++) {
    if ( i === 0 ) {
      valor1 = arreglo[i];
    } else {
      if ( arreglo[i] === valor1 ) {
        res = true;
      } else {
        res = false;
        i = arreglo.length;
      }
    }
  }
  return res;
} 


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let i = 0;
  let newArray = [];
  while ( i < 10 ) {
    numero = numero + 2;
    newArray.push(numero);
    if ( i === numero ) {
      break;
    }
    i++;
  }
  return newArray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let i = 0;
  let newArray = [];
  while ( i < 10 ) {
    numero = numero + 2;
    if ( i === 5 ) {
      i++;
      continue;
    } else {
      newArray.push(numero);
      i++;
    }
  }
  return newArray;
}

*/
const parole = 'Comosellamaesoquehiciste';

// function reverse () {
  let letter = '';
  let final = '';
  for (let i = parole.length - 1; i >= 0; i--) {
    letter = parole.charAt(i);
    final = final + letter;
  }
  
  console.log(final);
//}
/*
return final;
}

/*
console.log(agregarStringInvertida())


*/



// reverse(parole);
