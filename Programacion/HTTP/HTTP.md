## Metodos

### GET

Con este método podemos solicitarle datos al servidor. Al acceder a una página a través de una URL, estoy haciendo una petición con GET.

### POST

Con este método podemos enviarle datos al servidor. Al registrarme en un sitio nuevo con mis datos, estoy haciendo una petición con POST

| Los pedidos por GET                           | Los pedidos por POST                             |
| --------------------------------------------- | ------------------------------------------------ |
| viajan por URL y queda visible la información | viajan ocultos y queda encriptada la información |
| pueden ser cacheados                          | No pueden ser cacheados                          |
| pueden guardarse en marcadores                | No pueden guardarse en marcadores                |
| tienen restricción en la longitud             | No tienen restricción de longitud                |
| Se usan para datos no sensibles               | Se usan para datos sensibles                     |
| No se reenvian al recargar el sitio           | Se reenvian al recargar el sitio                 |

### PUT
Con este método podemos reemplazar información existente. Al cambiar información personal en Instagram, estoy haciendo una petición con PUT.

### DELETE
Con este método podemos borrar un registro existente en el servidor. Al borrar una foto de Facebook, estoy haciendo una petición con DELETE.


💡 Los formularios de HTML no soportan los métodos especiales PUT, PATCH y DELETE con lo cual varios frameworks tienen algunas prestaciones para simularlos.
