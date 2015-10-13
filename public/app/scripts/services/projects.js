app.factory('Project', function($resource){
  var Project = $resource('/projects/:id', null, { update: { method: 'PUT' }}); // declaring a custom action that extends the default $resource actions

  // Project.prototype.projects = [];
  // JSONdata.feed.forEach(function(obj) {
  //   var project = {};
  //   project.description = obj.path_prefix + obj.media_key + 'anchor.jpg'; // thumbnail
  //   project.site = obj.path_prefix + obj.media_key + 'anchor.jpg'; // photo
  //   project.x = obj.size_x || 'N/A';
  //   project.y = obj.size_y || 'N/A';
  //   project.likes = obj.likes || 0;
  //   project.time = (new Date(obj.create_e * 1000)).toDateString();
  //   for (var i=0; i<obj.media_files.length; i++) {
  //     if (obj.media_files[i] === 'movie.mp4') {
  //       project.movie = obj.path_prefix + obj.media_key + 'movie.mp4';
  //     }
  //   }
  //   if (obj.media_key !== undefined) {
  //     Project.prototype.projects.push(project); 
  //   }
  // });

  Project.prototype.update = function(cb) {
    // invoking $resource object initially returns an empty obj/arr
    // once data is returned from the server, obj is populated (useful, as obj is attached to rendered model)
    // 'this' is the obj we are updating
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