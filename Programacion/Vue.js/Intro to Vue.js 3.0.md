# Intalación

Para iniciar con Vue.js vamos a tener que instalarlo. Para eso podemos usar los CDN en su última version, podemos encontrar los snippets actualizados en la [documentación oficial](https://vuejs.org/v2/guide/installation.html#CDN).

```html
<script src="https://unpkg.com/vue@next"></script>
```

# Crer la Vue app

Dentro de nuestro main.js vamos a necesitar iniciar la vue app, para eso usamos un snippet así:

```js
const app = Vue.createApp({
	data: function() {
		return {
			product: 'socks'
		}
	}
})
```

- El app se crea como una constante con la función Vue.createApp
- Como parámetros de esa función vamos a pasar un object.
- Dentro de ese object vamos a crear una función data sin arguments.
- La función data retorna un objeto.

# Montar la aplicación

A esta altura en nuestro desarrollo vamos a tener el código para la aplicación en main.js, por lo que en nuestro html vamos a tener un snippet así:

```html
<script src="./main.js"></script>
```

Para montar esa aplicación que esta en main.js vamos a crear un nuevo script que sea algo así:

```html
<script>
const mountedApp = app.mount('#app')
</script>
```
