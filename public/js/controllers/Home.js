angular.module("SharingTreeApp")

.controller('HomeCtrl', function($scope, $rootScope, ProductsFactory, MessagesFactory) {
    $rootScope.section = 'home'
     ProductsFactory.getProducts()
       .then( function(products) {
        $scope.products = products;
       })
})

