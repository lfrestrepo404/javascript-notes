let fichaNumber= 2392926
const nombreInst = 'Felipe'
console.log(fichaNumber, nombreInst)

var familia = {
    Mamita : 'Laura Daniela',
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
let ficha ={        
    numero: 2692926,
    vocero: 'pepito',
    naprendices: 28,
    programa: 'ADSO',
    etapalectiva: false
}

//Arreglo - Array
let frutas = ['Manzana', 'Pera', 'Uva', 'Melon']  

// function
function saludar () {}

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

const texto= '30'
const numero= parseInt(texto)

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

/* Podemos crear arreglos de 3 formas diferentes actualmente
 1. array()
 2. new array()
 3. [] -> Literal Array
*/