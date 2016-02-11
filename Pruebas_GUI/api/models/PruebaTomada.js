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
      type: 'datetime'
    },
    horaTerminaIntento: {
      type: 'datetime'
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

