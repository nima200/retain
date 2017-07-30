retainUIApp.controller('folderStructureController', function ($scope, userservice, archiveservice, $mdDialog) {
    "use strict";
    var self = this;
    self.selectedUser = userservice.getSelectedUser;
    self.selectUser = function(id) {
        userservice.selectUser(id);
        $mdDialog.hide();
        Materialize.toast('Mailbox changed', 3000);
    };
    self.users = userservice.getAllUsers;
    self.userSearchQuery = userservice.query;
    self.filters = [
        {
            name: 'First name',
            value: 'fName'
        }, {
            name: 'Last name',
            value: 'lName'
        }, {
            name: 'Display name',
            value: 'dName'
        }, {
            name: 'Email Address',
            value: 'email'
        }
    ];
    self.openFolder = function(folder) {
        archiveservice.setSelectedFolder(folder);
    };
    
    self.resetSearchQuery = function () {
        $scope.query = {};
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
    self.closeDialog = function () {
        $mdDialog.hide();
    }
});
