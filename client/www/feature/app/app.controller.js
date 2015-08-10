(function(){
    angular.module('app')
    .controller("AppController",Controller);

    Controller.$inject = ["RemoteFlix"];
    
    function Controller(RemoteFlix) {
        var vm = this;
        console.log('app con');
        vm.startStop = function() {
            console.log('startStop');
            RemoteFlix.add("startStop");
        }
    }
    
})();