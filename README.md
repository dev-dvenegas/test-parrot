# Mi Proyecto React con TypeScript

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app) y TypeScript.

## Contenido

- [Scripts Disponibles](#scripts-disponibles)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Despliegue](#despliegue)
  - [GitHub Pages](#github-pages)
  - [Servidor Node.js](#servidor-nodejs)

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se recargará si haces modificaciones.\
También verás cualquier lint error en la consola.

### `npm test`

Inicia el corredor de pruebas en el modo interactivo de observación.\
Para más información, mira la sección sobre [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Agrupa correctamente React en modo de producción y optimiza la construcción para obtener el mejor rendimiento.

La construcción es minificada y los nombres de los archivos incluyen los hashes.\
Tu aplicación está lista para ser desplegada!

Para más información, mira la sección sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run eject`

**Nota: esta es una operación unidireccional. Una vez que hagas `eject`, ¡no puedes volver atrás!**

Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes hacer `eject` en cualquier momento. Este comando eliminará la dependencia de construcción de tu proyecto.

## Despliegue

### GitHub Pages

Este proyecto está configurado para desplegarse en GitHub Pages. Puedes ver la versión más reciente del proyecto en [https://dev-dvenegas.github.io/test-parrot/#](https://dev-dvenegas.github.io/test-parrot/#/products).

La integración continua (CI) está configurada para desplegar automáticamente los cambios a GitHub Pages.

### Servidor Node.js

Si prefieres desplegar el proyecto en un servidor Node.js, sigue estos pasos:

1. Construye el proyecto con `npm run build`. Esto creará una carpeta `build` con los archivos estáticos de tu aplicación.
2. Mueve la carpeta `build` a tu servidor.
3. En tu servidor, instala `express` con `npm install express`.
4. Crea un archivo `server.js` en la raíz de tu proyecto con el siguiente contenido:

```javascript
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Sirve los archivos estáticos de la carpeta build
app.use(express.static(path.join(__dirname, 'build')));

// Maneja cualquier solicitud que no coincida con las rutas anteriores
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
```

5. Agrega un script a tu `package.json` para iniciar el servidor:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "start:server": "node server.js"
}
```

6. Ahora puedes construir tu aplicación con `npm run build` y luego iniciar el servidor con `npm run start:server`.

Recuerda que debes tener Node.js y npm instalados en tu servidor para seguir estos pasos.
