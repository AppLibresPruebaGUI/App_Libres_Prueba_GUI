app.controller('PruebaController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {

    console.log('Entraste a Prueba');

    var idPrueba = $stateParams.id;
    console.log(idPrueba);
    $scope.prueba;
    $http({
        method: 'GET',
        url: 'http://localhost:1337/Pruebas?id=' + idPrueba
    }).then(function correcto(respuesta) {
        $scope.prueba = respuesta.data;
        console.log($scope.prueba);
    });

}]);