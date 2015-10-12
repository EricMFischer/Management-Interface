app.controller('Index', function($scope, $rootScope, Project) {

  $scope.projects = Project.query(); // an array
  console.log('$scope.projects: ', $scope.projects);
  // $scope.projects = Project.prototype.projects;
  // console.log('$scope.projects: ', $scope.projects);

});