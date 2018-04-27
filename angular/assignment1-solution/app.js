(function () {

    angular.module('lunchChecker', [])
        .controller('lunchController', lunchController);
    lunchController.$inject = ['$scope'];
    function lunchController($scope) {
        $scope.message = "";
        $scope.showMessage = function () {
            var dishes;
            if ($scope.input) {
                $scope.input = $scope.input.trim();
                dishes = $scope.input.split(",");
                dishes = dishes.filter(function (item) {
                    return item.length > 0;
                });
                if (dishes.length <= 3) {
                    $scope.message = "Enjoy!";
                }
                else {
                    $scope.message = "Too Much!";
                }
            }
            else {
                $scope.message = "Please enter data first.";
            }
        };
    }
    
})();
