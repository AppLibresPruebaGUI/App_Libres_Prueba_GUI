app.controller('RetroalimentacionController', ['$scope', 'toastr', '$http', function ($scope, toastr, $http) {

 var idUsuario = 1; //ID del estudiante
 var idPruebaTomada = 2; //ID de la prueba tomada
 var idPrueba =3; //ID de la prueba realizada por el profesor

  /*Obtengo el usuario*/
  $http({
   method: 'GET',
   url: 'http://localhost:1337/Usuarios/' + idUsuario
  }).then(function correcto(success) {
   //console.log(success.data);
   var datosRecibidos = success.data;
$scope.datosUsuario = {
 nombre: datosRecibidos.nombre,
  apellido: datosRecibidos.apellido,
  correo: datosRecibidos.correo
 }
 

   //console.log($scope.datosUsuario)
   //toastr.success('Correcto', success)
  }, function error(error) {
   console.log(error)
   toastr.warning('Error', error)
  });

  /*Obtengo la prueba tomada*/
 $http({
   method: 'GET',
   url: 'http://localhost:1337/PruebaTomada/' + idPruebaTomada
  }).then(function correcto(success) {
   //console.log(success.data);
   var datosRecibidos = success.data;
$scope.datosPruebaTomada = {
 calificacion: datosRecibidos.calificacion,
 horaEmpiezaIntento: datosRecibidos.horaEmpiezaIntento,
  horaTerminaIntento: datosRecibidos.horaTerminaIntento,
  tiempoTomado: datosRecibidos.tiempoTomado,
 numeroIntentosTomados: datosRecibidos.numeroIntentosTomados,
 
 }
 

   //console.log($scope.datosPruebaTomada)
   //toastr.success('Correcto', success)
  }, function error(error) {
   console.log(error)
   toastr.warning('Error', error)
  });


   /*Obtengo informacion de la prueba*/
 $http({
   method: 'GET',
   url: 'http://localhost:1337/Pruebas/' + idPrueba
  }).then(function correcto(success) {
   //console.log(success.data);
   var datosRecibidos = success.data;
$scope.datosPrueba = {
 nombre: datosRecibidos.nombre,
 horaInicio: datosRecibidos.horaInicio,
  horaFin: datosRecibidos.horaFin,
  tiempo: datosRecibidos.tiempo,
 numeroIntentos: datosRecibidos.numeroIntentos,
 materia: datosRecibidos.materia,
 organizacion: datosRecibidos.organizacion,
 
 }
   //console.log($scope.datosPrueba)
   //toastr.success('Correcto', success)
  }, function error(error) {
   console.log(error)
   toastr.warning('Error', error)
  });



}]);//Cierro el controlador