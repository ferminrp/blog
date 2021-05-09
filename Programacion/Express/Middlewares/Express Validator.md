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

**El metodo ```check()```**

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

**Tipos de validaciones**

```js
check('campo')
 .notEmpty() // Verifica que el campo no esté vacío
 .isLength({ min: 5, max: 10 }) // Verifica la longitud de los datos
 .isEmail() // Verifica que sea un email válido
 .isInt() // Verifica que sea un número entero
```

Como pueden ver, podemos tener más de una validación para el mismo campo. Si ese es el caso, simplemente ejecutamos un método seguido del otro. La lista completa de validaciones puede verse [aquí](https://github.com/validatorjs/validator.js#validators).

**Mensajes de error **

Además de las validaciones, Express Validator nos permite definir el mensaje que recibirá el usuario por cada validación que falle. 

Para implementar los mensajes, utilizamos el método ```withMessage()``` a continuación de cada validación.

```js
check('name')
 .notEmpty().withMessage('Debes completar el nombre')
 .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5
caracteres')

```

**Cortando la cadena de validación**

En algunos casos vamos a querer cortar la validación, ya que si por ejemplo un campo está vacío, no tiene sentido verificar si es un e-mail válido. 

Si no cortamos la validación, el usuario recibirá todos los errores juntos en lugar de solo el que corresponda. 

Para esos casos, podemos implementar el método ```bail()```.

```js
check('email')
 .notEmpty().withMessage('Debes completar el email').bail()
 // En caso de que la primera validación falle,
 // las siguientes no se ejecutan para ese campo.
 .isEmail().withMessage('Debes completar un email válido')

```

**El array de validaciones completo **

En resumen, cuando terminemos de escribir nuestras validaciones, tendremos un array, con un elemento por campo, con todas sus validaciones.

```js
const validateRegister = [
 check('name')
	 .notEmpty().withMessage('Debes completar el nombre').bail()
	 .isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),
	
 check('email')
	 .notEmpty().withMessage('Debes completar el email').bail()
	 .isEmail().withMessage('Debes completar un email válido'),
	
 check('password')
	 .notEmpty().withMessage('Debes completar la contraseña').bail()
	 .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga')
]

```

### 3. Agregarlo como middleware de la ruta que procesa el formulario. 

Terminadas nuestras validaciones es hora de implementarlas y para eso las agregaremos en la ruta que procese el formulario que queremos validar. Este middleware, se ubica entre la ruta y la acción del controlador.

```js
const validateRegister = [ … ];
// Procesamiento del formulario de creación
router.post('/', validateRegister, userController.processRegister);
```


### 4. Verificar si hubo errores en la validación desde el controlador. 

El primer paso va a ser requerir el módulo y usando desestructuración, pedir el método ```validationResult```.

```js
const { validationResult } = require('express-validator' );
```

El segundo paso ocurrirá dentro del método del controlador que se encarga de procesar el formulario. Allí guardaremos, en la variable errors, la ejecución del método validationResult, pasándole como parámetro el objeto request.

```js
let errors = validationResult(req);
```

**El método isEmpty()**

El método isEmpty() nos permite saber si hay errores de validación o no. 

Si no hay errores, podremos seguir sin inconvenientes con la acción que deba realizar ese controlador, por ejemplo, crear un nuevo usuario. 

En caso contrario, volveremos al formulario con los errores para el usuario.

```js
 register: (req, res) => {
	 let errors = validationResult(req);

	 if (errors.isEmpty()) {
		// No hay errores, seguimos adelante
	 } else {
		// Si hay errores, volvemos al formulario con los mensajes
	 }
 },
```

**El método mapped()**

El método ```mapped()``` nos permite enviar los errores a la vista como un objeto. Ese objeto contendrá una propiedad con el primer error de cada campo. 

Para enviar los errores a la vista, simplemente los agregamos como segundo parámetro al método ```render()```. 

Es importante enviar también los contenidos de req.body, ya que queremos preservar los datos completados por el usuario al volver al formulario.

```js
 if (errors.isEmpty()) {
	 // No hay errores, seguimos adelante
	 } else {
	 // Hay errores, volvemos al formulario con los mensajes
	 res.render('register', { errors: errors.mapped(), old: req.body });
 }

```

**El objeto de errores**

Por cada campo con error, el objeto tendrá una propiedad cuyo nombre será igual al atributo name del campo. 

Cada error contendrá: el mensaje (msg), el nombre del campo (param), el valor ingresado por el usuario (value) y de donde vino (body para formularios).

```js
{
 email: {
 msg: 'Debes completar un email válido',
 param: 'email',
 value: 'unEmail',
 location: 'body'
 },
 password: {
 msg: 'La contraseña debe ser más larga',
 param: 'password',
 value: '1234',
 location: 'body'
 }
}
```

### Enviar los errores a la vista

Haciendo uso de EJS, podremos preguntar si un campo determinado tiene errores. Si ese es el caso, podremos mostrar el mensaje de error. 

Es importante tener en cuenta que la primera vez que se cargue el formulario no habrá errores, y por lo tanto esa variable estará vacía. Para evitar problemas, siempre debemos preguntar si la variable de errores existe antes de intentar mostrar un error. 

El código podría verse de la siguiente manera:

```html
<label for="email">Correo electrónico:</label>
<input type="email" name="email" id="email">
<% if (locals.errors && errors.name) { %>
 	<p class="feedback"><%= errors.name %></p>
<% } %>

```