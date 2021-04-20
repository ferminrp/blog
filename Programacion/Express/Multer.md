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

