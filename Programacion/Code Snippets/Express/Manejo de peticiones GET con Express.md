💡 Las peticiones que se hacen por GET son todas aquellas donde la información viene directamente en la URL a la que se hace el pedido.

Comúnmente usamos el método GET para: 
- Retornar vistas. 
- Retornar archivos. 
- Retornar datos.

Cuando definimos una ruta podemos hacerlo directamente sobre la ejecución de Express, implementar un sistema de ruteo y también incorporar controladores que se encarguen de manejarlas. 

En todos los casos las rutas recibirán dos parámetros: 

- Un string con la ruta que estaremos procesando. 
- Un callback donde definiremos qué lógica ejecutaremos cuando el cliente pida esa ruta.


```js
// Enrutador
router.get("/peliculas", (req, res) => { 
	res.render('peliculas')
	});

// Enrutador con controlador
const controller = {
 todas: (req, res) => { 
	 res.render('peliculas'
	)}
};

router.get("/peliculas", controller.todas );

// Sobre la ejecución de Express
app.get("/peliculas", (req, res) => { 
	res.render('peliculas')
	} );
```