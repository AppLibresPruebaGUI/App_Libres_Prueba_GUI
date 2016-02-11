app.controller('LoginController', ['$scope','$http', '$location','toastr','parametrosRetroalimentacionFactory', function ($scope,$http,$location,toastr,parametrosRetroalimentacionFactory) {

    console.log('Entraste a Login');
    
    
    $scope.usuario;
    $scope.correo;
    $scope.password;
    
    
    $scope.validarUsuario = function validarUsuario() {
        $http({
            method: 'GET',
            url: 'http://localhost:1337/Usuarios/?correo='+$scope.correo+'&password='+$scope.password,
        }).then(function correcto(respuesta){
                $scope.usuario=respuesta.data;
            
                console.log(respuesta.data);
                if(respuesta.data.length<1){
                    console.log('El usuario no existe');
                    toastr.warning('Error', 'El usuario no esta registrado')
                }
                else{
  parametrosRetroalimentacionFactory.actualizarIDUsuario(respuesta.data[0].id);
                    $location.path("/eleccion");
                    toastr.success(':)', 'Bienvenido loco')
                }
            
        });
    };
    

    
}]);