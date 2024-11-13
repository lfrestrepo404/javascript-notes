let fichaNumber = 2392926
const nombreInst = 'Felipe'
console.log(fichaNumber, nombreInst)

var familia = {
  Mamita: 'Laura Daniela',
  Papito: 'Luis Felipe',
  Bebe: 'Isabella',
  Gatito: 'Aslan',
  Gatita: 'Chloe'
}

//  PRIMITIVOS

let nombre = "Felipe"       //String
let edad = 27               //Number
let profesional = false     //Boolean
let vacio = null            //Vacio
let indefinido = undefined  //Indefinido

// COMPLEJOS

//Objeto - Object
let ficha = {
  numero: 2692926,
  vocero: 'pepito',
  naprendices: 28,
  programa: 'ADSO',
  etapalectiva: false
}

//Arreglo - Array
let frutas = ['Manzana', 'Pera', 'Uva', 'Melon']

// function
function saludar() { }

// Operadores de Comparacion

// ==    Igual a
// ===   Igual estricto, calor y tipo de dato
// !=    Diferente a 
// <     Menor que
// >     MAyor que
// <=    Menor o Igual que
// >=    Mayor o Igual que


// Operadores Aritméticos

// Suma, Resta, Multiplicación y División

const sumar = 1 + 3
const resta = 5 - 1
const mult = 10 * 2
const divi = 34 / 3

console.log(sumar, resta, divi, mult)

// Modulo y EXPONENCIACIÓN

const modulo = 20 % 2
const exponencial = 2 ** 2

console.log(modulo, exponencial)

// Precisión

const resultado = 82 * 1.3
const resultado2 = 82 * 1.4

console.log(resultado)
console.log(resultado.toFixed(2))

//Operaciones Avanzadas

const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()

console.log(raizCuadrada, valorAbsoluto, aleatorio)

// Type Casting Explicito

const texto = '30'
const numero = parseInt(texto)

console.log(numero)
console.log(typeof texto)
console.log(typeof numero)

const decimal = '3.1416'
const float = parseFloat(decimal)
console.log(decimal)
console.log(float)
console.log(typeof float)


// Type Casting Implicito

const suma = '55' + 3
console.log(suma)


const sum = 55 + true
console.log(sum)


//Existen los: For, for of y for in

// El bucle for es el bucle tradicional en JavaScript y es útil cuando sabes la cantidad exacta de veces que quieres repetir una acción. Tienes que definir tres partes: inicialización, condición, y actualización del índice.
for (inicialización; condición; actualización) {
  // Código a ejecutar en cada iteración
}

for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}
// Output:
// El valor de i es: 0
// El valor de i es: 1
// El valor de i es: 2
// El valor de i es: 3
// El valor de i es: 4

//   for...of recorre los valores de objetos iterables como arrays, strings, mapas y conjuntos (Map, Set). A diferencia de for...in, for...of accede directamente al valor, lo cual es útil para trabajar directamente con los elementos sin preocuparte de los índices.

for (let valor of iterable) {
  // Código a ejecutar en cada iteración
}

const frutass = ["manzana", "banana", "pera"];

for (let fruta of frutass) {
  console.log(fruta);
}
// Output:
// manzana
// banana
// pera

const textos = "Hola";

for (let letra of textos) {
  console.log(letra);
}
// Output:
// H
// o
// l
// a


// for...in recorre las propiedades de un objeto o los índices de un array. Es útil para iterar sobre propiedades de un objeto o claves de un array, pero no sobre los valores directamente.

for (let propiedad in objeto) {
  // Código a ejecutar en cada iteración
}

const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}
// Output:
// nombre: Juan
// edad: 30
// ciudad: Madrid


const numeros = [10, 20, 30];

for (let indice in numeros) {
  console.log("Índice " + indice + ", valor " + numeros[indice]);
}
// Output:
// Índice 0, valor 10
// Índice 1, valor 20
// Índice 2, valor 30


//Manejo de Arrays

