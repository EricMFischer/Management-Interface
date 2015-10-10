app.controller('EditProject', function($scope, $rootScope, $location, $routeParams, Project) {

  var self = this;

  console.log('EP projects: ', Project.prototype.projects);

  Project.get({id: $routeParams.id}, function(project) {
    self.original = project;
    for (var i=0; i<Project.prototype.projects.length; i++) {
      if (Project.prototype.projects[i].id == $routeParams.id) {
        $scope.photo = Project.prototype.projects[i];
      }
    }
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