app.factory('Project', function($resource){
  var Project = $resource('/projects/:id', null, { update: { method: 'PUT' }}); // declaring a custom action that extends the default $resource actions

  Project.prototype.update = function(cb) {
    // invoking $resource object initially returns an empty obj/arr
    // once data is returned from server, obj is populated (useful, as obj is often attached to rendered model)
    // 'this' is the object we are updating
    return Project.update({ id: this.id }, this, cb);
  };
  
  Project.prototype.destroy = function(cb) {
    return Project.remove({ id: this.id }, cb);
  };

  Project.prototype.publish = function(cb) {
    return Project.get({ id: this.id }, function(project) {
      Project.update({ id: project.id }, { published: !project.published });
    });
  };

  Project.prototype.flag = function(cb) {
    return Project.get({ id: this.id }, function(project) {
      Project.update({ id: project.id }, { flagged: !project.flagged });
    });
  };

  return Project;
});