/* Recordemos que podemos crear variables para almacenar un valor.
Con los arrays podemos crear variables que almacenen multiples valores
usualmente de un mismo contexto */

/* Podemos crear o declarar arreglos de 2 formas diferentes actualmente
 1. array() o new array()
 2. [] -> Literal Array
*/

const lenguajes = Array('Python', 'Php', 'Java', 'C#', 'JavaScript')
console.log(lenguajes)

const oneNumber = [4]
console.log(oneNumber)

const deportes = ['Futbol', 'Tennis', 'Rugby']
console.log(deportes)

//Arrays Mixtos

const adso = [
  'SENA',
  '27 Meses',
  'Tecnólogo',
  {
    lectiva: '21 Meses',
    productiva: '6 meses',
    requisitos: ['Bachiller', 'Presentación Icfes', 'Disponibilidad de tiempo'],
    homologacion: 'Ingenieria de software',
    tarjetProfesional: true
  }
]

console.log(adso)

//Accediendo a arrays elements
const objectInArray = adso[3]
console.log(objectInArray)

//Tamaño o longitud de valores de un array
// .length

const numberOfValues = adso.length
console.log(numberOfValues)


//Mutabilidad e Inmutabilidad de Arrays

/*

Mutabilidad: Puedes modificar directamente un array existente, agregando, eliminando o cambiando elementos.
Métodos mutables: copyWithin, fill, pop, push, reverse, shift, sort, splice, unshift.
Inmutabilidad: Cuando realizas una operación sobre un array, se crea un nuevo array con los cambios, dejando el original intacto.
Métodos no mutables: slice, concat, toReversed, slice, toSorted, toSoliced.

*/
//Ej: Mutability - push crea o añade un valor al final del arreglo
adso.push('Presencial');

console.log(adso)

//Ej: Inmutability - concat, crea un nuevo array a partir del array anterior
const adsoSena = adso.concat(['Virtual', '20 Competencias']);
console.log(adso)
console.log(adsoSena)


//Ejercicio práctico con arrays y su longitud

const numbersArray = [2, 4, 6, 8, 10]

let sumaArray = 0;

for (let i = 0; i < numbersArray.length; i++) {
  sumaArray += numbersArray[i]
}

console.log(sumaArray)

/*
Ejemplos de muitabilidad con unshift(Agregas elementos al principio del arreglo) o  push (añade elementos al final del array)
y shift(Elimina elementos al principio de un array) o pop (el cual elimina el ultimo elemento de un array )

*/

const countries = ['COL', 'ARG', 'MEX']
const newContries = countries.push('CL', 'PER');
const newConstriesTwo = countries.unshift('BRA', 'BOL', 'VEN')

console.log(countries)
console.log(newContries)
console.log(newConstriesTwo)

const removeCountriePush = countries.pop()
console.log(countries)
const removeCountrieShift = countries.shift()
console.log(countries)


// Iteraciones con map y foreach

/* Ambos métodos se utilizan para iterar sobre los elementos de un arreglo, pero tienen propósitos y comportamientos distintos.


forEach()
Propósito: Ejecutar una función por cada elemento del arreglo, principalmente para realizar alguna acción o efecto secundario.
Retorno: No devuelve un nuevo arreglo.
Modificación del arreglo original: No modifica directamente el arreglo original, pero la función que se le pasa como argumento podría hacerlo.


map()
Propósito: Crear un nuevo arreglo aplicando una función a cada elemento del arreglo original.
Retorno: Devuelve un nuevo arreglo con los resultados de la función aplicada a cada elemento.
Modificación del arreglo original: No modifica el arreglo original.

*/

// Ej: Usar un map para crear un nuevo arreglo en el que a partir de una lista de numeros, me genere una lista de nuevos numeros elveados a la 2

const numNormal = [2, 3, 4, 5, 6, 7, 8]
const numDouble = numNormal.map(num => num * 2)

console.log(numNormal)
console.log(numDouble)


