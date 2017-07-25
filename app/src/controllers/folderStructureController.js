retainUIApp.controller('folderStructureController', function ($scope, userservice, archiveservice) {
    "use strict";
    var self = this;
    self.firstName = userservice.getFirstName();
    self.lastName = userservice.getLastName();
    self.email = userservice.getEmail();
    self.displayName = userservice.getDisplayName();
    self.folders = userservice.getFolders();
    self.avatar = userservice.getAvatar();
    self.test = true;
    $scope.title = archiveservice.getTitle();

    $scope.$watch('lastName', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            userservice.setLastName(newValue);
        }
    });
    $scope.$watch('displayName', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            userservice.setDisplayName(newValue);
        }
    });
    $scope.$watch('email', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            userservice.setEmail(newValue);
        }
    });
    $scope.$watch('folders', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            userservice.setFolders(newValue)
        }
    });

    this.openFolder = function(folder) {
        archiveservice.setSelectedFolder(folder);
    };

    this.resetSelectedFolder = function() {
        archiveservice.setSelectedFolder(null);
    }
});
