export default function homeController($scope, $location, cityService) {
  $scope.city = cityService.city;
  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });

  $scope.submit = function() {
    $location.path('/forecast');
  }
}
