/**
 * Usuarios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        nombre: {
            type: 'string',
            required: true
        },
        apellido: {
            type: 'string'
        },
        correo: {
            type: 'string'
        },
        password: {
            type: 'string',
            defaultsTo: 123456
        },
        fecha: {
            type: 'date',
            required: true
        },
        pruebasColeccion: {
            collection: 'pruebas',
            via: 'idUsuario'
        }

    }
};






