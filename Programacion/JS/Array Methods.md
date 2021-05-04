---
Source: "https://twitter.com/SimonHoiberg/status/1389481427302035457?s=09"
---

14 metodos de arrays en JS para hacernos la vida mas fácil.

Podes bajarte el apunte en pdf desde [acá](https://drive.google.com/file/d/1Bc_NFSHBnjA7y6CazHdIx6O42v1XB7eM/view?usp=sharing). 

## ```map()```

^fba7d9

El metodo map crea un nuevo array.

Dentro del array, lo llena con el resultado de una funcion callback que pasa por cada elemento del array viejo.

```js
const numbers = [1,2,3,4,5];
const doubled = numbers.map(value => value * 2);

console.log(doubled);
// [2,4,6,8,10]
```


## ```forEach()```

Ejecuta una función, una vez por cada elemento en el array.

Esta función callback no espera un resultado o return.

```js
const numbers = [1,2,3,4,5,6];
const allNumbers = numbers.forEach(
	n => console.log(n)
);

// 1 2 3 4 5 6
```

## ```filter()```

^261f9e

Crea un nuevo array que contiene unicamente los elemento del viejo que "pasen la prueba" de la función callback.

```js
const numbers = [1,2,3,4,5,6];
const even = numbers.filter(n => n % 2 === 0);

console.log(even)
// [2,4,6]
```

## ```find()```

^df2974

Es similar al metodo [[#^261f9e | filter()]] pero solo devuelve un elemento.

El metodo se detiene cuando encuentra el primer elemento que "pase la prueba".

Si no encuentra ninguno, devuelve undefined.

```js
const numbers = [1,2,3,4,5,6];
const even = numbers.find(n => n === 3);

console.log(even)
// 3
```

## ```findIndex()```

Es muy similar al metodo [[#^df2974 | find()]] pero devuelve el index en vez del elemento.

Tambien se detiene cuando encuentra el primer elemento que "pase la prueba".

```js
const numbers = [2,9,3,5,1,8];
const indexOfThree = numbers.findIndex(n => n === 3);

console.log(indexOfThree);
// 2
```

## ```reduce()```

Este metodo toma un callback con al menos dos argumentos. Un acumulador y el elemento actual.

Por cada iteracion, el valor retornado es pasado como argumento acumulador a la siguiente iteración.

```js
const numbers = [1,2,3,4,5,6];
const sum = numbers.reduce((acc, n) => acc + n);

console.log(sum)
// 21
```

## ```some()```

^526ec4

Toma una función con una prueba y devuelve true si alguno de los elementos "pasa la prueba".

```js
const numbers = [1,2,3,4,5,6];
const hasAboveThree = numbers.some(n => n > 3);

console.log(hasAboveThree)
// true
```

## ```every()```

Similar al [[#^526ec4 | Some()]], toma una funcion con una prueba y devuelve true si todos los elementos "pasan la prueba".


```js
const numbers = [1,2,3,4,5,6];
const allAboveThree = numbers.every(n => n > 3);

console.log(allAboveThree)
// false
```

## ```includes()```

Devuelve true si el array contiene entre sus elementos el valor dado.


```js
const numbers = [1,2,3,4,5,6];
const hasTheNumberFour = numbers.includes(4);

console.log(hasTheNumberFour)
// false
```

## ```fill()```

Reemplaza todos los elementos del array por un valor dado.


```js
const numbers = [1,2,3,4,5,6];
const populateWithFour = numbers.fill(4);

console.log(populateWithFour);
// [4, 4, 4, 4, 4, 4]
```

## ```reverse()```

Da vuelta el orden de los elementos del array


```js
const numbers = [1,2,3,4,5,6];
const reversed = numbers.reverse();

console.log(reversed)
// [6,5,4,3,2,1]
```

## ```flat()```

^4caf77

Crea un nuevo array con todos sub arrays elevados al mismo nivel. Tambien se puede especificar el nivel de profundidad.


```js
const numbers = [[1,2], [[3], [4]], [5,6]];
const flattened = numbers.flat(2);

console.log(flattened)
// [1,2,3,4,5,6]
```

## ```flatMap()```

Aplica un callback a cada elemento del array y despues eleva todos los sub arrays al mismo nivel.

Funciona como un mix de [[#^4caf77 | flat()]] y [[#^fba7d9 | map()]] 

```js
const numbers = [[1], [2], [3], [4], [5] ,[6]];
const flattenedDoubles = numbers.flatMap((n) => n * 2);

console.log(flattenedDoubles)
// [1,2,3,4,5,6]
```

## ```sort()```

Se usa para ordenar los elementos de un array. Este metodo modifica el array original.

```js
const numbers = [2, 9, 3, 5, 1, 8];
numbers.sort((a, b) => a - b);

console.log(numbers);
// [1,2,3,5,8,9]
```

Si estos apuntes te sirvieron, podes [regalarme un cafe](https://cafecito.app/ferminrp) ☕ o seguirme en [twitter](https://twitter.com/ferminrp/) 🐥