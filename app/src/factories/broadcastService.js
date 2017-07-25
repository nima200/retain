retainUIApp.factory('broadcastservice', function($rootScope) {
    "use strict";
    return {
        send: function(msg, data) {
            $rootScope.$broadcast(msg, data);
        }
    }
});
