---
Sources: ["https://www.w3.org/wiki/JavaScript_best_practices"]
---

Algunas buenas prácticas para tener en cuenta cada vez que use [[Javascript]].

- [[#^a16fce | Llamar las cosas por su nombre]]

## Llamar las cosas por su nombre

^a16fce

Las variables y funciones tienen que tener nombres cortos, legibles y fáciles.

Ni ```x1``` ni ```incrementorForMainLoopWhichSpansFromTenToTwenty```

Los nombres tienen que ser fáciles de entender y dar una idea de lo que esta pasando.

Tambien se puedeoptar por "*Hungarian Notation*" que diga al principio del nombre que tipo de variable es. Por ejemplo, la string ```apellido``` seria ```sApellido```. Tambien tendriamos, por ejemplo, el objeto ```oMascota```.

## Evitar variables globales

Cada archivo JavaScript incluido en la página corre en el mismo scope. Si tenes variables globales definidas, scripts que vengan despues del tuyo que contengan la misma variable o nombres de funcion van a sobre escribir o leer tus variables.

Una forma de evitar que tus variables se sobre escriban es teniendolas dentro de un objeto literal.

Entonces en vez de: 

```js
var current = null;
function init(){...}
function change(){...}
function verify(){...}
```

Tenemos algo como:

```js
var myNameSpace = {
  current:null,
  init:function(){...},
  change:function(){...},
  verify:function(){...}
}
```

Tambien, para evitar estar escribiendo name:function() too el tiempo podemos envolver todo en una función.

Si queremos aparte definir alias para algunas functiones, podemos agregar un objeto en el return{...}

```js
myNameSpace = function(){
  var current = null;
  function init(){...}
  function change(){...}
  function verify(){...}
  return{
    init:init,
    set:change
  }
}();
```

De esta manera cuando llamamos a ```myNameSpace.set()``` estamos llamando en realidad al metodo ```change()```

## Mantener un estilo estricto

La manera mas fácil de controlar la calidad sintactica de tu código es pasandolo por [JSLint](http://www.jslint.com/) para validarlo.

Mantener un estilo limpio y ordenado hace que sea mas fácil entender de donde vienen los bugs y hacer un mejor handover a otros devs.

## Comentar lo necesario, no mas

Los comentarios son los mensajes que dejamos a futuros developers o a nosotros mismos en el futuro.

El código deberia explicarse solo pero los comments no molestan a nadie.

Siempre usar ```/* */``` en vez de single line  ```//``` que se puede romper si alguien usa un minifier.

## Evitar mezclar tecnologias

## Usar shortcut notation solo si tiene sentido hacerlo

## Modularizá - Una función por tarea

## Mejora progresivamente

## Evita mucha anidación

## Optimiza los loops

## Evita el acceso al DOM lo máximo posible

## No rendirse a los caprichos de cada browser

## No confiar nada de información

## Usa JS para dar funcionalidad, no crear contenido

## Construi sobre las bases de los grandes

## Codigo en desarrollo no es codigo en producción