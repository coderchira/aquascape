/// <reference path="controllers/aquaController.js" />

// Code goes here

(function() {
     angular.module("myapp", ["ngRoute"])
          .config(function($routeProvider) {
               $routeProvider
                    .when("/", {
                         templateUrl: "views/aquadashboard.html",
                         controller: "controllers/aquaController.js"
                    })
                    .when("/settings", { templateUrl: "views/aquasettings.html", controller: "controllers/aquaController.js" });
          })

     ;
})();