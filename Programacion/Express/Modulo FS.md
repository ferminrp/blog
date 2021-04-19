Es el modulo para lectura y escritura de archivos.

Lo instalamos con:

```bash
npm i fs
```

Lo requerimos con:

```js
const fs = require('fs');
```
<br>
<br>

### ```.readFileSync()```

Es un método que trae el paquete nativo file system que nos permite recuperar datos de un archivo para poder usarlos. 

Como primer parámetro recibe la ruta del archivo que queremos leer.

```js
const fs = require('fs'); 
let sitcoms = fs.readFileSync('sitcoms.txt');
```

Para poder decodificar los datos que el método devuelve es fundamental pasarle un segundo parámetro aclarando el tipo de encoding.

```js
let sitcoms = fs.readFileSync('sitcoms.txt', 'utf-8');
```

⚠️ Si estamos leyendo un archivo JSON, hay que convertir ese string en un objeto literal para poder manipular los datos usando el método ```JSON.parse()```.

### ```JSON.parse()```

Pasa los datos en formato JSON a un objeto literal para poder ser manipulado con JavaScript.

```js
let users = fs.readFileSync('users.json', 'utf-8'); 
let usersJson = JSON.parse(users);
```

### ```.writeFileSync()```

Es un método que trae el paquete nativo file system que nos permite escribir archivos. Recibe dos parámetros:

- El primero, el archivo en donde queremos escribir.
- El segundo, el contenido que queremos escribir.

Algo importante a tener en cuenta es que, si le pasamos el nombre de un archivo que aún no existe, el mismo método se encargará de crearlo.

Otra cosa importante a tener en cuenta es que este método borra todo el contenido existente y lo reemplaza por el nuevo.

```js
const fs = require('fs'); 
fs.writeFileSync('estrenos-2020.txt','Titanic 2');
```