import { DataTypes, Sequelize } from 'sequelize';
import db from '../database/connection';

const Usuarios = db.define('usuarios', {
    nombre: {
        type: DataTypes.STRING
    },
    usuario: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    perfil: {
        type: DataTypes.STRING
    },
    foto: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.INTEGER
    },
    ultimo_login: {
        type: DataTypes.DATE
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
}, {
    updatedAt: 'fecha' // Actualizar automáticamente el campo 'fecha' al modificar el registro
});



export default Usuarios;