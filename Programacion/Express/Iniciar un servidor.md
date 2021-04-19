
```js

const express = require('express'); 
const path = require('path');
const app = express(); 

app.use(express.static('public'));

app.get('/tito', (req, res) => { res.send("Hola Tito!"); });
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, '/views/index.html')); });

app.listen(3000, () => console.log('Servidor corriendo') );



```