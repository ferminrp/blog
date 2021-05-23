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
		return
	}
})
```