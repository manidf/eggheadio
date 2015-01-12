
'use strict';

angular.module('editBreakPointsApp', [])
    .run(function ($http, $rootScope){
        function onSuccess (result) {
            $rootScope.repos = result.data;
        }

        function onFailure (info) {
            console.log('ERROR pls try again');
            console.log(info);
        }

        $http.get('')
        .then(onSuccess, onFailure);


    });