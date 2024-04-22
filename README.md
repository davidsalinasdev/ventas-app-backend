# Proyecto Levantar un servidor con nodeJS v20.9.0 y Typescript v5.4.5

# Crear la carpeta del proyecto FINAL-RESTSERVER_TYPESCRIP

# Crear la carpeta src en la raiz del proyecto

# Instalar typescript de form global

1.- npm i -g typescript
//Version: tsc -v

# Crear proyecto NodeJS crea el package.json

2.- npm init -y

# Para Trabajar y compilar proyectos TS

3.- tsc --init
Configurar el tsconfig.json
{"compilerOptions": {}},
"include": [
"src"
],
"exclude": [
"node_modules"
]

# Para probar que funcione tsconfig.json

3.- tsc //Ejecutar en la terminal

# TSlint para verificar errores para seguir estandares de desarrollo

4.- npm i tslint --save-dev // de manera de desarrollo

# Instalar TS de manera local para trabajar con el tslint

5.- npm i typescript --save-dev // de manera de desarrollo

# Inicializar el archivo TSlint.json

6.- ./node_modules/.bin/tslint --init

Configurar tslint.json
"rules": {
"no-console":false
},

# Creacion del Servidor de express u sus middlewares

7.- creamos una carpeta models y dentro un archivo server.ts

# Intalacion de paquetes necesarios para configurar el server.ts

8.- npm i express cors dotenv morgan

# Instalar dependencia types de desarrollo

9.- npm i --save-dev @types/express y npm i --save-dev @types/cors

# Crear y configurar .ENV

PORT=8000

10.- Configurar el server.ts y el app.ts

# Nodemos y ts --watch, Ejecutar dos comandos al mismo tiempo con el modulo npm i concurrently

-- npm i concurrently -D
-- npm i nodemon -D
"scripts": {
"dev": "concurrently \"tsc -w\" \"nodemon dist/app.js\""
},

# Morgan permite ver por consola la peticiones que van llegando, configurar en el server.ts

npm i morgan
// 2.- Para parsear el BODY
// Son metodos que se ejecutan antes de que se pase a una ruta

public middlewares() {
// 1.- CORS
// this.app.use(cors());

// 2.-Lectura del BODY para que funcione potsman y entienda los formatos JSON
// this.app.use(express.json());

// 3.- Configurando la carpeta publica
// this.app.use(express.static('public'));

}

public routes() {

        // Morgan
        this.app.use(morgan('dev'));

        // this.app.use(this.apiPaths.usuarios, userRoutes);

    }

# Configurando Modelos, controladores y rutas de la aplicación

13.- Craer carpeta routes, models, controllers

# Midlewares necesarios para la aplicación para trabajar con postman

14.- // CORS
this.app.use(cors());

//Lectura del BODY para que funcione potsman
this.app.use(express.json());

# Crear la carpeta publica

15.- Crear en el directorio raiz public

# Instalación, conexion y configuración de MYSQL

16.- Crear la base de datos en laragon
17.- npm install --save sequelize
18.- npm i mysql2

# Para crear migraciones en Sequelize, puedes utilizar la CLI (Interfaz de línea de comandos) proporcionada por Sequelize. Aquí hay una guía paso a paso para crear una migración para la tabla Usuario que acabamos de definir:

Instalar Sequelize CLI (si aún no lo has hecho):
1.- npm install --save-dev sequelize-cli

Inicializar Sequelize en tu proyecto (si aún no lo has hecho). Esto creará los archivos de configuración necesarios en tu proyecto.
2.- npx sequelize-cli init

Crear una migración para la tabla Usuario:
3.- npx sequelize-cli migration:generate --name create-usuario-table

Este comando generará un archivo de migración en la carpeta migrations de tu proyecto. El nombre del archivo será algo así como XXXXXXXXXXXXXX-create-usuario-table.js, donde XXXXXXXXXXXXXX es una marca de tiempo.
Abre el archivo de migración generado en el paso anterior y define las acciones que deseas realizar en la base de datos. Aquí hay un ejemplo de cómo podría ser la migración para crear la tabla Usuario:

'use strict';
module.exports = {
async up(queryInterface, Sequelize) => {
await queryInterface.createTable('Usuarios', {
id: {
allowNull: false,
autoIncrement: true,
primaryKey: true,
type: Sequelize.INTEGER
},
nombre: {
type: Sequelize.STRING
},
usuario: {
type: Sequelize.STRING
},
password: {
type: Sequelize.STRING
},
perfil: {
type: Sequelize.STRING
},
foto: {
type: Sequelize.STRING
},
estado: {
type: Sequelize.INTEGER
},
ultimo_login: {
type: Sequelize.DATE
},
fecha: {
type: Sequelize.DATE,
defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
allowNull: false
},
createdAt: {
allowNull: false,
type: Sequelize.DATE
},
updatedAt: {
allowNull: false,
type: Sequelize.DATE
}
});
},
down: async (queryInterface, Sequelize) => {
await queryInterface.dropTable('Usuarios');
}
};

En la función up, se define cómo crear la tabla Usuarios con las columnas correspondientes. En la función down, se define cómo eliminar la tabla Usuarios en caso de que necesites revertir la migración en el futuro.
Ejecuta la migración para aplicarla a tu base de datos:
Copy code

4.- npx sequelize-cli db:migrate
Este comando ejecutará todas las migraciones que aún no se han ejecutado en tu base de datos, aplicando así los cambios definidos en tus archivos de migración.

Con estos pasos, habrás creado una migración para la tabla Usuario en tu base de datos utilizando Sequelize. Si necesitas realizar cambios adicionales en el esquema de la tabla en el futuro, puedes crear nuevas migraciones siguiendo un proceso similar.

# Para realizar un rollback (deshacer) de una migración en Sequelize, puedes usar la CLI de Sequelize. Aquí tienes los pasos para hacerlo:

Primero, ejecuta el siguiente comando para deshacer la última migración:
Copy code
1.- npx sequelize-cli db:migrate:undo
Este comando deshace la última migración que se aplicó a la base de datos.

Si necesitas deshacer más de una migración, puedes especificar cuántas migraciones quieres deshacer añadiendo el flag --count. Por ejemplo, para deshacer las últimas tres migraciones, puedes usar este comando:

2.- npx sequelize-cli db:migrate:undo --count 3
Si deseas revertir todas las migraciones y eliminar todas las tablas de la base de datos, puedes utilizar el siguiente comando:

3.-npx sequelize-cli db:migrate:undo:all
Este comando deshace todas las migraciones que se han aplicado a la base de datos. Sin embargo, ten cuidado al usarlo, ya que eliminará todas las tablas y datos de tu base de datos.

Recuerda que los comandos de rollback solo pueden revertir las migraciones que se han aplicado en el orden inverso en que se crearon. Si has realizado cambios en la base de datos manualmente o si tienes migraciones intercaladas con cambios manuales en la base de datos, puede que necesites deshacer los cambios manualmente.