// Ej: usar un foreach para iterar cada elemento del array, pero sin generar un nuevo arreglo

const numberss = [1, 2, 3, 4];

numberss.forEach(number => {
  console.log(number * 2); // Imprime el doble de cada número
});


//Ejemplo practico con map, convertir de farenheit a celcius

const tempFarenheit = [31, 68, 95, 104]
const tempCelcius = tempFarenheit.map(farenheit => (5 / 9) * (farenheit - 32));

console.log('Temperaturas en Farenheit: ', tempFarenheit);
console.log('Temperaturas en Celcius: ', tempCelcius);


//Ejmplo practico con Foreach, sumar los valores de un arreglo

const newNumbers = [2, 4, 6, 8, 10, 12, 14, 16]

let sumaForeach = 0;

newNumbers.forEach(number => {
  sumaForeach += number
})

console.log('Suma de los numeros:', sumaForeach)








/* Filtrado y Reducción con filter() y Reduce()  dos herramientas poderosas para manipular y transformar arreglos.

Filtrado con filter()
El método filter() se utiliza para crear un nuevo arreglo a partir de un arreglo existente, pero incluyendo solo aquellos elementos que cumplan una determinada condición. Es como pasar un arreglo por un filtro para seleccionar solo los elementos que nos interesan.

*/



const numerosList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// 1. Se crea un array llamado 'numerosList' y se le asignan los números del 1 al 15.

const numerosPares = numerosList.filter(numero => numero % 2 === 0);
// 2. Se crea un nuevo array llamado 'numerosPares':
//   - `numerosList.filter()`: Se aplica el método 'filter' al array 'numerosList' para filtrar los elementos.
//   - `numero => numero % 2 === 0`: Esta es una función de flecha que se pasa como argumento a 'filter'. 
//     - `numero`: Representa cada elemento del array 'numerosList' en cada iteración.
//     - `numero % 2 === 0`: Esta expresión verifica si el número es par (el resto de la división entre 2 es 0).
//     - Si la condición es verdadera, el número se incluye en el nuevo array 'numerosPares'.

console.log(numerosPares); // Imprimirá: [2, 4, 6]
// 3. Se imprime en la consola el contenido del array 'numerosPares', que ahora contiene solo los números pares del array original.

/*
Reducción con reduce()
El método reduce() se utiliza para reducir un arreglo a un único valor. Es como aplicar una operación a todos los elementos del arreglo y obtener un resultado final.

*/


const numerosListado = [1, 2, 3, 4, 5];
// 1. **Declaración del array:** Se crea un array llamado `numerosListado` y se le asignan los números del 1 al 5. Este array será nuestra fuente de datos para la operación de suma.

const sumaTotal = numerosListado.reduce((acumulador, numero) => acumulador + numero, 0);
// 2. **Cálculo de la suma total:**
//   - `numerosListado.reduce()`: Se aplica el método `reduce()` al array `numerosListado`. Este método itera sobre cada elemento del array y acumula un valor.
//   - `(acumulador, numero) => acumulador + numero`: Esta es una función flecha que se pasa como argumento a `reduce()`.
//     - `acumulador`: Representa el valor acumulado en cada iteración. Inicialmente, este valor es 0 (especificado en el tercer argumento de `reduce()`).
//     - `numero`: Representa el elemento actual del array durante cada iteración.
//     - `acumulador + numero`: En cada iteración, se suma el valor actual del `numero` al `acumulador` y el resultado se asigna al nuevo `acumulador` para la siguiente iteración.
//   - `0`: Este es el valor inicial del `acumulador`. Es decir, antes de comenzar a iterar sobre el array, el `acumulador` tiene un valor de 0.

console.log(sumaTotal);
// 3. **Impresión del resultado:** 
//   - Se imprime en la consola el valor final de `sumaTotal`, que representa la suma de todos los números del array `numerosListado`.


//Reduce segundo ejemplo



// console.log(wordFrecuency)

