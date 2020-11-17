# Delilah Restó

API sistema de pedidos online para el restaurante Delilah Restó.

### Requisitos Previos

1. Debe contar con un editor de codigo de su preferencia [VScode](https://code.visualstudio.com/).
2. Instale y configure [NodeJS](https://nodejs.org/es/).
3. Instale y configure el motor de base de datos [MYSQL](https://www.mysql.com/downloads/).
4. Para realizar peticiones a la aplicacion recomendamos usar [POSTMAN](https://www.postman.com/) o el programa de tu preferencia.
5. instalar nodemon en su computador para poder ejecutar la misma [Nodemon](https://www.npmjs.com/package/nodemon/) en caso de no querer usarla debera modificar los scripts en el package.json de la siguiente manera:

```

	"scripts": {
		"start": "node server.js",
	},

```

### Instalación

Estos son los pasos que deberás seguir para tener un entorno de desarrollo ejecutable:

1. Ejecute en la terminal estando el la carpeta en la que se aloja el proyecto el comando npm install. (esto instalara los paquetes necesarios para correr el proyecto)

```

npm install

```

2. Cree un archivo .env a partir de el .env-example para crear las variables de entorno necesarias para el proyecto.

3. Para crear la base de datos y sus tablas ejecute el comando:

```

npm run migrate

```

4. si desea crear algunos usuarios o productos:

```

npm run seedProducts (Para usuarios)

```

```

npm run seedUsers (Para productos)

```

5. Todo esta listo para ejecutar el proyecto con el comando:

```

npm run start

```

6. Opcionalmente en el arcivo Proyecto3.postman_collection.json se añade la coleccion para probar lo endpoints.

## Autores

* **Julian Eduardo Labrador Sanchez** - *Trabajo Inicial\* - [JulianELabradorS](https://github.com/JulianELabradorS)

## Licencia

Este proyecto está bajo la Licencia MIT.
