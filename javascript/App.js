var aplicacion = angular.module('app', ['ngAnimate','ui.router']);


//config es un metodo que acepta una funcion con dos parametros
aplicacion.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('ruta1', {
      url: "/estamosenlaRuta1",
      templateUrl: "rutas/ruta1.html"
    })
    .state('ruta2', {
      url: "/estamosenlaRuta2",
      templateUrl: "rutas/ruta2.html"
      
    
    });
});