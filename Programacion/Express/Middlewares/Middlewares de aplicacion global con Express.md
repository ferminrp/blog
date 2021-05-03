💡 Son aquellos middlewares que queremos que se ejecuten siempre que se haga un pedido a la aplicación, sin importar a qué ruta ingrese el usuario.

Invocando el método app.use() podemos configurar un middleware que se va a ejecutar cada vez que se haga un pedido a nuestro servidor. Este método recibe un callback con tres parámetros: 
- el objeto request. 
- el objeto response. 
- la función next.

```js
app.use(function(req, res, next) { 
	... 
})
```

### ¿Qué es ```next()```?

```next()``` es un callback que se va a encargar de apilar todos los middlewares que apliquen a una misma petición y luego ejecutarlos uno tras otro. Cuando llegue al último y, si se ejecutaron correctamente, pasará al siguiente paso que es ejecutar el método del controlador que maneja esa ruta. 

Por eso siempre al terminar cada middleware, ejecutamos next.

```js
app.use(function(req, res, next) { 
	... 
	next(); 
})
```

### Ejemplo: Implementando el error 404

404 es el código de error que representa que la ruta solicitada no fue encontrada. Por lo general, es el tipo de error que recibimos cuando hemos escrito una dirección equivocada. 

Haciendo uso de los middlewares a nivel aplicación, podemos decirle a nuestra aplicación que, en caso de que una ruta no exista, se responda con ese error. 

Como este middleware se debe ejecutar solo si todas las rutas fallan, es importante que siempre esté a lo último.

```js
app.use((req, res, next) => { 
	res.status(404).render('404-page'); 
	next(); 
});
```