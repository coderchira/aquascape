(function() {
     angular.module("myapp").directive("statusPanel", function() {
          return {
               restrict: "E",
               replace: false,
               scope: {
                    statusOf: "="
               },
               templateUrl: "status-panel.html",
               controller: function($scope) {
                    $scope.panel = {
                         status: $scope.statusOf.status,
                         header: {
                              title: $scope.statusOf.title
                         },
                         body: {
                              timestamp: $scope.statusOf.timestamp,
                              toggle: function() {
                                   $scope.panel.status = !$scope.panel.status;
                              }
                         }
                    };
               }

          }
     })
})();