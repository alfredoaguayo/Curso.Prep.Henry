// keyword new
// function constructor

const { agregarAmigo } = require("./05-JS-IV/homework/homework");

function Car (marca, modelo, año, color) {
  this.marca = marca,
  this.modelo = modelo,
  this.año = año,
  this.color = color
}

let aveo = new Car('Chevrolet','Aveo',2014,'Tinto'); // Instancia a una persona
let tiida = new Car('Nissan','Tiida',2014,'Rojo'); // Instancia a una persona
let chevy = new Car('Chevrolet','Chevy C5',2004,'Azul'); // Instancia a una persona
let pointer = new Car('VW','Pointer',2003,'Blanco'); // Instancia a una persona

Car.prototype.edad = function () {
  currentTime = new Date();
  edad = currentTime.getFullYear() - this.año;
  return 'edad: ' + edad;
};

let flotilla = {aveo, tiida, chevy, pointer};

console.log(aveo, aveo.edad());
/* -------------------------------- ¿Qué hace el nombre NEW?
1. New crea un obj vacío
2. Car('Audi',1500,'verde').bind(objeto); // Objeto se refiere al obj vacío y hace que el THIS de la función CAR sea una referencia del obj.
3. return objeto;                         // Return objeto
*/


// console.log(aveo.edad())


class Persona {

  constructor (nombre, apellido) {
    this.nombre = nombre,
    this.apellido = apellido
  }
  saludar() {
    console.log(`Hola ${this.nombre} ${this.apellido}, ¿cómo estas?`)
  }
  
}

let alfredo = new Persona('Alfredo','Aguayo');

alfredo.saludar();

class Empleado extends Persona {
  constructor (nombre, apellido, puesto, sueldo) {
    super(nombre, apellido);
    this.puesto = puesto;
    this.sueldo = sueldo;
  }
  saludar() {
    console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Puesto: ${this.puesto}, Sueldo: ${this.sueldo}.`);
  }
}

let cris = new Empleado('Cristal','Garcia','Gerente',18000);

cris.saludar();

for ( let clave in flotilla ) {
  console.log(clave);
  console.log(flotilla[clave]);
}

/*
  let lectura = function() {
  }
};

console.log(lectura);

*/