// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    inc = array[i];
    array[i] = inc + 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  str = '';
  word = '';
  for (var i = 0; i < palabras.length; i++) {
    word = palabras[i];
    if ( i === 0 ) {
      str = word;
    } else {
      str = str + ' ' + word;
    }
  }
  return str;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.length === 0) {
    return false;
  } else {
    for (var i = 0; i < array.length; i++) {
      word = array[i];
      if (word === elemento) {
        i = array.length;
        return true;
      } else {
        return false;
      }
    }
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  suma = 0
  while (numeros.length > 0) {
    suma = suma + numeros[0];
    numeros.shift();
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  suma = 0;
  count = 0;
  prom = 0;
  while (resultadosTest.length > 0) {
    suma = suma + resultadosTest[0];
    count ++
    resultadosTest.shift();
  }
  prom = suma / count;
  return prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  com = 0;
  while (numeros.length > 0) {
    if ( numeros[0] > com ) {
      com = numeros[0];
      numeros.shift();
    } else {
      numeros.shift();
    }
  }
  return com;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let num1 = 0;
  let num2 = 0;
  if (arguments.length > 0) {
    if (arguments.length === 1 ) {
      return arguments[0];
    } else {
      for (i = 0; i < arguments.length; i++) {
        if ( i === 0) {
          num1 = arguments[i] 
        } else {
          num2 = arguments[i] 
          num1 = num1 * num2;
          num1 = num1;
        }
      }
      return num1;
    }
  } else {
    return 0;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  num = 0;
  count = 0
  for (var i=0; i<arreglo.length; i++) {
    num = arreglo[i];
    if ( num > 18 ) {
      count ++;
    }
  }
  return count;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if ( numeroDeDia === 1 || numeroDeDia === 7 ) {
    return 'Es fin de semana'    
  } else if ( numeroDeDia > 1 && numeroDeDia < 7 ) {
    return 'Es dia Laboral';
  } else {
    return 'No corresponde a un día de la semana.'
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if ( n.toString().substring(0,1) == '9') {
    return true;
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


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let mes = '';
  let selec = [];
  for (var i = 0; i < array.length; i++) {
    mes = array[i];
    if( mes === 'Enero' || mes === 'Marzo' || mes === 'Noviembre' ) {
      selec.push(mes);
    }
  }
  if ( selec.length === 3 ) {
    return selec;
  } else {
    return 'No se encontraron los meses pedidos'
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let v = 0;
  newArray = [];
  for ( var i = 0; i < array.length; i ++ ) {  
    v = array[i];
    if( v > 100 ) {
      newArray.push( v );
    }
  }
  return newArray;
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
  if ( i === numero ) {
    return 'Se interrumpió la ejecución';
  } else {
    return newArray;
  }
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
    if ( i === 5 ) {
      i++;
      continue;
    } else {
      numero = numero + 2;
      newArray.push(numero);
      i++;
    }
  }
  return newArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
