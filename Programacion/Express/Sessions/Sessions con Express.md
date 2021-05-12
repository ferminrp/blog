Primer paso va a ser instalar el paquete ```express-session```.

```bash
npm i express-session --save
```

Una vez hecho en ```app.js``` vamos a tener que hacer el require y instalarlo como middleware a nivel de aplicación.

```js
let session = require('express-session');

app.use(session({secret: "Shh, es un secreto!"}));
```

Una vez hecho esto, desde cualquier controller puedo guardar información en el session.

```js
req.session.idioma = "Español";
```

O leerlo con:

```js
let idioma = req.session.idioma;
```