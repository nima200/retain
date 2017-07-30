retainUIApp.controller('archiveController', function ($scope, archiveservice, moderationservice, $mdDialog, $mdSidenav, searchService, userservice) {
    "use strict";
    var self = this;
    var menuClickEvent;
    self.selectedFolder = null;
    self.observedMessage = null;
    self.messages = archiveservice.getMessages();
    self.moderationOptions = moderationservice.getModerationOptions();
    self.showMessage = function (message) {
        if (message.mailbox === userservice.getSelectedUser().id) {
            if (self.selectedFolder === null || self.selectedFolder.value === 'mailbox') {
                return true;
            } else {
                return message.folder.indexOf(self.selectedFolder.value) !== -1;
            }
        }
    };
    self.openMessage = function (message) {
        self.observedMessage = message;
    };
    self.closeMessage = function () {
        self.observedMessage = null;
    };
    self.openMenu = function ($mdMenu, ev) {
        menuClickEvent = ev;
        $mdMenu.open(ev);
    };
    self.subBody = function (body) {
        return body.substr(0, 80) + "...";
    };
    self.addModOption = function (name, value, icon) {
        moderationservice.addModerationOption(name, value, icon);
        self.moderationOptions = moderationservice.getModerationOptions();
    };
    self.deleteModOption = function (name, value, icon) {
        moderationservice.deleteModerationOption(name, value, icon);
    };
    $scope.messageToDelete = null;
    $scope.messageToDeleteIndex = null;
    self.openDialog = function (modOption, message) {
        switch (modOption.value) {
            case 'delete':
                $scope.messageToDelete = message;
                $scope.messageToDeleteIndex = self.messages.indexOf(message);
                var confirm = $mdDialog.confirm()
                    .title('Are you sure you want to delete this message from Retain?')
                    .textContent('The following message will be deleted from your archive. This action is irreversible and will be recorded.')
                    .targetEvent(menuClickEvent)
                    .ok('Yes')
                    .cancel('No');
                $mdDialog.show(confirm).then(
                    function () {
                        archiveservice.delete($scope.messageToDelete);
                        Materialize.toast('Message deleted', 3000);
                    }, function () {
                        Materialize.toast('Delete operation cancelled', 3000);
                    });
        }
    };
    self.deleteMessage = function (message) {
        archiveservice.delete(message);
        Materialize.toast('Message deleted', 3000);
    };
    self.searchQuery = searchService.query;
    self.getUserInfo = function (id) {
        return userservice.getUserInfo(id);
    };

    self.constructFolderPath = function (folders) {
        var path = "";
        for (var i = 0; i < folders.length; i++) {
            path = folders[i] + '\\' + path;
        }
        return "\\" + path;
    };
    self.showUserInfo = function (user, ev) {
        $mdDialog.show({
            locals: {user: user},
            controller: userDialogController,
            templateUrl: '/src/views/templates/userInfoDialog.html',
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true,
            parent: angular.element(document.body)
        });
    };

    $scope.$on('selectedFolder', function (event, folder) {
        self.selectedFolder = folder;
        /*$scope.$apply();*/
    });

    // MATERIALIZE CSS JQUERY CALLS
    $(document).ready(function () {
        $('.tooltipped').tooltip({delay: 50});
    });

    function userDialogController($scope, $mdDialog, user) {
        $scope.user = user;
        $scope.hideDialog = function() {
            $mdDialog.hide();
        }
    }
});


