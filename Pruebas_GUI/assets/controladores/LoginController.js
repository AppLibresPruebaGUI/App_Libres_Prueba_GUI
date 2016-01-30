app.controller('LoginController', ['$scope','$http', '$location', function ($scope,$http,$location) {

    console.log('Entraste a Login');
    
    $scope.usuario;
    $scope.correo;
    $scope.password;
    
    $scope.validarUsuario = function validarUsuario() {
        $http({
            method: 'GET',
            url: 'http://localhost:1337/Usuarios/?correo='+$scope.correo+'&password='+$scope.password
        }).then(function correcto(respuesta){
                $scope.usuario=respuesta;
            
                console.log(respuesta.data);
                if(respuesta.data.length<1){
                    console.log('El usuario no existe');
                }
                else{
                    $location.path("/eleccion");
                }
            
        });
    };
    

    
}]);