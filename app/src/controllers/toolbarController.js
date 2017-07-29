retainUIApp.controller('toolbarController', function (searchService) {
    "use strict";
    var self = this;
    self.menuItems = [{
        operation : 'Search',
        icon: 'search',
        action: function() {
            searchService.toggle();
        }
    }, {
        operation: 'Menu',
        icon: 'more_vert',
        action: null
    }];
    self.toolbarAction = function(action) {
        action();
    };

    // MATERIALIZE CSS JQUERY CALLS
    $(document).ready(function () {
        $('.tooltipped').tooltip({delay: 50});
    });
});