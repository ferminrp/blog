Su responsabilidad es la de atender los distintos pedidos del cliente y generar comunicación entre las vistas y los modelos.

En la carpeta raíz del proyecto crearemos la carpeta ```/controllers```. Dentro almacenaremos un controlador por cada recurso o entidad que tenga la aplicación. 

Las entidades pueden ser cosas como usuarios, productos, carritos de compras, etc. Cada controlador será un módulo que exportaremos, para luego requerirlo en donde lo necesitemos.

### Creando un controlador

Crearemos un archivo para manejar nuestro recurso. Para nombrar los archivos se estila empezar con el nombre del recurso seguido de la palabra Controller usando el estilo camelCase.

Lo primero que hay que hacer es definir una variable en el archivo del controlador del recurso y asignarle un objeto literal.

```js
const controlador = {};
```

Dentro del objeto, iremos definiendo los métodos que se encargarán de manejar cada pedido en particular.

```js
const controlador = { 
	index: //mostrar listado de productos, 
	show: //mostrar detalle de un producto, 
	create: //enviar datos para agregar un producto, 
};
```

De no usar controladores, en el router hubiesemos escrito el callback directamente. Algo como:

```js
// código del archivo productos.js en la carpeta routes 
router.get('/', (req, res) => { 
	res.send('Index de productos'); 
});
```

Al trabajar con el patrón MVC, podemos apoyarnos en sus reglas y dividir las responsabilidades de nuestros archivos. Siguiendo con esa línea, serán los métodos de cada controlador los que recibirán los datos y enviarán la información correspondiente.

De modo que quitaremos el callback que habíamos definido en las rutas y lo escribiremos en el método index del controlador de productos. 

```js
const controlador = { 
	index: (req, res) => { 
		res.send('Index de productos'); 
		}, 
	};
```

### Implementar un controlador

Primero tenemos que exportar la variable del controlador. Para eso al final del archivo del controlador pondremos:

```js
module.exports = controlador;
```

Para empezar a usar los métodos que definimos, debemos requerir el módulo dentro del archivo de ruteo del recurso, en este caso productos.js, dentro de la carpeta routes.

```js
const productosController = require('../controllers/productosController');
```

Con nuestro módulo ya visible en el archivo es momento de terminar de configurar aquella ruta a la que le quitamos el callback. 

La misma va a seguir recibiendo ese callback, pero ahora no va a ser su responsabilidad definirlo. Para eso llamaremos al método index del controlador de productos y le pasaremos ese método como segundo parámetro. Al ser un callback no le escribimos los paréntesis.

```js
router.get('/', productosController.index);
```

### Template final

**Controller:**

```js
const controlador = {
	 index: (req, res) => {
		 res.send('Index de productos');
		 },
	};
module.exports = controlador;
```

**Router:**
```js
const productosController = require('../controllers/productosController');
router.get('/', productosController.index);
```