const words = ['Hola', 'Felipe', 'Mouse', 'Teclado', 'Pc', 'Hola', 'Pantalla', 'Hola'];
// 1. **Declaración del arreglo:**
//    Se crea un arreglo llamado `words` que contiene una lista de palabras, incluyendo algunas repetidas.

const wordFrecuency = words.reduce((acumulador, currentValue) => {
  if (acumulador[currentValue]) {
    acumulador[currentValue]++
  } else {
    acumulador[currentValue] = 1
  }

  return acumulador
}, {});
// 2. **Cálculo de la frecuencia de palabras:**
//    - `words.reduce()`: Se aplica el método `reduce()` al arreglo `words` para reducirlo a un único valor, que en este caso será un objeto que cuenta la frecuencia de cada palabra.
//    - `(acumulador, currentValue) => {...}`: Esta es una función flecha que se pasa como argumento a `reduce()`.
//      - `acumulador`: Este será un objeto que se irá construyendo en cada iteración. Las propiedades de este objeto serán las palabras y los valores serán la cantidad de veces que aparece cada palabra.
//      - `currentValue`: Representa la palabra actual en cada iteración del arreglo.
//    - `if (acumulador[currentValue]) { ... }`: Si la palabra actual ya existe como propiedad en el objeto `acumulador`, significa que ya la hemos encontrado antes, por lo que incrementamos su contador en 1.
//    - `else { ... }`: Si la palabra actual no existe como propiedad en el objeto `acumulador`, la agregamos al objeto y le asignamos un valor de 1, indicando que la hemos encontrado por primera vez.
//    - `return acumulador`: Devolvemos el objeto `acumulador` actualizado en cada iteración.
//    - `{}`: Este es el valor inicial del acumulador. Al ser un objeto vacío, indica que al principio no tenemos ninguna palabra contada.

console.log(wordFrecuency);
// 3. **Impresión del resultado:**
//    Se imprime en la consola el objeto `wordFrecuency`, que ahora contiene un conteo de cuántas veces aparece cada palabra en el arreglo original.



/*

¿Qué es slice()?

slice() es un método que se utiliza tanto en cadenas de texto (strings) como en arreglos. Su función principal es extraer una porción de un conjunto de datos (ya sea una cadena o un arreglo) y crear una nueva copia de esa porción, sin modificar el conjunto original.

*/


const saludos = "Hola, mundo!";
const subcadena = saludos.slice(2, 5); // Extrae desde el índice 2 (la 'l') hasta el índice 4 ('a')
console.log(subcadena); // Imprimirá: "la,"

const numbs = [1, 2, 3, 4, 5];
const nuevosNumeros = numbs.slice(1, 3); // Extrae desde el índice 1 (el 2) hasta el índice 2 (el 3, sin incluirlo)
console.log(nuevosNumeros); // Imprimirá: [2, 3]

const nuevosNumeross = numbs.slice(-2); // Extrae desde el índice 1 (el 2) hasta el índice 2 (el 3, sin incluirlo)
console.log(nuevosNumeross); // Imprimirá: [2, 3]


/*
spread operator

Qué es el operador de dispersión?
Es una sintaxis introducida en ECMAScript 6 (ES6) que se representa con tres puntos suspensivos (...) y te permite "expandir" los elementos de un iterable (como un array o un string) en lugares donde se esperan múltiples argumentos o elementos.

Imagina que tienes una bolsa de frutas y quieres sacar todas las frutas de golpe sobre la mesa. El operador de dispersión sería como abrir la bolsa y esparcir todas las frutas.

¿Para qué se usa?
Copiar arrays:

*/

const numbersss = [1, 2, 3];
const copiaNumeros = [...numbersss];

console.log(numbersss)
console.log(copiaNumeros)

//Concatenar arrays:

const array1 = [1, 2];
const array2 = [3, 4];
const arrayCombinado = [...array1, ...array2];

console.log(arrayCombinado)


