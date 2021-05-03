Ya vi en [[Middlewares de aplicacion global con Express]] como aplicar middlewares a lo largo de TODA la aplicacion. Ahora me meto en como hacer que solo corran en rutas específicas.

Al igual que los middlewares de aplicación, los de ruta deberán recibir tres parámetros: el **request**, el **response** y el **next**.

En muchos casos usaremos estos middlewares en múltiples rutas, así que es una buena idea escribir el código en un archivo aparte y requerirlo en donde lo vayamos a usar.



