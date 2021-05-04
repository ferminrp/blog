---
Source: "https://twitter.com/SimonHoiberg/status/1389481427302035457?s=09"
---

14 metodos de arrays en JS para hacernos la vida mas fácil

## ```map()```

^fba7d9

El metodo map crea un nuevo array.

Dentro del array, lo llena con el resultado de una funcion callback que pasa por cada elemento del array viejo.

![Image](https://pbs.twimg.com/media/E0ht_ezX0AQBK9c?format=png&name=small)

## ```forEach()```

Ejecuta una función, una vez por cada elemento en el array.

Esta función callback no espera un resultado o return.

![Image](https://pbs.twimg.com/media/E0ht_egWYAEqff5?format=png&name=small)

## ```filter()```

^261f9e

Crea un nuevo array que contiene unicamente los elemento del viejo que "pasen la prueba" de la función callback.

![Image](https://pbs.twimg.com/media/E0ht_evXMAMbm7S?format=png&name=small)

## ```find()```

^df2974

Es similar al metodo [[#^261f9e | filter()]] pero solo devuelve un elemento.

El metodo se detiene cuando encuentra el primer elemento que "pase la prueba".

Si no encuentra ninguno, devuelve undefined.

![Image](https://pbs.twimg.com/media/E0ht_eZXsAM7pZf?format=png&name=small)

## ```findIndex()```

Es muy similar al metodo [[#^df2974 | find()]] pero devuelve el index en vez del elemento.

Tambien se detiene cuando encuentra el primer elemento que "pase la prueba".

![Image](https://pbs.twimg.com/media/E0ht_e5XsAUusSz?format=png&name=small)

## ```reduce()```

Este metodo toma un callback con al menos dos argumentos. Un acumulador y el elemento actual.

Por cada iteracion, el valor retornado es pasado como argumento acumulador a la siguiente iteración.

![Image](https://pbs.twimg.com/media/E0ht_ezX0AM-ahP?format=png&name=small)

## ```some()```

^526ec4

Toma una función con una prueba y devuelve true si alguno de los elementos "pasa la prueba".

![Image](https://pbs.twimg.com/media/E0ht_ecXEAEKjLw?format=png&name=small)

## ```every()```

Similar al [[#^526ec4 | Some()]], toma una funcion con una prueba y devuelve true si todos los elementos "pasan la prueba".

![Image](https://pbs.twimg.com/media/E0ht_efXMAAmpHD?format=png&name=small)

## ```includes()```

Devuelve true si el array contiene entre sus elementos el valor dado.

![Image](https://pbs.twimg.com/media/E0ht_evXEAINrqo?format=png&name=small)

## ```fill()```

Reemplaza todos los elementos del array por un valor dado.

![Image](https://pbs.twimg.com/media/E0ht_eeWYAEHJxi?format=png&name=small)

## ```reverse()```

Da vuelta el orden de los elementos del array

![Image](https://pbs.twimg.com/media/E0ht_eaXEAMUti-?format=png&name=small)

## ```flat()```

^4caf77

Crea un nuevo array con todos sub arrays elevados al mismo nivel. Tambien se puede especificar el nivel de profundidad.

![Image](https://pbs.twimg.com/media/E0ht_ewXEAA_ZVj?format=png&name=small)

## ```flatMap()```

Aplica un callback a cada elemento del array y despues eleva todos los sub arrays al mismo nivel.

Funciona como un mix de [[#^4caf77 | flat()]] y [[#^fba7d9 | map()]] 

![Image](https://pbs.twimg.com/media/E0ht_exWEAAvCJU?format=png&name=small)

## ```sort()```

Se usa para ordenar los elementos de un array. Este metodo modifica el array original.

![Image](https://pbs.twimg.com/media/E0ht_e2XoAcDn2z?format=png&name=small)