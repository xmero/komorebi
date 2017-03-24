angular.module('SharingTreeApp')
    .controller('LoginCtrl', function($scope, $location, AuthFactory) {
        $scope.login = function() {
            const username = $scope.username
            const password = $scope.password
            AuthFactory.login({ username, password })
                .then(AuthFactory.setCredentials)
                .then(() => $location.path('/'))
        }

    })
    .controller('RegisterCtrl', function($scope, AuthFactory) {
        $scope.register = function() {
            const username = $scope.username
            const password = $scope.password
            const email = $scope.email
            const location = $scope.location
            AuthFactory.register({ username, password, email, location })
        }
    })
