angular.module("SharingTreeApp")

.controller('MessagesViewCtrl', function($scope, $rootScope, $routeParams, MessagesFactory, UsersFactory) {
    $rootScope.section = 'messageView'

    const id = $routeParams

    MessagesFactory.getMessageDetails(id.id)
        .then(function(message) {
            $scope.message = message;
        })

      $scope.editMessage = (msgid) => {
        const status = "not"
        MessagesFactory.editMessage(msgid, status)
        .then(() => console.log('Message marked as Unreaded'))
        }
    
    $scope.addMessage = (e) => {
        e.preventDefault()
        const streamId = 'testing'
        const association = $scope.message.association
        const product = $scope.message.product
        const sender= $scope.loggedUser.id
        const from = $scope.message.to
        const to = $scope.message.from
        const recipient= $scope.message.sender
        const subject= `Answer to ${$scope.message.product} request.`
        const body = $scope.messageBody
       MessagesFactory.addMessage( streamId, association, sender, recipient, subject, body ,product ,from, to )
            .then(()=>{
              console.log('Message Added!')
            })
          }

        $scope.deleteMessage = (e) => {
            MessagesFactory.deleteMessage(id.id)
            .then(()=>{
              console.log('Message deleted!')
            })
        }


})
