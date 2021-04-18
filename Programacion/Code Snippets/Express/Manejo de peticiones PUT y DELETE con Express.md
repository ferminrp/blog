La información que viaje como petición PUT y DELETE debe hacerlo a través de un formulario. 

⚠️ Los métodos PUT y DELETE no son soportados nativamente por los formularios y deberemos utilizar métodos alternativos para enviar la información.

## PUT

Usamos el método put para: 
- Enviar información sensible al servidor de manera segura. 
- Modificar un recurso existente.

Cuando definimos una ruta podemos hacerlo directamente sobre la ejecución de Express, implementar un sistema de ruteo y también incorporar controladores que se encarguen de manejarlas. En todos los casos las rutas recibirán dos parámetros: 

- Un string con la ruta que estaremos procesando. 
- Un callback donde definiremos qué lógica ejecutaremos cuando el cliente pida esa ruta.

En un contexto en donde quisiéramos modificar datos de una película almacenada en nuestro sistema, tendríamos que crear dos rutas: una que muestre el formulario de edición y otra que se encargue de procesar la información. 

En ambas rutas, vamos a definir un parámetro que nos ayude a identificar al recurso único que estamos queriendo modificar. Generalmente, se usa el id.

```js
// ruta que envía un formulario de edición a la vista → GET
router.get('/pelicula/:id/editar', (req,res) => {res.render('editar')});
// ruta que procesa la información del formulario → PUT
router.put('/pelicula/:id/editar', (req,res) => {...});
```

## DELETE

Usamos el método delete para:

- Eliminar un recurso existente.
- 
En un contexto en donde quisiéramos eliminar una película almacenada en nuestro sistema, tendríamos que crear una ruta que se encargue de buscar ese recurso y eliminarlo. 

En la ruta deberemos definir un parámetro que nos ayude a identificar el recurso que estamos queriendo eliminar. Generalmente, se usa el id.

// ruta que procesa la información del formulario → DELETE
router.delete('/pelicula/:id/eliminar', (req,res) => {...});