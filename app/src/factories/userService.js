retainUIApp.factory('userservice', function () {
    "use strict";
    var user = {
        firstName: 'Nima',
        lastName: 'Adibpour',
        email: 'nima_ap@outlook.com',
        displayName: 'Nima Adibpour',
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
    };
    return {
        getFirstName: function () {
            return user.firstName;
        },
        setFirstName: function (firstName) {
            user.firstName = firstName;
        },
        getLastName: function () {
            return user.lastName;
        },
        setLastName: function (lastName) {
            user.lastName = lastName;
        },
        getEmail: function () {
            return user.email;
        },
        setEmail: function (email) {
            user.email = email;
        },
        getDisplayName: function () {
            return user.displayName;
        },
        setDisplayName: function (displayName) {
            user.displayName = displayName;
        },
        getFolders: function () {
            return user.folders;
        },
        setFolders: function (folders) {
            user.folders = folders;
        },
        getAvatar: function() {
            return user.avatar;
        }
    }
});