retainUIApp.controller('toolbarController', function (searchService) {
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
                action: function () {

                }
            }, {
                operation: 'Admin Panel',
                icon: 'assets/icons/account-settings.svg',
                action: function () {

                }
            }, {
                operation: 'Settings',
                icon: 'assets/icons/settings.svg',
                action: function () {

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
});