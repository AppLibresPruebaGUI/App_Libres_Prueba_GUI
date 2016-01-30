/**
* PruebaTomada.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

   schema:true,
  tableName: 'pruebatomada',
  attributes: {
    horaEmpiezaIntento: {
      type: 'integer'
    },
    horaTerminaIntento: {
      type: 'integer'
    },
    numeroIntentosTomados: {
      type: 'integer'
    },
    calificacion: {
      type: 'float'
    },
    tiempoTomado: {
      type: 'integer'
    },
    fechaTomo: {
      type: 'date'
    },
    calificacionColeccion: {
      collection: 'Calificacion',
      via: 'idCalificacionPruebaTomada'
    },
    idPruebaTomadaUsuario: {
      model: 'Usuarios',
      required: true
    },
    idPruebaTomadaPruebas: {
      model: 'Pruebas',
      required: true
    }
    

  }
};

