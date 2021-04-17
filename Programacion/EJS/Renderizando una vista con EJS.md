Las vistas EJS consisten básicamente en código HTML mezclado con tags de EJS. 

Las vistas se colocan, por lo general, en la carpeta views y llevan la extensión .ejs. 

Express tiene dos métodos para renderizar vistas: 

```app.render()```, se usa para renderizar la vista primero y después pasar el HTML a una función callback que se encargue de enviarla. 

```res.render()```, se encarga de realizar los dos pasos, renderizar la vista y envía el HTML resultante como respuesta.

![[Pasted image 20210417103304.png]]

### Renderizando con ```res.render()```

Para indicar qué vista vamos a renderizar y enviarla al cliente, usamos el método ```res.render()```.

El método render se encuentra dentro del objeto response de la petición y como parámetro debemos enviar un string, con el nombre de la vista que queremos renderizar. 

⚠️ Importante: cuando le pasamos el nombre del archivo, no hace falta aclararle la carpeta en donde está almacenada esa vista. Tampoco hace falta aclarar la extensión del archivo. 

Express se encargará de agregar la carpeta y la extensión en función de lo que hayamos configurado con ```app.use()``` en nuestro punto de entrada (normalmente app.js)

```js
app.get('/', (req, res) => { res.render('index') } }
```

### Accediendo a recursos estáticos

Los recursos estáticos son aquellos que no pasan por el proceso de renderizado y que son cargados directamente por el cliente. Hablamos de imágenes, archivos CSS, archivos de JavaScript, etc. 

Para poder acceder a ellos en nuestras vistas, hace falta aclararle a Express dónde vamos a estar almacenando esos recursos.

```
app.use(express.static('public');
```

