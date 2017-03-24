angular.module("SharingTreeApp")

.controller('MessagesCtrl', function($scope, $rootScope, $routeParams, MessagesFactory, UsersFactory) {
    $rootScope.section = 'messages'

    const id = $routeParams

    MessagesFactory.getMessages(id.id)
        .then(function(messages) {
            $scope.messages = messages;
        })

    $scope.getMessages = () => {
        MessagesFactory.getMessages(id.id)
            .then(function(messages) {
                $scope.messages = messages;
            })
    }

    $scope.getSentMessages = () => {
        MessagesFactory.getSentMessages(id.id)
            .then(function(messages) {
                $scope.messages = messages;
            })
    }

    $scope.editMessage = (msgid) => {
        const status = "read"
        MessagesFactory.editMessage(msgid, status)
            .then(() => console.log('Message marked as readed'))
    }

})