const peliculas = ['Deadpool', 'Fast ans furios', 'Kings of lords', 'Harry Potter']

const pelis2024 = [...peliculas, 'Deadpool3', 'Intensamente', 'La substancia']

console.log(pelis2024)


//---------------------------------------------

/* Introducción en programación orientada a objetos


  ¿Qué es un objeto en JavaScript?
Un objeto en JavaScript es una colección de propiedades y métodos. Imagina un objeto como una representación de una entidad del mundo real, como una persona, un coche o un libro. Cada objeto tiene sus propias características (propiedades) y acciones que puede realizar (métodos).

Propiedades
Las propiedades son las características de un objeto. Son como los adjetivos que describen a una persona. Por ejemplo, si tenemos un objeto que representa a una persona, sus propiedades podrían ser:

nombre: "Juan"
edad: 30
altura: 1.75


Métodos
Los métodos son las acciones que un objeto puede realizar. Son como los verbos que describen lo que una persona puede hacer. En el ejemplo de la persona, los métodos podrían ser:

hablar(): Imprime un mensaje en la consola.
caminar(): Simula el acto de caminar.

Anatomía de un objeto
Un objeto en JavaScript se define utilizando llaves {}. Dentro de las llaves, se enumeran las propiedades y métodos del objeto, separados por comas.

*/

// Creando un objeto que representa a una persona
const men = {
  //Propiedades y valor
  nombre: "Felipe",
  genero: "Masculino",
  edad: 27,
  estatura: 1.79,
  //Método
  saludar() {
    console.log("Hola, mi nombre es " + this.nombre + " y soy Ingeniero de Software");
  },
  soltero: true
};

console.log(men)
men.saludar();


/*

Agregando nuevas propiedades a un objeto

1. Asignación directa:
Esta es la forma más común y directa de agregar una nueva propiedad a un objeto existente. Simplemente usas la notación de punto o corchetes para acceder a la nueva propiedad y asignarle un valor.
*/

men.apellido = "Restrepo";
men.ciudad = "Bogota";
console.log(men)

/*
2. Usando Object.assign():
El método Object.assign() te permite copiar propiedades de un objeto a otro. Puedes usarlo para agregar nuevas propiedades a un objeto existente:
*/

const nuevasPropiedaes = {
  telefono: 3212439492,
  email: 'lfrestrepo004@gmail.com',
  youtube: '@codingnow404'
}

Object.assign(men, nuevasPropiedaes)

console.log(men)


/*
  Tambien podemos agregar metodos a funciones ya creadas
 */

men.despedir = function () {
  console.log("Esto fue todo por mi primer ejercicio con objetos")
}
console.log(men)

men.despedir();


/*
  Tambien podemos borrar propiedades y metodos con la instruccion delete

*/

delete men.telefono;
delete men.despedir;
console.log(men)

//.-------------------------------------------------------------.

/*
Programación orientada a objetos:
Funciones Constructoras en JavaScript
Una función constructora es una función especial en JavaScript que se utiliza para crear objetos. En lugar de crear objetos individualmente, con una función constructora puedes crear múltiples objetos con la misma estructura de manera más eficiente y organizada.

¿Cómo funciona?
Definición: Se define una función normal, pero se acostumbra a nombrarla con la primera letra en mayúscula para diferenciarla de otras funciones.
Uso de this: Dentro de la función, la palabra clave this se refiere al nuevo objeto que se está creando. Las propiedades y métodos se asignan a this.
Creación de objetos: Para crear un nuevo objeto a partir de la función constructora, se utiliza la palabra clave new seguida del nombre de la función.

*/

function People(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    console.log("Hola, mi nombre es " + this.nombre);
  };
}

// Creando objetos a partir de la función constructora (Instancias)
const persona1 = new People("Juan", 30);
const persona2 = new People("Ana", 25);

// Accediendo a propiedades y métodos
console.log(persona1.nombre); // Imprime: Juan
persona2.saludar(); // Imprime: Hola, mi nombre es Ana