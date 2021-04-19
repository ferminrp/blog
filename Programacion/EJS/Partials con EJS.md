Instalar ejs con `npm i ejs`

En app.js dejamos despues de definir el puerto

```js
app.set('view engine', 'ejs')
```

En app.js en vez de res.send, vamos a usar res.render() y para las rutas en vez de ```./views/home``` usamos `home`


Crear en public una carpeta partials, dentro de esa los componentes, con la extension .ejs, por ejemplo `header.ejs`

A los archivos dentro de `/views` pasarlos a .ejs

En las páginas usamos:

```html
 <%- include('partials/header') %>
```

