---
URL: https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
---

## Step 1 — Getting Started with Fetch API Syntax

To use the Fetch API, call the `fetch` method, which accepts the URL of the API as a parameter:

```javascript
fetch(url)
```


After the `fetch()` method, include the promise method `then()`:

```javascript
.then(function() {

})
```


The `fetch()` method returns a promise. If the promise returned is `resolve`, the function within the `then()` method is executed. That function contains the code for handling the data received from the API.

Below the `then()` method, include the `catch()` method:

```javascript
.catch(function() {

});
```

The API you call using `fetch()` may be down or other errors may occur. If this happens, the `reject` promise will be returned. The `catch` method is used to handle `reject`. The code within `catch()` will be executed if an error occurs when calling the API of your choice.

To summarize, using the Fetch API will look like this:

```javascript
fetch(url)
.then(function() {

})
.catch(function() {

});
```

---

## Step 2 — Using Fetch to get Data from an API

```javascript
fetch(url)
```

 
```javascript
fetch(url)
  .then(function(data) {

    })
  })
  .catch(function(error) {

  });
```

 



In the code above, you are calling the Fetch API and passing in the URL to the Random User API. Then a response is received. However, the response you get is not JSON, but an object with a series of methods that can be used depending on what you want to do with the information. To convert the object returned into JSON, use the `json()` method.

Add the `then()` method which will contain a function with a parameter called `resp`:

```javascript
fetch(url)
.then((resp) => )
```

 



The `resp` parameter takes the value of the object returned from `fetch(url)`. Use the `json()` method to convert `resp` into JSON data:

```javascript
fetch(url)
.then((resp) => resp.json())
```

 

The JSON data still needs to be processed. Add another `then()` statement with a function that has an argument called `data`:

```javascript
.then(function(data) {

    })
})
```


Within this function, create a variable called `authors` that is set equal to `data.results`:

```javascript
.then(function(data) {
    let authors = data.results;
```

 



For each author in `authors`, you will want to create a list item that displays a picture of them and displays their name. The `map()` method is great for this:

```javascript
let authors = data.results;
return authors.map(function(author) {

})
```

 



Within your `map` function, create a variable called `li` that will be set equal to `createNode` with `li` (the HTML element) as the argument:

```javascript
return authors.map(function(author) {
    let li = createNode('li');
})
```

 



Repeat this to create a `span` element and an `img` element:

```javascript
let li = createNode('li');
let img = createNode('img');
let span = createNode('span');
```

 



The API offers a name for the author and a picture that goes along with the name. Set the `img.src` to the author picture:

```javascript
let img = createNode('img');
let span = createNode('span');

img.src = author.picture.medium;
```

 



The `span` element should contain the the first and last name of the `author`. The `innerHTML` property and string interpolation will allow you to do this:

```javascript
img.src = author.picture.medium;
span.innerHTML = `${author.name.first} ${author.name.last}`;
```

 



With the image and list element created along with the `span` element, you can use the `append` function that was previously created to display these elements on the page:

```javascript
append(li, img);
append(li, span);
append(ul, li);
```

 



With both `then()` functions completed, you can now add the `catch()` function. This function will log the potential error to the console:

```javascript
.catch(function(error) {
  console.log(error);
});
```

 



This is the full code of the request you created:

```javascript
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});
```