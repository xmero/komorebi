angular.module("SharingTreeApp")

.controller('UserCtrl', function($scope, $rootScope, $routeParams,Upload, UsersFactory, StorageFactory,$location) {
    $rootScope.section = 'user'
    const id = $routeParams

    $scope.editMode = false;
    $scope.editUserMode = function() {
        if ($scope.editMode === false)
            $scope.editMode = true;
        else
            $scope.editMode = false;
    }

    $scope.itemlist = false;
    $scope.showItems = function() {
        if ($scope.itemlist === false)
            $scope.itemlist = true;
        else
            $scope.itemlist = false;
    }

    UsersFactory.getUser(id.id)
        .then(function(user) {
            $scope.user = user;
            $scope.username = user.username
            $scope.email = user.email
            $scope.description = user.description
            $scope.image = user.image
            $scope.location = user.location
        })

    UsersFactory.getProducts(id.id)
        .then(function(products) {
            $scope.products = products;
        })

    $scope.fileSelected = (files) => {
    if (files && files.length) {
    $scope.file = files[0];
    }
    }

    $scope.editUser = (e) => {
        e.preventDefault()
        const url = '/upload' //node.js route
          const file = $scope.file
          Upload.upload({ url, file })
            .success( ({imageLink}) => $scope.imageLink = imageLink )
            .then(()=>{      
              const { username, email, location, description} = $scope
              const image = $scope.imageLink
              UsersFactory.editUser(id.id, username, email, location, description, image  )
                .then (() => window.location.reload() )
                  })
         }

    $scope.deleteUser = () => {
      UsersFactory.deleteUser(id.id)
        .then (() => $location.path('/'))
        .then(() => {
          delete $rootScope.loggedUser
          StorageFactory.removeToken()
    })
    }
})
