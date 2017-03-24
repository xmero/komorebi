angular.module("SharingTreeApp")

    .config( function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  })

.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/home.html',
            controller: 'HomeCtrl'
        })
        .when('/users/:id', {
            templateUrl: '/templates/user.html',
            controller: 'UserCtrl',
            secure: true
        })
        .when('/detail/:id', {
            templateUrl: '/templates/detail.html',
            controller: 'DetailCtrl'
        })
        .when('/usersList', {
            templateUrl: '/templates/usersList.html',
            controller: 'UsersListCtrl',
            secure: true
        })

         .when('/login',{
            templateUrl: '/templates/login.html',
            controller: 'LoginCtrl'
        })
        .when('/register',{
            templateUrl: '/templates/register.html',
            controller: 'RegisterCtrl'
        })
      
        .when('/private',{
            templateUrl: '/templates/private.html',
            controller: 'PrivateCtrl',
            secure: true
        })

        .when('/postitem', {
            templateUrl: '/templates/post-items.html',
            controller: 'AddProductCtrl',
            secure: true
        })

        .when('/messages/:id', {
            templateUrl: '/templates/messages.html',
            controller: 'MessagesCtrl',
            secure: true
        })

        .when('/messages/view/:id', {
            templateUrl: '/templates/message-view.html',
            controller: 'MessagesViewCtrl',
            secure: true
        })
        .when('/about', {
            templateUrl: '/templates/about.html',
        })
})

.run(function($rootScope, $location, StorageFactory, AuthFactory){

      if ( AuthFactory.isLoggedIn() ) {
        const token = StorageFactory.readToken()
        AuthFactory.setCredentials(token)
      }

      $rootScope.$on('$routeChangeStart', function (event, next, current) {

        if(next && next.secure){
          if ( !AuthFactory.isLoggedIn() ){
            $location.path('/login')
          }
        }
      })
  })