Las vistas EJS consisten básicamente en código HTML mezclado con tags de EJS. 

Las vistas se colocan, por lo general, en la carpeta views y llevan la extensión .ejs. 

Express tiene dos métodos para renderizar vistas: 

```app.render()```, se usa para renderizar la vista primero y después pasar el HTML a una función callback que se encargue de enviarla. 

```res.render()```, se encarga de realizar los dos pasos, renderizar la vista y envía el HTML resultante como respuesta.

![[Pasted image 20210417103304.png]]