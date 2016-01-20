var app = angular.module('Pruebas',['ui.router','ngResource']);

app.config(function($stateProvider,$urlRouterProvider){
    //SI LA URL QUE INGRESA EL USUARIO NO EXISTE SE REDIRIGE AQUI:
 $urlRouterProvider.otherwise("/retroalimentacion"); 
$stateProvider
  .state('retroalimentacion', {
   url: "/retroalimentacion",
   templateUrl: "vistas/retroalimentacion.html",
   controller: 'RetroalimentacionController'
  });
 
});