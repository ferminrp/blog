```html
<div class="product-info">
	<h1>{{ product }}</h1>
	<p v-if="inStock">In Stock</p>
	<p v-else>Out of Stock</p>
</div>
```


```js
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})
```

Si solo queremos switchear entre mostrar o no mostrar un elemento, podemos usar v-show

```html
<div class="product-info">
	<h1>{{ product }}</h1>
	<p v-show="inStock">In Stock</p>
</div>
```