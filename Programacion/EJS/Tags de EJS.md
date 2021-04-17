Las vistas de ejs soportan todos los tags convencionales de html y a parte nos dan unos tags que nos permiten renderizar contenido con js.

Cuando necesitemos uqe las vistas rendericen contenido dinamico usamos las etiquetas ```<% %>``` y dentro de ellas metemos la parte dinámica.

```html
<%= user.firstname %>,
```

### La etiqueta  ```<% %>```

Nos permite incorporar código de JavaScript, como condicionales, estructuras de control de flujo, declaración de variables, etc.

Si estamos usando una estructura como un condicional o un ciclo, en el medio podemos escribir cualquier contenido HTML que queramos que se muestre o se repita.

```html
<% if(4 < 5) { %>
 <h2>El 4 es menor que el 5</h2>
<% } %>
```

![[Etiqueta de ejs.png]]

**Primer paso**

Escribimos la sentencia de js que queremos embeber en nuestra estructura general.

```js
for(let i = 1; i < 5; i++) { }
```

**Segundo paso**

Encerramos la estructura en las etiqueas de ejs una vez por linea

```js
<% for(let i = 1; i < 5; i++) { %>
<% } %>
```

**Tercer paso**

Escribimos el contenido que queremos mostrar en cada iteración.

```js
<% for(let i = 1; i < 5; i++) { %>
<p> Probando las etiquetas de EJS </p>
<% } %>
```