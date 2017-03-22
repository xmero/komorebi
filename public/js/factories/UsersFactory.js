(function() {

  angular.module("SharingTreeApp")
    .factory("UsersFactory", function($http, $routeParams) {


      function getUsers(){
        var url = '/users/api'
        return $http.get(url)
                  .then( getResults )
      }

      function  getUser(id){
        var url= `/users/api/${id}`
         return $http.get(url)
                  .then( getResults )
      }

      function  editUser(id, username, email, location, description, image ){
        const data ={ username, email, location, description, image }
        var url= `/private/edit/${id}`
         return $http.put(url, data)
                  .then( getResults )
      }

      function getProducts(id){
        var url = `/products/api/myitems/${id}`
        return $http.get(url)
                  .then( getResults )
      }

      function  deleteUser(id){
        var url= `/private/remove/${id}`
         return $http.post(url)
                  .then( getResults )
      }

      return {
        getUsers: getUsers,
        getUser: getUser,
        editUser: editUser,
        deleteUser: deleteUser,
        getProducts: getProducts
      }

    })

  function getResults(response) {
    return response.data;
  }

})()