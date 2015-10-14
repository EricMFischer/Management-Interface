app.controller('EditProject', function($scope, $rootScope, $location, $routeParams, Project) {

  var self = this;

  Project.get({id: $routeParams.id}, function(project) {
    self.original = project;
    // as a new project, it has 6 actions attached to it and also the 4 methods that are defined in projects.js
    $scope.project = new Project(self.original);
  });

  $scope.isClean = function() {
    return angular.equals(self.original, $scope.project);
  }

  $scope.destroy = function() {
    // only fn where we destroy self.original
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
      void 0;
    });
  };

  $scope.flag = function() {
    $scope.project.flag(function() {
      void 0;
    });
  };

});