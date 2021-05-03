Express Validator nos permite manejar de manera relativamente sencilla, todas las validaciones de nuestros formularios desde el lado del back-end.

## Express Validator paso a paso 

Express Validator nos permitirá validar que la información que nos llega desde los formularios sea la que esperamos. Los pasos que debemos seguir para implementarlo son: 
1. Instalar Express Validator. 
2. Crear un array con las validaciones de cada formulario. 
3. Agregarlo como middleware de la ruta que procesa el formulario. 
4. Verificar si hubo errores en la validación desde el controlador. 
5. Enviar los errores a las vista.

### En el Formulario

Antes de empezar con las validaciones, es importante tener en cuenta cómo están armados nuestros formularios. A la hora de escribir las validaciones, tomaremos como referencia la propiedad name de cada campo.

![[Formularios con express validator.png]]

### 1. Instalar Express Validator

```bash
npm i express-validator
```

### 2. Crear un array con las validaciones de cada formulario. 

Ahora que tenemos el módulo instalado, vamos a requerirlo donde vayamos a realizar las validaciones. Podemos hacerlo directamente sobre el archivo de rutas o crear nuestras validaciones en un archivo aparte. 

En cualquiera de los casos, el primer paso será requerir el módulo y, haciendo uso de la desestructuración, pedir el método check.

```js
const { check } = require('express-validator');
```

El segundo paso será crear una variable donde almacenaremos el conjunto de validaciones que realizaremos sobre el formulario.

```js
let validateRegister = [] // validaciones aquí
```

El metodo check
El método check() nos permite agregar validaciones para cualquiera de los campos del formulario. Como parámetro recibe el nombre del campo a validar. 

Si por ejemplo queremos validar el campo name, el método quedaría así:

```js
const validateRegister = [ check('name') ]
```

Suponiendo que quisiéramos validar que el campo no esté vacío, sobre el método anterior, ejecutamos el método notEmpty() de la siguiente manera:

```js
const validateRegister = [ 
	check('name').notEmpty() 
]
```