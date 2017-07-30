retainUIApp.controller('toolbarController', function (searchService) {
    "use strict";
    var self = this;
    self.toolbarActions = [{
        operation : 'Search',
        icon: 'search',
        action: function() {
            searchService.toggle();
        },
        templateUrl: '/src/views/toolbar-mainSearch.html'
    }, {
        operation: 'Menu',
        icon: 'more_vert',
        templateUrl: '/src/views/toolbar-mainMenu.html',
        children: [
            {
                operation: 'Language',
                icon: 'language',
                action: function () {

                }
            }, {
                operation: 'Admin Panel',
                icon: 'apps',
                action: function () {

                }
            }, {
                operation: 'Settings',
                icon: 'settings',
                action: function () {

                }
            }, {
                operation: 'Help',
                icon: 'help',
                action: function () {
                    
                }
            }, {
                operation: 'About',
                icon: 'domain',
                action: function() {

                }
            }
        ]
    }];
    self.toolbarAction = function(action) {
        action();
    };

    // MATERIALIZE CSS JQUERY CALLS
    $(document).ready(function () {
        $('.tooltipped').tooltip({delay: 50});
        $('.dropdown-button').dropdown();
    });
});