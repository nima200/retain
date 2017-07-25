retainUIApp.controller('archiveController', function ($scope, archiveservice, moderationservice, $mdDialog, $mdToast, $mdSidenav, searchService) {
    "use strict";
    var self = this;
    var menuClickEvent;
    var last = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };
    self.selectedFolder = null;
    self.observedMessage = null;
    self.messages = archiveservice.getMessages();
    self.moderationOptions = moderationservice.getModerationOptions();
    self.showMessage = function (message) {
        if (self.selectedFolder === null || self.selectedFolder.value === 'mailbox') {
            return true;
        } else {
            return message.folder.indexOf(self.selectedFolder.value) !== -1;
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
        return body.substr(0, 45) + "...";
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
        $scope.messageToDelete = message;
        $scope.messageToDeleteIndex = self.messages.indexOf(message);
        switch (modOption.value) {
            case 'delete':
                var confirm = $mdDialog.confirm()
                    .title('Are you sure you want to delete this message from Retain?')
                    .textContent('The following message will be deleted from your archive. This action will be recorded.')
                    .targetEvent(menuClickEvent)
                    .ok('Yes')
                    .cancel('No');
                $mdDialog.show(confirm).then(
                    function () {
                        archiveservice.delete($scope.messageToDelete);
                        console.log(self.messages);
                        self.deleteToast().success();
                    }, function () {
                        self.deleteToast().fail();
                    });
        }
    };
    self.deleteMessage = function (message) {
        archiveservice.delete(message);
    };
    self.toastPosition = angular.extend({}, last);
    self.getToastPosition = function () {
        sanitizePosition();
        return Object.keys(self.toastPosition)
            .filter(function (pos) {
                return self.toastPosition[pos];
            })
            .join(' ')
    };
    self.deleteToast = function () {
        return {
            success: function () {
                var pinTo = self.getToastPosition();
                var toast =
                    $mdToast.simple()
                        .textContent('Message Deleted')
                        .highlightAction(true)
                        .action('UNDO')
                        .position(pinTo)
                        .hideDelay(3000);
                $mdToast.show(toast).then(function (response) {
                    if (response === 'ok') {
                        self.undoDelete($scope.messageToDelete, $scope.messageToDeleteIndex)
                    }
                });
            },
            fail: function () {
                var pinTo = self.getToastPosition();
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Delete operation cancelled')
                        .position(pinTo)
                        .hideDelay(3000)
                );
            }
        };
    };
    self.undoDelete = function (message, index) {
        archiveservice.add(message, index);
    };
    self.searchQuery = searchService.query;
    function sanitizePosition() {
        var current = self.toastPosition;
        if (current.bottom && last.top) current.top = false;
        if (current.top && last.bottom) current.bottom = false;
        if (current.right && last.left) current.left = false;
        if (current.left && last.right) current.right = false;
        last = angular.extend({}, current);
    }

    $scope.$on('selectedFolder', function (event, folder) {
        self.selectedFolder = folder;
        /*$scope.$apply();*/
    });
});


