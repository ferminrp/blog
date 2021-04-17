Si tenemos partes del código que sabemos que se repiten, podemos modularizarlo y partirlo en distintos archivos ```.ejs``` dentro de la carpeta ```/views/partials```.

Para llamar / usar esos modulos en nuestros archivos, necesitamos usar la función include.

```html
<!-- views/home.ejs -->
<!DOCTYPE html>
<html>
 <%- include('./partials/head') %>
 <body>
 <header>
 <div class="top-header">
```