Es un error que envía el servidor cuando no encuentra un recurso que solicitó el cliente.

Todo sistema debe estar preparado para manejar las solicitudes erradas. Express trae consigo una respuesta automatizada para cuando el usuario solicita un contenido que ya no existe en el servidor. 

En el entry point de la aplicación —la mayoría de las veces ```app.js``` — podemos configurar esta respuesta implementando el método ```use()``` sobre la ejecución de Express.

```js
app.use((req, res, next) => { 
	... 
})
```

En este caso use() va a recibir un callback con tres argumentos: un request, un reponse y el paso siguiente a ejecutar después del callback. 

Dentro de este método, definiremos cómo va a reaccionar el sistema cada vez que el usuario quiera acceder a una ruta que no existe. 

Sobre el response implementaremos el método ```status()```, seguido del método ```render()``` para poder renderizar la vista que verá el usuario cada vez que se presente este escenario. 

⚠️ Es importante que esta ruta esté a lo último ya que solo debe actuar si todas las anteriores no lo hicieron.

```js
app.use((req, res, next) => {
 res.status(404).render('not-found');
})
```