Iniciamos instalando el package con

```bash
npm i ejs
```

En nuestro punto de entrada (```àpp.js```) tenemos que decirle a Express que motor de plantillas vamos a usar:

```js
app.set('view engine', 'ejs');
```

Crear una carpeta donde vamos a tener los 'componentes' de ejs como footers o headers. Por ejemplo ```/views/partials```

Por default ejs va a tomar la carpeta ```/views``` pero podemos modificar la carpeta que vamos a usar con:

```js
app.set('views', './carpeta-de-vistas');
```