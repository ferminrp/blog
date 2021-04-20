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

// código del archivo productos.js en la carpeta routes router.get('/', (req, res) => { res.send('Index de productos'); });