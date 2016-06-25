'use strict';

exports.config = {
    TOKEN: process.env.TOKEN || 'SCOPPAREE',
    AVATAR: 'https://avatars2.githubusercontent.com/u/20127770?v=3&s=200'
};

exports.types = {
    MESSAGE: 'message',
    CHANNEL_JOIN: 'channel_join'
};