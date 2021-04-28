> FLoC enables ad selection without sharing the browsing behaviour of individual user
> 
> As a user moves around the web, their browser uses the FLoC algorithm to work out its "interest cohort", which will be the same for thousands of browsers with a similar recent browsing history. The browser recalculates its cohort periodically, on the user's device, without sharing individual browsing data with the browser vendor or anyone else.

## Intro

### ¿Que problema resuelve FLoC?

Antes para correr ads dependías mucho de las cookies de terceros. Esto significa que en la pagina de una tienda online, te ponian un "sellito" de la empresa que hacia los ads.

La empresa de ads, te pone ese sellito en muchas páginas.

![[Floc modelo cookies de terceros.png]]

Cuando vos visitabas otra página, veian que traías el "sellito" y te lo actualizaban, recopilaban info o te mostraban ads basados en el historial de los lugares donde estuviste.

El los últimos años esto paso a ser mal visto y adblockers, browsers y sistemas operativos empezar a pelearse contra estos sellitos y a bloquearlos. Porque eran una invasión a la privacidad del usuario y se estaba recopilando mucha info sin su permiso.

![[Floc Players in privacy.png]]

### Cómo se diferencia?

FLoC, que significa Federated Learning of Cohorts, lo que hace es asignarnos otro tipo de "sellito". Que dice que pertenecemos a un conjunto de gente con intereses similares

Es una manera de hacer ads a publico relevante "conservando" la privacidad de los usuarios.

Básicamente, antes, cuando entrabamos a una pagina y veian nuestras cookies, sabian "Ah, ahi viene Fermin, que tambien estuvo mirando zapatillas MercadoLibre, y celulares en Amazon, pongamosle estos ads" ... ahora seria más algo como "Ah! Ahi viene alguien interesado en zapatillas y celulares"


## ¿Cómo funciona?

![Diagram showing, step by step, the different roles in selecting and delivering an ad using    FLoC: FLoC service, Browser, Advertisers, Publisher (to observe cohorts), Adtech,    Publisher (to display ads)](https://web-dev.imgix.net/image/80mq7dk16vVEg8BBhsVe42n6zn82/0l0SjpSJ2YIfS0BKX80N.png?auto=format)

### 1. FLoC crea el modelo dandole un numero a cada grupo

El servicio analiza los comportamientos de millones de usuarios y los categoriza en distintos baldes. A cada uno le da un número.

### 2. El browser analiza nuestro comportamiento y nos asigna a un grupo

Revisando nuestro historial y actividad el browser nos asigna a un balde. Por ejemplo en el balde de los usuarios que buscan comprar zapatillas. El #1234

![[Floc cohorts.png]]

### 3. Advertiser

El advertiser, en tiendazapatillas.io ve que entramos a su página y miramos zapatillas. Le pregunta a nuestro brower que balde somos y le dice #1234

Con el tiempo el advertiser entiende que los #1234 miran zapatillas y los #5678 miran bermudas.

### 4. Publisher

Visitamos un medio local de noticias "lagacetademibarrio.com". Este Medio le pregunta a nuestro browser que cohort somos y le dice #1234, entonces el medio nos va a poner publicidades de zapatillas ... pues todos los #1234 suelen clickean en ads de zapatillas.

### 5. Plataforma de Ads

Las plataformas van a agregar la información de medios como lagacetademibarrio.com y tiendas como tiendazapatillas.io y van a saber que los #1234 visitan zapatillas, compran zapatillas y hacen click en ads de zapatillas.

## Código

Si como desarrollador quiero empezar a probar FLoC cómo puedo hacerlo?

```js
const { id, version } = await document.interestCohort();
console.log('FLoC ID:', id);
console.log('FLoC version:', version);
```

Deberia devolvernos algo como:

```json
{
	id: "14159",
	version: "chrome.1.0"
}
```


## Updates

📆 [[]]

---

### Sources:

What is Federated Learning of Cohorts (FLoC)? | [Web.dev](https://web.dev/floc/)
Block FLoC with [[DuckDuckGo]] | [spreadprivacy.com](https://spreadprivacy.com/block-floc-with-duckduckgo/)
Evaluation of Cohort Algorithms for the FLoC API | [Github/google/ads-privacy](https://github.com/google/ads-privacy/blob/master/proposals/FLoC/README.md)
Floc Demo | [Glitch](https://floc.glitch.me/)