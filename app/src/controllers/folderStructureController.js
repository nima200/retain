retainUIApp.controller('folderStructureController', function ($scope, userservice, archiveservice) {
    "use strict";
    var self = this;
    self.selectedUser = userservice.getSelectedUser;
    self.selectUser = function(id) {
        userservice.selectUser(id);
    };
    $scope.title = archiveservice.getTitle();

    this.openFolder = function(folder) {
        archiveservice.setSelectedFolder(folder);
    };

    this.resetSelectedFolder = function() {
        archiveservice.setSelectedFolder(null);
    };
});
