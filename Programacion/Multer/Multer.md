Multer es un paquete de npm que se utiliza para procesar archivos del lado del servidor. Este paquete es usado generalmente como un middleware y no solo nos va a permitir subir archivos al servidor, sino que también nos permite elegir en qué ubicación del servidor queremos que se almacenen estos archivos y el nombre con el que se guardará cada uno de ellos.

### Instalacion

```bash
npm i multer
```

### Requiriendo multer en el router

```js
const multer = require('multer');
```

### Configurando el disco de almacenamiento de Multer

Con Multer dentro del archivo de rutas, lo siguiente que tendremos que hacer es configurar qué carpeta dentro del servidor almacenará los archivos subidos y, a su vez, establecer el nombre que recibirá cada archivo procesado. Así:

```js
const storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 
     cb(null, './public/images/avatars'); 
  }, 
  filename: function (req, file, cb) { 
     cb(null, \`${Date.now()}\_img\_${path.extname(file.originalname)}\`);  } 
})
```

*Para generar el nombre de archivo estamos ayudándonos del paquete PATH, para que el mismo, gracias a su método extname, nos permita obtener la extensión del archivo original.*

### Definir la variable que servira como middleware

```js
const uploadFile = multer({ storage });
```

*La función ```multer()``` toma como argumento un objeto literal que trae la variable que guarda las configuraciones realizadas en el paso anterior.*

### Implementar Multer como middleware

En aquella ruta donde queramos procesar archivos con Multer, tendremos que pasar a este como middleware:

```js
router.post('/register', uploadFile.single('avatar'), usersController.create);
```

Observar cómo, en medio del nombre de la ruta y el método del controlador, traemos a la variable definida en el punto anterior. Y sobre la misma estamos ejecutando el método ```single()```, el cual toma como argumento el nombre de input que enviará la imagen que deseamos procesar.