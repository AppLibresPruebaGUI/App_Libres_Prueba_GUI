var app = angular.module('Pruebas',['ui.router','ngResource']);

app.config(function($stateProvider,$urlRouterProvider){
    //SI LA URL QUE INGRESA EL USUARIO NO EXISTE SE REDIRIGE AQUI:
 $urlRouterProvider.otherwise("/eleccionprueba"); 
$stateProvider
  .state('eleccionprueba', {
   url: "/eleccionprueba",
   templateUrl: "vistas/eleccionprueba.html",
   controller: 'EleccionpruebaController'
  });
 
});