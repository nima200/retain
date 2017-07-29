retainUIApp.controller('folderStructureController', function ($scope, userservice, archiveservice, $mdDialog) {
    "use strict";
    var self = this;
    self.selectedUser = userservice.getSelectedUser;
    self.selectUser = function(id) {
        userservice.selectUser(id);
        $mdDialog.hide();
    };
    self.users = userservice.getAllUsers;

    self.openFolder = function(folder) {
        archiveservice.setSelectedFolder(folder);
    };

    self.resetSelectedFolder = function() {
        archiveservice.setSelectedFolder(null);
    };

    self.changeMailbox = function(ev) {
        $mdDialog.show({
            controller: 'folderStructureController as mailboxCtrl',
            templateUrl: '/src/views/mailboxes.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true
        })
    };
});
