(function() {
     angular.module("myapp").directive("settingsRow", function() {
          return {
               restrict: "A",
               replace: true,
               scope: {
                    setting: "="
               },
               templateUrl: "settings-row.html",
               controller: function($scope) {
                    console.log("inside settings ctrl");
                    $scope.row = {
                         column: {
                              toggle: function(param) {
                           $scope.setting[param] = !$scope.setting[param];
                              }
                         }
                    };
               }
          };
     });
})();