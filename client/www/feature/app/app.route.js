(function(){
    angular.module('app')

    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        $stateProvider
            .state('app', {
                url: '/controls',
                //abstract: true,
                templateUrl: 'feature/app/app.html',
                controller: "AppController as vm" // controllerAs not compat with ionic
                
            });
        
        $urlRouterProvider.when('','/controls');

    }]);
    
})();