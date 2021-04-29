Antes que esto conviene ver Introduccion a [[Multer | Introduccion a Multer]] y [[Subiendo archivos con Multer]].

Cuando subimos archivos a un servidor, es importante validarlos antes de permitir que los mismos sean almacenados.

### Errores

Cuando tenemos un error, Multer delega el mismo a Express, y podemos mostrarlo al usuario de la siguiente manera:

```js
var multer = require('multer')
var upload = multer().single('avatarFile')

app.post("/register", (req, res) => {
	upload(req,res,(err) => {
		if(err) {
			req.status(400).send("algo salio mal");
		}
		res.send(req.file);
	})
})
```

### Validar la carga del archivo

Para poder saber si se envio o no un archivo, podemos analizar el objeto ```req.file```:

```js

var upload = multer({storage:storage})

app.post('/register', upload.single('avatarFiles'), (req, res, next) => {
	const file = req.file
	if(!file){
		const error = new Error('Por favor seleccione un archivo')
		error.httpStatusCode = 400
		return next(error)
	}
	res.send(file)
	
})

```