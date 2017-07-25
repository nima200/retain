retainUIApp.factory('moderationservice', function () {
    "use strict";
    var moderationOptions = [
        {
            name: 'Delete',
            value: 'delete',
            icon: 'delete'
        }, {
            name: 'Forward',
            value: 'forward',
            icon: 'forward'
        }, {
            name: 'Litigation Hold',
            value: 'litHold',
            icon: 'vpn_key'
        }, {
            name: 'Confidential State',
            value: 'confState',
            icon: 'remove_red_eye'
        }, {
            name: 'Restore',
            value: 'restore',
            icon: 'restore'
        }, {
            name: 'Print',
            value: 'print',
            icon: 'print'
        }, {
            name: 'Export',
            value: 'export',
            icon: 'import_export'
        }
    ];
    return {
        getModerationOptions: function() {
            return moderationOptions;
        },
        addModerationOption: function(name, value, icon) {
            moderationOptions.push({
                name: name,
                value: value,
                icon: icon
            });
        },
        deleteModerationOption: function(name, value, icon) {
            var item = {name: name, value: value, icon: icon};
            var index = moderationOptions.indexOf(item);
            moderationOptions.splice(index, 1);
        }
    };
});
