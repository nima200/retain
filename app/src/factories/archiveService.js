retainUIApp.factory('archiveservice', function (broadcastservice) {
    "use strict";
    var archive = {};
    archive.title = "hello";
    archive.selectedFolder = null;
    archive.messages = [
        {
            from: 1112,
            to: 1111,
            mailbox: 1111,
            subject: 'wallpost subject 1',
            id: 1,
            sender: 'nima_ap@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget finibus nulla, volutpat fermentum ipsum. Praesent elementum consequat est, in mattis diam aliquet non. Donec a elit turpis. Nulla facilisi. In commodo mauris metus, quis molestie enim lobortis a. Aliquam accumsan eu nisi eget auctor. Praesent nec neque vehicula, eleifend.',
            box: 'inbox'
        },
        {
            from: 1111,
            to: 1112,
            mailbox: 1111,
            subject: 'photo subject 1',
            id: 2,
            sender: 'nima_ap@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_photosFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non est sed elit egestas elementum. Ut tincidunt nisi vel tempus imperdiet. Sed pulvinar dapibus risus sed placerat. Curabitur vulputate nulla tortor, sit amet tincidunt lorem sollicitudin at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;.',
            box: 'sent',
            attachments: [
                {
                    name: 'Photo 1',
                    path: '/assets/attachments/1.jpg'
                }, {
                    name: 'Photo 2',
                    path: '/assets/attachments/2.jpg'
                }, {
                    name: 'Photo 3',
                    path: '/assets/attachments/3.jpg'
                }, {
                    name: 'Photo 4',
                    path: '/assets/attachments/4.jpg'
                }
            ]
        },
        {
            from: 1112,
            to: 1111,
            mailbox: 1111,
            subject: 'wallpost subject 2',
            id: 3,
            sender: 'nima_ap@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'inbox'
        },
        {
            from: 1112,
            to: 1111,
            mailbox: 1111,
            subject: 'wallpost subject 3',
            id: 4,
            sender: 'nima_ap@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'inbox'
        },
        {
            from: 1111,
            to: 1112,
            mailbox: 1111,
            subject: 'wallpost subject 4',
            id: 5,
            sender: 'nima_ap@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder' , 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'sent'
        },
        {
            from: 1112,
            to: 1111,
            mailbox: 1111,
            subject: 'wallpost subject 5',
            id: 6,
            sender: 'nima_ap@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'inbox'
        },
        {
            from: 1111,
            to: 1112,
            mailbox: 1111,
            subject: 'wallpost subject 6',
            id: 7,
            sender: 'nima_ap@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'sent'
        }, {
            from: 1112,
            to: 1111,
            mailbox: 1112,
            subject: 'wallpost subject 1',
            id: 8,
            sender: 'nima_ap@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget finibus nulla, volutpat fermentum ipsum. Praesent elementum consequat est, in mattis diam aliquet non. Donec a elit turpis. Nulla facilisi. In commodo mauris metus, quis molestie enim lobortis a. Aliquam accumsan eu nisi eget auctor. Praesent nec neque vehicula, eleifend.',
            box: 'sent'
        },
        {
            from: 1111,
            to: 1112,
            mailbox: 1112,
            subject: 'photo subject 1',
            id: 9,
            sender: 'nima_ap@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_photosFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non est sed elit egestas elementum. Ut tincidunt nisi vel tempus imperdiet. Sed pulvinar dapibus risus sed placerat. Curabitur vulputate nulla tortor, sit amet tincidunt lorem sollicitudin at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;.',
            box: 'inbox',
            attachments: [
                {
                    name: 'Photo 1',
                    path: '/assets/attachments/1.jpg'
                }, {
                    name: 'Photo 2',
                    path: '/assets/attachments/2.jpg'
                }, {
                    name: 'Photo 3',
                    path: '/assets/attachments/3.jpg'
                }, {
                    name: 'Photo 4',
                    path: '/assets/attachments/4.jpg'
                }
            ]
        },
        {
            from: 1112,
            to: 1111,
            mailbox: 1112,
            subject: 'wallpost subject 2',
            id: 10,
            sender: 'nima_ap@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'sent'
        },
        {
            from: 1112,
            to: 1111,
            mailbox: 1112,
            subject: 'wallpost subject 3',
            id: 11,
            sender: 'nima_ap@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'sent'
        },
        {
            from: 1111,
            to: 1112,
            subject: 'wallpost subject 4',
            id: 12,
            sender: 'nima_ap@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder' , 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'inbox'
        },
        {
            from: 1112,
            to: 1111,
            mailbox: 1113,
            subject: 'wallpost subject 5',
            id: 13,
            sender: 'nima_ap@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'sent'
        },
        {
            from: 1111,
            to: 1112,
            mailbox: 1113,
            subject: 'wallpost subject 6',
            id: 14,
            sender: 'nima_ap@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'inbox'
        }

    ];
    return {
        setSelectedFolder: function(folder) {
            archive.selectedFolder = folder;
            broadcastservice.send('selectedFolder', folder);
        },
        add: function(message, index) {
            archive.messages.splice(index, 0, message);
        },
        getMessages: function() {
            return archive.messages;
        },
        delete: function (message) {
            var index = archive.messages.indexOf(message);
            archive.messages.splice(index, 1);
        }
    };
});
