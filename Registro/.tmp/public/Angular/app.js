var app = angular.module('AplicacionPruebas', ['ui.router']);


app.config(function ($stateProvider, $urlRouterProvider) {
    
    
//$urlRouterProvider.otherwise("/");

    $stateProvider
        .state('usuarios', {
            url: "/Usuarios",
            templateUrl: "rutas/Usuarios.html",
            controller: 'UsuariosController'
        });
    


});

