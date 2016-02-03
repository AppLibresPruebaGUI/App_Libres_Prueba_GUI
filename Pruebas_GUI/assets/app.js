var app = angular.module('Pruebas',['ui.router','ngResource','toastr']);

app.config(function($stateProvider,$urlRouterProvider){
    
     $urlRouterProvider.otherwise("/");
    
    $stateProvider.state("home",{
        url: "/",
        templateUrl: "vistas/login.html",
        controller: 'LoginController'
    }).state("eleccion",{
        url: "/eleccion",
        templateUrl: "vistas/eleccion.html",
        controller: 'EleccionController'
    }).state("prueba",{
        url: "/prueba/:id",
        templateUrl: "vistas/prueba.html",
        controller: 'PruebaController'
    }).state("retroalimentacion",{
        url: "/retroalimentacion",
        templateUrl: "vistas/retroalimentacion.html",
        controller: 'PruebaController'
    }).state("registro",{
        url: "/registro",
        templateUrl: "vistas/registro.html",
        controller: 'RegistroController'
    })
    

});