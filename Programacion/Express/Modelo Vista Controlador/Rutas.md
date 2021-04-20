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

// Ruta raíz de los productos / Inicio
router.get('/', (req, res) => {
 	// código
});
// Ruta que muestra el detalle de un producto
router.get('/detalle/:id', (req, res) => {
 	// código
});
