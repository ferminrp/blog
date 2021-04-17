Para mostrar una vista sobre el objeto response usamos el parametro render.

```js
const controller = {
 mostrarPeliculas: (req, res) => {
 res.render('peliculas')
 }
}
```

Si queremos enviarle datos a la vista, podemos pasar como segundo parametro un objeto literal con toda la información que querramos tener disponible.

```js
const controller = {
 mostrarPeliculas: (req, res) => {
 res.render('peliculas', { } )
 }
}
```

Al objeto podemos asignarle tantas propiedades y valores como necesitemos. El nombre de cada propiedad será el que usaremos para disponer de esa información de la vista.

```js
const nombrePelicula = 'Batman';
const controller = {
 mostrarPelicula: (req, res) => {
 res.render('peliculas', { pelicula: nombrePelicula })
 }
}
```


Para poder renderizar la variable enviada desde el controlador, la encerramos en la etiqueta de impresión: ```<%= %>```. 

Como pelicula es una variable de JavaScript, podemos usar todos los métodos disponibles, sabiendo que es un string, podríamos escribir algo como ```<%= pelicula.toUpperCase() %>``` para que se muestre ‘BATMAN’.

```html
<div>
 <h1>Película Título: </h1>
 <span><%= pelicula %></span>
</div>
```