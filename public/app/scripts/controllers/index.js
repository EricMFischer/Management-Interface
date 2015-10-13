app.controller('Index', function($scope, $rootScope, Project) {

  $scope.projects = Project.query();

});