  angular.module("SharingTreeApp")

  .controller('NavbarCtrl', function($scope, $location, AuthFactory, MessagesFactory) {
      $scope.logout = function() {
          AuthFactory.logout()
      }

      if ($scope.loggedUser) {
          MessagesFactory.getMessages($scope.loggedUser.id)
              .then((messages) => {
                  $scope.unread = messages.filter(isUnread).length
              })
      }

      function isUnread(message) {
          return message.status === 'not'
      }

  })
