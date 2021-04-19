```js

app.get('/productos/:id/:nombre?', function(req,res) {
	let idProducto = req.params.id;
	let nombreProducto = rew.params.nombre || 'Sin nombre';
})

```

Con el ? hacemos que sea opcional ese parametro. Sino es obligatorio.