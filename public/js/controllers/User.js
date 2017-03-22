angular.module("SharingTreeApp")

.controller('UserCtrl', function($scope, $rootScope, $routeParams, UsersFactory) {
    $rootScope.section = 'user'
    const id = $routeParams

    $scope.reviews = false;
    $scope.showReviews = function() {
        if ($scope.reviews === false)
            $scope.reviews = true;
        else
            $scope.reviews = false;
    }

    UsersFactory.getUser(id.id)
        .then(function(user) {
            $scope.user = user;
        })

    UsersFactory.getProducts(id.id)
        .then(function(products) {
            $scope.products = products;
        })
})
