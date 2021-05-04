https://twitter.com/SimonHoiberg/status/1389481427302035457?s=09

14 metodos de arrays en JS para hacernos la vida mas fácil

## ```map()```

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

Es similar al metodo [[#^261f9e]] pero solo devuelve un elemento.

El metodo se detiene cuando encuentra el primer elemento que "pase la prueba".

Si no encuentra ninguno, devuelve undefined.

![Image](https://pbs.twimg.com/media/E0ht_eZXsAM7pZf?format=png&name=small)

## ```findIndex()```

Es muy similar al metodo [[#^df2974]] pero devuelve el index en vez del elemento.

Tambien se detiene cuando encuentra el primer elemento que "pase la prueba".

![Image](https://pbs.twimg.com/media/E0ht_e5XsAUusSz?format=png&name=small)

## ```reduce()```

Este metodo toma un callback con al menos dos argumentos. Un acumulador y el elemento actual.

Por cada iteracion, el valor retornado es pasado como acumulador a 