import { Sequelize } from 'sequelize';

// Configuración de la conexión a la base de datos MySQL
const db = new Sequelize('ventas_app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // Puerto opcional, por defecto es 3306
    port: 3306,
    // Otras opciones de configuración
    // logging: false, // Desactivar los registros de las consultas SQL
    // timezone: '+05:30', // Zona horaria de la base de datos
});

// Se esta exportando un objeto por defecto
export default db;