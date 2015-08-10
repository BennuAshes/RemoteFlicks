(function() {
    angular.module('app')
    .factory('RemoteFlix', Factory);
    
    Factory.$inject = ['$http','$q'];
    
    function Factory($http,$q) {
        
        var service = {
           add:add
        };
        
        
        function add(request) {
            console.log('yep');
            $http.jsonp('http://192.168.0.107:8080/remoteflix/add/'+request).then(function(response) {
                console.log(response); 
                
            });
        }

       
        return service;
    }
})();