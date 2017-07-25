retainUIApp.controller('searchController', function($scope, searchService) {
    "use strict";
    var self = this;
    self.visible = searchService.isVisible;
    self.query = searchService.query;
});
