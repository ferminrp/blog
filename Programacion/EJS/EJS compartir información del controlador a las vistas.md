Para mostrar una vista sobre el objeto response usamos el parametro render.

```
const controller = {
 mostrarPeliculas: (req, res) => {
 res.render('peliculas')
 }
}
