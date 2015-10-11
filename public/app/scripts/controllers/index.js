app.controller('Index', function($scope, $rootScope, Project) {

  // $scope.lastProjects = Project.query(); // an array
  $scope.projects = Project.prototype.projects;
  console.log('$scope.projects: ', $scope.projects);

});