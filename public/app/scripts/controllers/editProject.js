app.controller('EditProject', function($scope, $rootScope, $location, $routeParams, Project) {

  var self = this;

  Project.get({id: $routeParams.id}, function(project) {
    console.log('project in EditProject: ', project);
    self.original = project;
    $scope.project = new Project(self.original);
  });

  $scope.isClean = function() {
    return angular.equals(self.original, $scope.project);
  }

  $scope.destroy = function() {
    self.original.destroy(function() {
      $location.path('/');
    });
  };

  $scope.save = function() {
    console.log('$scope.project in save fn: ', $scope.project);
    $scope.project.update(function() {
      $location.path('/');
    });
  };

  $scope.publish = function() {
    $scope.project.publish(function() {
      void 0;
    });
  };

  $scope.flag = function() {
    $scope.project.flag(function() {
      void 0;
    });
  };

});