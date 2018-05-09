(function() {
 var statusPanel = angular.module("myapp").directive("statusPanel", function() {
          return {
               restrict: "E",
               replace: true,
               scope: {
                    statusOf: "="
               },
               templateUrl: "ng/templates/status-panel.html",
               controller: function($scope) {
                    $scope.panel = {
                         header: {
                              title: $scope.statusOf.title
                         },
                         body: {
                             timestamp: $scope.statusOf.timestamp,
                             status : $scope.statusOf.status,
                             toggle: function () {
                                 console.log($scope.panel.body.status);
                                 console.log("toggling now");
                                 $scope.panel.body.status = !$scope.panel.body.status;
                                 console.log($scope.panel.body.status);
                              }
                         }
                    };
               }

          }
     })
})();