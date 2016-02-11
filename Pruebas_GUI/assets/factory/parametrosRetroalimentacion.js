app.factory("parametrosRetroalimentacionFactory", function(){
    var datos={
      idUsuario : '',
      idPruebaTomada : '',
      idPrueba: ''
    }

    var interfaz = {
        obtenerParametros: function(){
            //console.log("Datos adentro:"+datos);
            return datos;
        },
     obtenerIDUsuario: function(){
            //console.log("Datos adentro:"+datos);
            return datos.idUsuario;
        },
        actualizarIDUsuario: function(idUsuarioRecibido){
            datos.idUsuario = idUsuarioRecibido;
        },
        actualizarIDPruebaTomada: function(idPruebaTomadaRecibida){
            datos.idPruebaTomada = idPruebaTomadaRecibida;
        },
        actualizarIDPrueba: function(idPruebaRecibida){
            datos.idPrueba = idPruebaRecibida;
        }
    }
    return interfaz;
})