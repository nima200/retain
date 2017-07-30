retainUIApp.controller('searchController', function($scope, searchService) {
    "use strict";
    var self = this;
    self.visible = searchService.isVisible;
    self.query = searchService.query;
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
    self.resetSearchQuery = function () {
        searchService.query('');
    }
});
