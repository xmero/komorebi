angular.module("SharingTreeApp")

.controller('UsersListCtrl', function($scope, $rootScope, UsersFactory) {
    $rootScope.section = 'userList'
     UsersFactory.getUsers()
       .then( function(users) {
        $scope.users = users;
       })

})

