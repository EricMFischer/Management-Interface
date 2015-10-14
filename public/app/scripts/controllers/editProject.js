app.controller('EditProject', function($scope, $rootScope, $location, $routeParams, Project) {

  var self = this;

  Project.get({id: $routeParams.id}, function(project) {
    self.original = project;
    console.log('self.original: ', self.original);
    $scope.project = new Project(self.original);
    console.log('$scope.project: ', $scope.project);

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
      void 0;
    });
  };

  $scope.flag = function() {
    $scope.project.flag(function() {
      void 0;
    });
  };

});