app.controller('EditProject', function($scope, $rootScope, $location, $routeParams, Project) {

  var self = this;

  Project.get({id: $routeParams.id}, function(project) {
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
    $scope.project.update(function() {
      $location.path('/');
    });
  };

  $scope.publish = function() {
    $scope.project.publish(function() {
      $location.path('/');
    });
  };

  $scope.flag = function() {
    $scope.project.flag(function() {
      $location.path('/');
    });
  };

});