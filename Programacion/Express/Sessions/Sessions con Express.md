Primer paso va a ser instalar el paquete ```express-session```.

```bash
npm i express-session --save
```

Una vez hecho en ```app.js``` vamos a tener que hacer el require y instalarlo como middleware a nivel de aplicación.

```js
let session = require('express-session');

app.use(session({secret: "Shh, es un secreto!"}));
```