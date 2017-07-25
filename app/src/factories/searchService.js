retainUIApp.factory('searchService', function () {
    "use strict";
    var search = {};
    search.visible = false;
    search._query = '';
    return {
        isVisible: function () {
            return search.visible;
        },
        toggle: function () {
            search.visible = !search.visible;
        },
        query: function(newQuery) {
            return arguments.length ? (search._query = newQuery) : search._query;
        }
    };
});
