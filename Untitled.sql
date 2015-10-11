BEGIN TRANSACTION;
CREATE TABLE `projects` (`id` integer PRIMARY KEY AUTOINCREMENT, `name` varchar(255), `description` varchar(255), `site` varchar(255));
INSERT INTO `projects` VALUES (1,'Rails','Server Side Web Framework','http://rubyonrails.org');
INSERT INTO `projects` VALUES (2,'AngularJS','Client-Side MV* Framework','http://angularjs.org');
COMMIT;
