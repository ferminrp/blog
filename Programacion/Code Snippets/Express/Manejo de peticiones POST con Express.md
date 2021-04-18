Manejar peticiones POST Comúnmente usamos el método post para: 
- Enviar información sensible al servidor. 
- Crear un nuevo recurso. 

Cuando definimos una ruta podemos hacerlo directamente sobre la ejecución de Express, implementar un sistema de ruteo y también incorporar controladores que se encarguen de manejarlas. 

En todos los casos las rutas recibirán dos parámetros: 
- Un string con la ruta que estaremos procesando. 
- Un callback donde definiremos qué lógica ejecutaremos cuando el cliente pida esa ruta.

En un contexto en donde quisiéramos agregar una nueva película a nuestro sistema, tendríamos que crear dos rutas: una que muestre el formulario de creación y otra que se encargue de procesar la información.

```js
// ruta que envía un formulario a la vista → GET
router.get('/pelicula/crear', (req,res) => {res.render('crear')});
// ruta que procesa la información del formulario → POST
router.post('/pelicula/crear', (req,res) => {...});
```

💡 Los nombres de las rutas pueden ser iguales porque cada una está implementando un método diferente.

Para enviar peticiones por POST es necesario tener un formulario. Para que ese formulario envíe los datos, debemos configurar dos propiedades: 

- Method → Define el método HTTP que usaremos para enviar la información, en este caso es POST. Si no configuramos el method, por defecto será GET. 
- Action → Define la ruta a donde viajará esa información para ser procesada. Si no configuramos el action, por defecto sería la misma URL donde se encuentra el formulario

```html
<form method="POST" action="/pelicula/crear">
 ...
</form> 
```

Para poder trabajar con los datos que se envían desde el formulario es necesario configurar el entorno de nuestra aplicación para que sea capaz de capturar esa información. Dentro de ```app.js``` tendremos que agregar:

```
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 