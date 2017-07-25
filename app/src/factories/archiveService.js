retainUIApp.factory('archiveservice', function (broadcastservice) {
    "use strict";
    var archive = {};
    archive.title = "hello";
    archive.selectedFolder = null;
    archive.messages = [
        {
            subject: 'wallpost subject 1',
            id: 1,
            sender: 'john_smith@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget finibus nulla, volutpat fermentum ipsum. Praesent elementum consequat est, in mattis diam aliquet non. Donec a elit turpis. Nulla facilisi. In commodo mauris metus, quis molestie enim lobortis a. Aliquam accumsan eu nisi eget auctor. Praesent nec neque vehicula, eleifend.',
            box: 'inbox'
        },
        {
            subject: 'photo post subject 1',
            id: 2,
            sender: 'nima_ap@outlook.com',
            receiver: 'john_smith@outlook.com',
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
            subject: 'wallpost subject 2',
            id: 3,
            sender: 'nima_ap@outlook.com',
            receiver: 'jane_doe@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'sent'
        },
        {
            subject: 'wallpost subject 3',
            id: 3,
            sender: 'nima_ap@outlook.com',
            receiver: 'alex_delta@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'sent'
        },
        {
            subject: 'wallpost subject 4',
            id: 3,
            sender: 'jane_smith@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder' , 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'inbox'
        },
        {
            subject: 'wallpost subject 5',
            id: 3,
            sender: 'john_doe@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'inbox'
        },
        {
            subject: 'wallpost subject 6',
            id: 3,
            sender: 'john_smith@outlook.com',
            receiver: 'nima_ap@outlook.com',
            folder: ['fb_wallPostFolder', 'fb_rootFolder'],
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet vestibulum ante, at tincidunt ex. Curabitur nec sodales tellus. Fusce commodo, libero sit amet mollis convallis, lorem dui auctor risus, a tempus enim massa et ex. Quisque eget libero nisl. In egestas pellentesque libero, vel tempor ex rutrum a.',
            box: 'inbox'
        }
    ];
    return {
        getTitle: function() {
            return archive.title;
        },
        setTitle: function(newTitle) {
            archive.title = newTitle;
        },
        getSelectedFolder: function() {
            return archive.selectedFolder;
        },
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
