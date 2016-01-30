/**
* Pruebas.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema:true,
  tableName: 'pruebas',
  attributes: {
    nombre: {
      type: 'string'
    },
    fechaDebeTomarse: {
      type: 'date'
    },
    horaInicio: {
      type: 'integer'
    },
    horaFin: {
      type: 'integer'
    },
    tiempo: {
      type: 'integer'
    },
    numeroIntentos: {
      type: 'integer'
    },
    materia: {
      type: 'string',
      enum: ['Base de Datos', 'Programación', 'Calidad de Software', 'Aplicaciones Web', 'Desarrollo de Software']
    },
    organizacion: {
      type: 'string'
    },
    idUsuario: {
      model: 'Usuarios',
      required: true
    },
    preguntasColeccion: {
      collection: 'Preguntas',
      via: 'idPrueba'
    },
    pruebaTomadaColeccionPrueba: {
      collection: 'PruebaTomada',
      via: 'idPruebaTomadaPruebas'
    }
    
  }
};

