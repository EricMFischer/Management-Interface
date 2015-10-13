app.controller('Index', function($scope, $rootScope, Project) {

  $scope.projects = Project.query();
  console.log('$scope.projects: ', $scope.projects);

});