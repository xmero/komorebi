(function() {

  angular.module("SharingTreeApp")
    .factory("MessagesFactory", function($http, $routeParams) {

      function  getMessages(id){
        var url= `/messages/${id}`
         return $http.get(url)
                  .then( getResults )
      }

        function  getSentMessages(id){
        var url= `/messages/sent/${id}`
         return $http.get(url)
                  .then( getResults )
      }

      function sendEmail( name, product, email, messageBody){
        var url='/sendmail'
        var data = { name, product, email, messageBody }
        return $http.post(url, data)
          .then(console.log('Email Sent from the factory'))
      }


      function  getMessageDetails(id){
        var url= `/messages/details/${id}`
         return $http.get(url)
                  .then( getResults )
      }

      function  addMessage(streamId, association, sender, recipient, subject, body ,product ,from, to  ){
        const data ={ streamId, association, sender, recipient, subject, body ,product ,from, to  }
        var url= `/messages`
         return $http.post(url, data)
                  .then( getResults )
      }

      function  editMessage(id, status){
        const data = {status}
        var url= `/messages/update/${id}`
         return $http.put(url, data)
                  .then( getResults )
      }

      function  deleteMessage(id){
        var url= `/messages/${id}`
         return $http.post(url)
                  .then( console.log('Message removed succesfully.') )
      }

      return {
        getMessages:getMessages,
        getSentMessages:getSentMessages,
        addMessage: addMessage,
        getMessageDetails:getMessageDetails,
        editMessage:editMessage,
        sendEmail:sendEmail,
        deleteMessage:deleteMessage
      }

    })

  function getResults(response) {
    return response.data;
  }

})()