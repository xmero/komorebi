angular.module("SharingTreeApp")
.controller('PrivateCtrl', function($scope, $rootScope, UsersFactory,$location, StorageFactory, ProductsFactory, Upload ) {
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
              UsersFactory.editUser(id, username, email, location, description, image  )
                .then (() => window.location.reload() )
                  })
         }

    $scope.editProduct = (e, product) => {
      e.preventDefault()
      const url = '/upload' //node.js route
          const file = $scope.file
          Upload.upload({ url, file })
            .success( ({imageLink}) => $scope.imageLink = imageLink )
            .then (()=> {
          const { name, location, description, _id, free, postalCode} = product
          const image = $scope.imageLink
          ProductsFactory.editProduct(_id, name, location, description, image, free, postalCode)
            .then(function(product) {
            $scope.product = product
            window.location.reload()
        })
      })
    }

    $scope.deleteProduct = (e, pid) => {
      e.preventDefault()
      ProductsFactory.deleteProduct(pid)
        .then( () => window.location.reload() )
    }

    $scope.deleteUser = (e) => {
      e.preventDefault()
      UsersFactory.deleteUser(id)
        .then (() => $location.path('/'))
        .then(() => {
          delete $rootScope.loggedUser
          StorageFactory.removeToken()
    })
    }
})

