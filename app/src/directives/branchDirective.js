retainUIApp.directive('branch', function($compile) {
    "use strict";
    return {
        restrict: 'E',
        scope: {
            node: '=src'
        },
        controller: 'folderStructureController as folderCtrl',
        replace: true,
        template: '<a ng-click="folderCtrl.openFolder(node)">' +
        '<i ng-if="node.icon" class="{{node.icon}}" style="margin-left:20px; margin-right: 5px;">{{node.mdIcon}}</i>{{node.name}}</a>',
        link: function(scope, element) {
            var has_children = angular.isArray(scope.node.children);
            if (has_children) {
                var content = $compile('<tree src="node"></tree>')(scope);
                element.replaceWith(content);
            }
            $('.collapsible').collapsible();
        }
    }
});