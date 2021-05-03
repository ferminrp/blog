Express Validator nos permite manejar de manera relativamente sencilla, todas las validaciones de nuestros formularios desde el lado del back-end.

## Express Validator paso a paso 

Express Validator nos permitirá validar que la información que nos llega desde los formularios sea la que esperamos. Los pasos que debemos seguir para implementarlo son: 
1. Instalar Express Validator. 
2. Crear un array con las validaciones de cada formulario. 
3. Agregarlo como middleware de la ruta que procesa el formulario. 
4. Verificar si hubo errores en la validación desde el controlador. 
5. Enviar los errores a las vista.

### En el Formulario

Antes de empezar con las validaciones, es importante tener en cuenta cómo están armados nuestros formularios. A la hora de escribir las validaciones, tomaremos como referencia la propiedad name de cada campo.

### 1. Instalar Express Validator

```bash
npm i express-validator
```

