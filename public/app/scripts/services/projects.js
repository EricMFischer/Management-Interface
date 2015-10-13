app.factory('Project', function($resource, $location){
  // $resource: factory that creates a resource object, which lets you interact with RESTful server-side data sources
  // actions: get, save, query, remove, delete
  // methods: $save, $remove, $delete

  var Project = $resource('/projects/:id', null, { update: { method: 'PUT' }}); // 1) URL, 2) default values for URL parameters, 3) hash of custom actions, 4) options

  Project.prototype.update = function(cb) {
    // invoking resource object initially returns an empty obj/arr
    // once data is returned from server, obj is populated (this is useful, as obj is often attached to rendered model)

    // 'this' is the object we are updating
    // .update will PUT /notes/ID with the project object in the request payload
    return Project.update({ id: this.id }, this, cb);
  };
  
  Project.prototype.destroy = function(cb) {
    console.log ('this in destroy: ', this);
    return Project.remove({ id: this.id }, cb);
  };

  Project.prototype.publish = function() {
    console.log ('this in publish: ', this);
    return Project.get({ id: this.id }, function(project) {
      Project.update({ id: project.id }, { published: !project.published });
      $location.path('/');
    });
  };

  Project.prototype.flag = function() {
    console.log ('this in flag: ', this);
    return Project.get({ id: this.id }, function(project) {
      Project.update({ id: project.id }, { flagged: !project.flagged });
      $location.path('/');
    });
  };

  return Project;
});