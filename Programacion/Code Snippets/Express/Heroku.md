Crear un archivo "Procfile" en el root que contenga

```
web: node app.js

```


En app.js es importante que el port lo definamos asi:

```js
const port = process.env.PORT;

app.listen(port || 3000, () \=> {
 console.log('Example app listening on port '+ port);
});
```