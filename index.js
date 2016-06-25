var SlackBot = require('slackbots');
var player = require('play-sound')(opts = {})
const _ = require('lodash');
const path = require('path');
const utils = require('./utils');

// create a bot
var bot = new SlackBot({
  token: utils.config.TOKEN,
  name: 'maccio-bot'
});

bot.on('start', function() {
  
});

bot.on(utils.types.MESSAGE, function(data) {

  if (data.type === utils.types.MESSAGE && data.subtype === utils.types.CHANNEL_JOIN) {
    // FIX ME PLEASE
    bot.postMessageToChannel(getChannelName(this.channels, data.channel), 'hai joinato ma se poi te ne penti?');
    sePoiTeNePenti();
  } else if( data.type === utils.types.MESSAGE && containsQuestion(data) && isMentioningMaccio(data, bot.self.id)) {
    cazzoMeneFrega();
    //bot.postMessageToUser(getUserById(bot.users,data.username), 'aasdaddasd');
  } else if (data.type === utils.types.MESSAGE && data.username !== bot.name) {
    // bot.postMessageToChannel(getChannelName(this.channels, data.channel), `si molto bello "${data.text}" ma meglio SCOPARE!!!`);
  }

});

function getChannelName(channels, id) {
  return _.find(channels, (channel) => {
    return channel.id === id;
  }).name;
}

function isMentioningMaccio(data, id) {
  return data.text.toLowerCase().indexOf('maccio') > -1 ||
      data.text.indexOf(id) > -1;
}

function containsQuestion(data) {
  return data.text.toLowerCase().indexOf('?') > -1;
}

function cazzoMeneFrega() {
  player.play(path.join(__dirname, '/sounds/', 'cazzoMeNeFrega.mp3'), function(err){})
}

function playSound(name) {
  player.play(path.join(__dirname, '/sounds/', name + '.mp3'), function(err){})
}

function sePoiTeNePenti() {
  player.play(path.join(__dirname, '/sounds/', 'Maccio-Te-Ne-Penti.mp3'), function(err){})
}

function getUserById(users,id) {
  return _.find(users, user => {
    return user.id === id;
  })
}


