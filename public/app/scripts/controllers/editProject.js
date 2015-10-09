app.controller('EditProject', function($scope, $rootScope, $location, $routeParams, Project) {

  var projects;
  $scope.$on('projects', function (event, response) {
    projects = response; // array of projects
  });

  var self = this;

  Project.get({id: $routeParams.id}, function(project) {
    self.original = project;
    // for (var i=0; i<projects.length; i++) {
    //   if (projects[i].id === $routeParams.id) {
    //     project.thumbnail = projects[i].thumbnail;
    //   }
    // }
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

});