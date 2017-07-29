retainUIApp.directive('tree', function ($compile) {
    "use strict";
    return {
        restrict: 'E',
        scope: {
            node: '=src'
        },
        replace: true,
        controller: 'folderStructureController as folderCtrl',
        template: '<ul class="collapsible collapsible-accordion">' +
        '<li>' +
        '<a ng-click="folderCtrl.openFolder(node)"  class="collapsible-header" ' +
        'ng-class="{active: node.name === \'Mailbox\'}"><i ng-if="node.icon" class="{{node.icon}}" style="margin-right: 5px;"></i>{{node.name}} </a>' +
        '<div class="collapsible-body">' +
        '<ul>' +
        '<li ng-repeat="child in node.children"><branch src="child"></branch></li>' +
        '</ul>' +
        '</div>' +
        '</li>' +
        '</ul>',
        link: function (scope, element) {
            $compile(element.contents().contents())(scope);
            $('.collapsible').collapsible();
        }
    };
});
