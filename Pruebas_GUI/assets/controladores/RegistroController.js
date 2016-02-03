app.controller('RegistroController', ['$scope', '$http', function ($scope, $http) {

    console.log('Entraste a Registro');

    /*Esta varible representa el modelo de tipo Usuarios
    esta almacenará los datos que se introducen a través del 
    formulario de registro (registro.html)*/

    $scope.usuario = {
        nombre: '',
        apellido: '',
        correo: '',
        password: '',
        tipo: 'Estudiante'
    }

    //Nota: El tipo de usuario en este caso es siempre Estudiante.

    /*Esta es la funcion que permite insertar nuevos usuario a la base
    Aqui va todo el codigo necesario para realizar un metodo POST
    */
    $scope.agregarUsuario = function agregarUsuario() {
        $http({
            method: 'POST',
            url: 'http://localhost:1337/Usuarios',
            data: {
                nombre: $scope.usuario.nombre,
                apellido: $scope.usuario.apellido,
                correo: $scope.usuario.correo,
                password: $scope.usuario.password,
                tipo: 'estudiante'
            }
        }).then(function correcto(respuesta) {
            console.log(respuesta);
            $scope.usuario.nombre = '';
            $scope.usuario.apellido = '';
            $scope.usuario.correo = '';
            $scope.usuario.password = '';

        }, function error(respuesta) {
            console.log(respuesta);
        });
    };

    //Nota: el código de la ruta registro.html no debe ser alterado 


}]);