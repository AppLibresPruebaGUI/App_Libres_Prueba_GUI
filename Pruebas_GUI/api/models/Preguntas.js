/**
* Preguntas.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

 schema:true,
  tableName: 'preguntas',
  attributes: {
    enunciado: {
      type: 'string'
    },
    puntaje: {
      type: 'integer'
    },
    opcionCorrecta: {
      type: 'string'
    },
    opcion1: {
      type: 'string'
    },
    opcion2: {
      type: 'string'
    },
    opcion3: {
      type: 'string'
    },
    idPrueba: {
      model: 'Pruebas',
      required: true
    },
    calificacionColeccionPreguntas: {
      collection: 'calificacion',
      via: 'idCalificacionPreguntas'
    }

  }
};

