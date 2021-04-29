Antes de esto conviene ver la intro a [[Multer]]

Primero que nada vamos a tener que solicitar el module con:

```js
const multer = require('multer')
```

Multer ofrece la opcion de almacenar archivos en el disco, por lo que usaremos el metodo ```.diskStorage()```. Este método recibe como parámetro un objeto literal con dos propiedades: ```destination``` y ```filename```.


```js
const multer = require('multer')

var storage = multer.diskStorage({
	destination: function(req,file,cb) {
		cb(null,'/uploads')
	},
	filename: function (req,file,cb) {
		cb(null, file.fieldname + '-' + Date.now())
	}

})

var upload = multer({storage:storage})
```