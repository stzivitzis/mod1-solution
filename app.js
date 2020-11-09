(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.userMessage = "";

  $scope.userInput = "";

  $scope.buttonClick = function() {
    if ($scope.userInput == "") {
        $scope.userMessage = "Please enter data first!";
    } else {
        var userInputLiterals = $scope.userInput.split(',')
        if (userInputLiterals.length<=3) {
            $scope.userMessage = "Enjoy!";
        } else {
          $scope.userMessage = "Too much!";
        }
    }
  };
}


})();
