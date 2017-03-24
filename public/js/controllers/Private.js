angular.module("SharingTreeApp")
    .controller('PrivateCtrl', function($scope, $rootScope, UsersFactory, $location, StorageFactory, ProductsFactory, Upload) {
        $rootScope.section = 'private'
        const id = $scope.loggedUser.id

        UsersFactory.getUser(id)
            .then(function(user) {
                $scope.user = user;
                $scope.username = user.username
                $scope.email = user.email
                $scope.description = user.description
                $scope.image = user.image
                $scope.location = user.location
            })

        UsersFactory.getProducts(id)
            .then(function(products) {
                $scope.products = products;
            })



    })
