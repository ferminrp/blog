💡 A través del sistema de ruteo de Express podemos definir, de manera sencilla, cómo va a responder nuestra aplicación según el método HTTP y la ruta que esté llegando al servidor.

Las rutas pueden ser muy complejas y Express nos permite organizarlas a través de un sistema de ruteo.

En la carpeta routes guardaremos, por cada recurso, un archivo js que administre los pedidos a las rutas que tengan que ver con ese recurso. Cada archivo js será un módulo que exportaremos, para luego requerir dentro del entry point de la aplicación (normalmente ```app.js```)

### Creando un archivo de rutas

Siempre que creemos un archivo de rutas tenemos que arrancar por:

```js
const express = require('express'); 
const router = express.Router();
```

El próximo paso será definir todas las rutas que consideremos necesarias para manejar distintos tipos de pedidos que recibirá este recurso. 

Por cada una de ellas utilizaremos el objeto router seguido del método que estaremos procesando.

```js
// Ruta raíz de los productos / Inicio
router.get('/', (req, res) => {
 	// código
});
// Ruta que muestra el detalle de un producto
router.get('/detalle/:id', (req, res) => {
 	// código
});
```

Para que las rutas estén luego disponibles, en la última línea del archivo, exportamos todo el contenido de router para hacerlo visible.

```js
// Ruta raíz de los productos / Inicio
router.get('/', (req, res) => {
 	// código
});
// Ruta que muestra el detalle de un producto
router.get('/detalle/:id', (req, res) => {
	 // código
});
module.exports = router;
```

### Implementando las rutas

Lo haremos dentro de ```app.js``` , creando una constante y requiriendo el módulo que contiene las rutas.

```js
const rutasProductos = require('./routes/productos');
```

Luego usaremos el método use() ingresando:

- Como primer parámetro un string que será la ruta base del recurso, en este caso: productos. Al ser una ruta debe empezar con la ```/```. 
- Como segundo parámetro, la constante que definimos anteriormente.

```js
app.use('/productos', rutasProductos);
```

⚠️ Es importante tener en cuenta que la ruta final será la concatenación de la parte que está en app.js:

```js
app.use('/productos', rutasProductos);
```

En app.js + lo siguiente en router

```js
router.get('/detalle/:id', (req, res) => { // código });
```

Tendrian como resultado

```js
/productos/detalle/:id
```