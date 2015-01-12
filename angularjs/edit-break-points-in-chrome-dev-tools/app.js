
angular.module('editBreakPointsApp', [])
    .run(function ($http, $rootScope){
        function onSuccess (result) {
            $rootScope.repos = result.data;
        }

        function onFailure (info) {
            console.log('ERROR pls try again');
            console.log(info);
        }

        $http.get('https://api.github.com/users/manidf/repos').then(onSuccess, onFailure);


    });