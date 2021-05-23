```html
<script src="./main.js"></script>
```


```js
const app = Vue.createApp({
	data: function() {
		return {
			product: 'socks'
		}
	}
});

const mountedApp = app.mount('#app')
```