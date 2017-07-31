retainUIApp.controller('toolbarController', function ($scope, searchService, $mdDialog, userservice) {
    "use strict";
    var self = this;
    self.toolbarActions = [{
        operation: 'Search',
        icon: 'search',
        action: function () {
            $('.tooltipped').tooltip('hide');
            searchService.toggle();
        },
        templateUrl: '/src/views/toolbar-mainSearch.html'
    }, {
        operation: 'Menu',
        icon: 'more_vert',
        templateUrl: '/src/views/toolbar-mainMenu.html',
        action: function () {
            $('.tooltipped').tooltip('hide');
        },
        children: [
            {
                operation: 'Language',
                icon: 'assets/icons/translate.svg',
                action: function (ev) {
                $mdDialog.show({
                    locals: {languages: ['English', 'French', 'German', 'Chinese']},
                    controller: dialogControllers().languageDialogController,
                    templateUrl: '/src/views/templates/languageDialog.html',
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: false,
                    parent: angular.element(document.body)
                });
            }
            }, {
                operation: 'Admin Panel',
                icon: 'assets/icons/account-settings.svg',
                action: function () {

                }
            }, {
                operation: 'Settings',
                icon: 'assets/icons/settings.svg',
                action: function (ev) {
                    $mdDialog.show({
                        controller: dialogControllers().settingDialogController,
                        templateUrl: '/src/views/templates/settingDialog.html',
                        targetEvent: ev,
                        clickOutsideToClose: true,
                        fullscreen: true,
                        parent: angular.element(document.body)
                    })
                }
            }, {
                operation: 'Exported Items',
                icon: 'assets/icons/export.svg',
                action: function () {

                }
            }, {
                operation: 'Tag Definitions',
                icon: 'assets/icons/tag-multiple.svg',
                action: function () {

                }
            }, {
                operation: 'Help',
                icon: 'assets/icons/help-circle.svg',
                action: function () {

                }
            }, {
                operation: 'About',
                icon: 'assets/icons/domain.svg',
                action: function () {

                }
            }
        ]
    }];
    self.toolbarAction = function (action) {
        action();
    };

    // MATERIALIZE CSS JQUERY CALLS
    $(document).ready(function () {
        $('.tooltipped').tooltip({delay: 50});
        $('.dropdown-button').dropdown();
    });
    function dialogControllers() {
        var hideDialog = function() {
            $mdDialog.hide();
        };
        return {
            languageDialogController: function ($scope, languages) {
                $scope.languages = languages;
                $scope.currentLanguage = $scope.languages[0];
                $scope.hideDialog = hideDialog;
            },
            settingDialogController: function ($scope) {
                $scope.userGroups = ['Default', 'HR', 'Upper Management', 'Management', 'Sales', 'Engineering'];
                $scope.hideDialog = hideDialog;
                $scope.users = userservice.getAllUsers;
            }
        }
    }
});