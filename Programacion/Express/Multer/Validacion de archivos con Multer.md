Antes que esto conviene ver Introduccion a [[Multer | Introduccion a Multer]] y [[Subiendo archivos con Multer]].

Cuando subimos archivos a un servidor, es importante validarlos antes de permitir que los mismos sean almacenados.

### Errores

Cuando tenemos un error, Multer delega el mismo a Express, y podemos mostrarlo al usuario de la siguiente manera:

```js
var multer = require('multer')
var upload = multer().single('avatarFile')

app.post("/register", (req, res) => {
	upload(req,res,(err) =)
})
```