//EJERCICIOS JS DIA 2

//Dados 2 variables booleanas:
booleano1 = true;
booleano2 = false;

//Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 AND booleano2
let booleanoAnd = booleano1 && booleano2;

//Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1  OR booleano2
let booleanoOr = booleano1 || booleano2;

//Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1
let booleanoNot = !booleano1;

//Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))

//Crear variable valorDivision cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado

let valorDivision = 17 / 3;
console.log(valorDivision.toFixed(2))

//Crear variable valorResto cuyo valor sea el resto de 17 entre 7
let valorResto = 17 % 7;

//Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?
let a = 9;
let b = '9';
if (a == b) {
    console.log('Son iguales');
}

if (a === b) {
    console.log('Son iguales');
}//no imprime nada porque la condicion no se cumple, ya que esta comparando estrictamente el tipo de dato.

//Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”
let mochila = [1, 2, 3];
if (mochila.length > 10) {
    console.log('No puedo cargar con tantas cosas')
} else if (2 <= mochila.length <= 10) {
    console.log('Que bien voy con mi mochila')
} else {
    console.log('Creo q no necesito una mochila')
}
    
//Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10
let contarHasta10 = 0
for (let contador = 0; contador < 9999; contador++) {
    if (contarHasta10 === 10) {
        break;
    } else {
        contarHasta10++;
    }
    
}

//Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’
let diaFestivo = false 
diaFestivo === true ? console.log('Hoy no trabajo') : console.log('Hoy trabajo');

//Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle
let arrayBucle = [];
for (let i = 4; i <= 18; i++) {
    arrayBucle.push(i);
}

//Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado
let resultado = 0;
for (let i = 0; i < arrayBucle.length; i++) {
    resultado += arrayBucle[i];
}


//Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos
let sofiaArray = ['Con', 'Sofia', 'aprendiendo', 'bucles'];
for (const iteratorSofiaArray of sofiaArray) {
    console.log(iteratorSofiaArray);
}
//for in
for (const iteratorSofiaArray in sofiaArray) {
    console.log(sofiaArray[iteratorSofiaArray]);
  }
  

//Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3
const patata = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let i = 1;
while(i<= 20) {
    if (i % 3 === 0) {
    console.log("patata");
    }
    i++;
}

//OPCIONALES
let gente = [
      {
        nombre: "Jamiro",
        edad: 45,
      },
      {
        nombre: "Juan",
        edad: 35,
      },
      {
        nombre: "Paco",
        edad: 34,
      },
      {
        nombre: "Pepe",
        edad: 14,
      },
      {
        nombre: "Pilar",
        edad: 24,
      },
      {
        nombre: "Laura",
        edad: 24,
      },
      {
        nombre: "Jenny",
        edad: 10,
      },
    ];

//Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.
let nombresCuantroLetras = [];
for (const persona of gente) {
    if(persona.nombre.length <= 4){
        nombresCuantroLetras.push(persona);
        
    }
}
console.log(nombresCuantroLetras); //lo muestro fuera del codigo de ejecución del bucle para que no consoleé en cada iteración

//Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.
let genteJMenor40 = [];
for (const persona of gente) {
  if (persona.edad < 40 & persona.nombre[0] ==="J") {
    genteJMenor40.push(persona);
  }
}
console.log(genteJMenor40);

