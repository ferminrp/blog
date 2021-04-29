Antes de esto conviene ver la intro a [[Multer]] y la [documentación oficial](http://expressjs.com/en/resources/middleware/multer.html).

Primero que nada vamos a tener que solicitar el module con:

```js
const multer = require('multer')
```

Multer ofrece la opcion de almacenar archivos en el disco, por lo que usaremos el metodo ```.diskStorage()```. Este método recibe como parámetro un objeto literal con dos propiedades: ```destination``` y ```filename```.


```js
const multer = require('multer')

var storage = multer.diskStorage({
	// destination permite definir la carpeta donde se va a almacenar el archivo
	destination: function(req,file,cb) {
		cb(null,'/uploads')
	},
	// filename permite indicar con que nombre se guardara ese archivo en el servidor
	filename: function (req,file,cb) {
		cb(null, file.fieldname + '-' + Date.now())
	}

})

var upload = multer({storage:storage})
```

### destination

En destination usaremos el callback (cb) para definir la carpeta en donde queremos almacenar los archivos. El primer parámetro sera ```null```, el segundo, la ruta hacia la carpeta de destino. Si no se proporciona ningún destino, se utiliza el directorio predeterminado del sistema operativo para archivos temporales.

### filename

En filename, usamos el callback (cb) para definir el nombre con el que guardaremos el archivo. El primer parámetro será ```null```, el segundo, el nombre del archivo. Por ejemplo, podemos usar la variable ```fle``` en el parquete ```path``` para crear el nombre del archivo, junto con el metodo ```extname()``` del paquete, psándole como parámetro el nombre original del archivo para que nos devuelba únicamente su extensión.

## Configurando la ruta

Habiendo indicado donde se almacenaran y como se llamaran los archivos que estamos subiendo al servidor. Ahora tenemos que configurar la ruta que se encarga de manejar la peticion de la subida de archivos, es decir, la ruta que indicamos en nuestro action del formulario.


```js
/*
const multer = require('multer')

var storage = multer.diskStorage({
	// destination permite definir la carpeta donde se va a almacenar el archivo
	destination: function(req,file,cb) {
		cb(null,'/uploads')
	},
	// filename permite indicar con que nombre se guardara ese archivo en el servidor
	filename: function (req,file,cb) {
		cb(null, file.fieldname + '-' + Date.now())
	}

})

var upload = multer({storage:storage})*/

app.post('/register', upload.single('avatarFile'), (req, res) => {
	console.log(req.file) // nos devuelve un objeto con la informacion del archivo
	res.send('Archivo subido correctamente')
})

```

### ```.single()```

Para indicar que vamos a subir un archivo usamos ```.single(nombre)```, donde nombre tiene que coincidir con el atributo name del input del formulario.

### ```.array()```

Si vamos a subir mas de un archivo usamos ```.array(nombre)``` donde nombre tiene que coincidir con el nae del input del formulario. El input tambien tiene que tener la propiedad multiple.

```html
<input type="file" name="avatarFiles" id="file" multiple>
```


```js
var upload = multer({storage:storage})

app.post('/register', upload.array('avatarFiles'), (req, res, next) => {
	console.log(req.files) // nos devuelve un objeto con la informacion del archivo
	res.send('Archivos subido correctamente')
})
```
