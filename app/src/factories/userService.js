retainUIApp.factory('userservice', function () {
    "use strict";

    var users = [{
        id: 1111,
        firstName: 'Nima',
        lastName: 'Adibpour',
        email: 'nima_ap@outlook.com',
        displayName: 'Nima Adibpour',
        emailSystem: 'Social Messaging',
        avatar: 'assets/avatars/avatar_nima.jpg',
        folders: {
            name: 'Mailbox',
            value: 'mailbox',
            children: [{
                name: 'Facebook',
                value: 'fb_rootFolder',
                icon: 'mdi mdi-facebook mdi-24px',
                children: [
                    {
                        name: 'Wall Posts',
                        value: 'fb_wallPostFolder',
                        icon: 'mdi mdi-format-quote-close mdi-24px'
                    },
                    {
                        name: 'Photos',
                        value: 'fb_photosFolder',
                        icon: 'material-icons',
                        mdIcon: 'insert_photo'
                    }
                ]
            }, {
                name: 'Twitter',
                value: 'tw_rootFolder',
                icon: 'mdi mdi-twitter mdi-24px',
                children: [
                    {
                        name: 'Tweets',
                        value: 'tw_tweetFolder',
                        icon: 'mdi mdi-format-quote-close mdi-24px'
                    }, {
                        name: 'Favourites',
                        value: 'tw_favFolder',
                        icon: 'mdi mdi-heart mdi-24px'
                    }, {
                        name: 'Messages',
                        value: 'tw_msgFolder',
                        icon: 'mdi mdi-message-text mdi-24px'
                    }
                ]
            }]
        }
    },{
        id: 1112,
        firstName: 'John',
        lastName: 'Smith',
        email: 'john_smith@outlook.com',
        displayName: 'John smith',
        emailSystem: 'Social Messaging',
        avatar: 'assets/avatars/avatar_john.png',
        folders: {
            name: 'Mailbox',
            value: 'mailbox',
            children: [{
                name: 'Facebook',
                value: 'fb_rootFolder',
                icon: 'mdi mdi-facebook mdi-24px',
                children: [
                    {
                        name: 'Wall Posts',
                        value: 'fb_wallPostFolder',
                        icon: 'mdi mdi-format-quote-close mdi-24px'
                    },
                    {
                        name: 'Photos',
                        value: 'fb_photosFolder',
                        icon: 'material-icons',
                        mdIcon: 'insert_photo'
                    }
                ]
            }]
        }
    }];
    var selectedUser = users[0];
    return {
        selectUser: function(id) {
            var result = users.filter(function(user) {
                return user.id === id;
            });
            selectedUser = result[0];
        },
        getUserInfo: function (id) {
            return users.filter(function (user) {
                return user.id === id;
            });
        },
        getSelectedUser: function() {
            return selectedUser;
        },
        getAllUsers: function() {
            return users;
        }
    }
});