app.controller('EleccionController', ['$scope', '$http',function($scope,$http) {

    console.log('Entraste a Eleccion');

    $scope.pruebas;
    $http({
        method: 'GET',
        url: 'http://localhost:1337/Pruebas'
    }).then(function correcto(respuesta){
        $scope.pruebas = respuesta.data;
        console.log($scope.pruebas);
    })
    


}]);