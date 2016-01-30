/**
* Usuarios.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,
  //tableName: 'usuarios',
  attributes: {
    nombre: {
      type: 'string'
    },
    apellido: {
      type: 'string'
    },
    correo: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    tipo: {
      type: 'string',
    },
    pruebaColeccion: {
      collection: 'Pruebas',
      via: 'idUsuario'
    },
    pruebaTomadaColeccionUsuarios: {
      collection: 'PruebaTomada',
      via: 'idPruebaTomadaUsuario'
    }

  }
};

