
// Code goes here

(function () {
    var myapp = angular.module("myapp", ["ngRoute"])
            .config(function ($routeProvider) {
                $routeProvider
                     .when("/", {
                         templateUrl: "ng/views/aquadashboard.html",
                         controller: "aquaController"
                     })
                     .when("/settings", { templateUrl: "ng/views/aquasettings.html", controller: "aquaController" });
            })

    ;
})();