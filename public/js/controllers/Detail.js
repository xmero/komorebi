angular.module("SharingTreeApp")

.controller('DetailCtrl', function($scope, $rootScope, $routeParams,ProductsFactory, UsersFactory, MessagesFactory) {
    $rootScope.section = 'detail'
    const id = $routeParams
   
      ProductsFactory.getDetails(id.id)
        .then( function(product) {
         $scope.product = product;
        })

        if($scope.loggedUser){
          
      UsersFactory.getUser($scope.loggedUser.id)
        .then(function(user) {
            $scope.username = user.username;
        })
        }

      $scope.sendEmail = (e) => {
        e.preventDefault()
        const name = $scope.username
        const product = $scope.product.name
        const email = $scope.product.owner.email
        const messageBody = $scope.messageBody
        MessagesFactory.sendEmail(name, product, email, messageBody)
            .then(()=>{
                window.alert("Mensaje y email enviados al usuario.") 
            })
      }

      $scope.addMessage = (e) => {
        e.preventDefault()
        let streamId = 'testing'
        const association = $scope.product._id
        const product= $scope.product.name
        const sender= $scope.loggedUser.id
        const from = $scope.username
        const to = $scope.product.owner.username
        const recipient= $scope.product.owner._id
        const subject= `${$scope.product.name} requested.`
        const body = $scope.messageBody
       MessagesFactory.addMessage(streamId, association, sender, recipient, subject, body ,product ,from, to )
            .then(()=>{
              console.log('Message Added!')
            })
          }        
})

