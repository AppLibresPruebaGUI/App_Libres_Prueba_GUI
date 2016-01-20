var app = angular.module('Pruebas',['ui.router','ngResource']);

app.config(function($stateProvider,$urlRouterProvider){
    //SI LA URL QUE INGRESA EL USUARIO NO EXISTE SE REDIRIGE AQUI:
 $urlRouterProvider.otherwise("/tomarPrueba"); 
$stateProvider
  .state('tomarPrueba', {
   url: "/tomarPrueba",
   templateUrl: "vistas/tomarPrueba.html",
   controller: 'tomarPruebaController'
  });
 
});