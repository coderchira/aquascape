// Code goes here

(function() {
     angular.module("myapp", ["ngRoute"])
          .config(function($routeProvider) {
               $routeProvider
                    .when("/", {
                         templateUrl: "aquadashboard.html",
                         controller: "aquaController"
                    })
                    .when("/settings",{templateUrl:"aquasettings.html",controller:"aquaController"});
          })

     ;
})();