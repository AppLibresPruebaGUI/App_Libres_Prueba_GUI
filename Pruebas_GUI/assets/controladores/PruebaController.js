app.controller('PruebaController', ['$scope', '$http', '$stateParams', '$location', function ($scope, $http, $stateParams,$location) {

    console.log('Entraste a Prueba');

    $scope.respuestas = [];

    var puntajes = [];

    var horaInicio = new Date().getHours();
    var minInicio = new Date().getMinutes();

    console.log(horaInicio);

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

    $scope.registrarPrueba = function registrarPrueba() {
        calificar();
        $http({
            method: 'POST',
            url: 'http://localhost:1337/PruebaTomada',
            data: {
                horaEmpiezaIntento: horaInicio,
                horaTerminaIntento: new Date().getHours(),
                numeroIntentosTomados: 1,
                calificacion: calificacion,
                tiempoTomado: new Date().getMinutes() - minInicio,
                fechaTomo: new Date(),
                idPruebaTomadaUsuario: 1,
                idPruebaTomadaPruebas: idPrueba
            }
        }).then(function correcto(respuesta) {
            console.log(respuesta);
            registrarCalificaciones(respuesta.data.id)
            $location.path("/retroalimentacion");
        }, function error(respuesta) {
            console.log(respuesta);
        });
    };

    function registrarCalificaciones(id) {
        for (i = 0; i < $scope.prueba.preguntasColeccion.length; i++) {
            $http({
                method: 'POST',
                url: 'http://localhost:1337/Calificacion',
                data: {
                    respuestaPregunta: $scope.respuestas[i],
                    puntajeObtenido: puntajes[i],
                    idCalificacionPreguntas: $scope.prueba.preguntasColeccion[i].id,
                    idCalificacionPruebaTomada: id,
                }
            }).then(function correcto(respuesta) {
                console.log(respuesta);
            }, function error(respuesta) {
                console.log(respuesta);
            });
        }
    }


    var calificacion = 0;


    function calificar() {
        for (i = 0; i < $scope.prueba.preguntasColeccion.length; i++) {
            if ($scope.respuestas[i] ===
                    $scope.prueba.preguntasColeccion[i].opcionCorrecta) {
                calificacion = calificacion + $scope.prueba.preguntasColeccion[i].puntaje;
                puntajes[i] = $scope.prueba.preguntasColeccion[i].puntaje;
            } else {
                puntajes[i] = 0;
            }

        }
    }




}]);