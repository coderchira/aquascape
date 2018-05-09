(function(){
    var onForTrue =angular.module("myapp").filter("onForTrue",function(){
          return function(value){
               if (value == true){
                    return "ON";
               }
               else if (value == false){
                    return "OFF";
               }
          }
     })
})();