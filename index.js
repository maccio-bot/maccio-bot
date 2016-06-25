'use strict';

const SlackBot = require('slackbots');
const player = require('play-sound')({});
const _ = require('lodash');
const path = require('path');
const utils = require('./utils');
const haiDettoSpritz = require('./src/haiDettoSpritz');
const haiDetto = require('./src/haiDetto');

// create a bot
const bot = new SlackBot({
  token: utils.config.TOKEN,
  name: 'maccio-bot'
});

const params = {
  icon_url: utils.config.AVATAR
};

bot.on('start', function() {
  
});

bot.on(utils.types.MESSAGE, function(data) {
  console.log(data)
  console.log('-----------')

  if (data.type === utils.types.MESSAGE && data.subtype === utils.types.CHANNEL_JOIN) {
    bot.postMessageToChannel(getChannelName(this.channels, data.channel), 'hai joinato ma se poi te ne penti?', params);
    sePoiTeNePenti();
  }

  if( data.type === utils.types.MESSAGE && containsQuestion(data) && isMentioningMaccio(data, bot.self.id)) {
    cazzoMeneFrega();
    console.log(data);
    bot.postMessageToChannel(getChannelName(this.channels, data.channel), `<@${data.user}>: Ma amme che cazzo menefrega amme!!`, params);
  }

  if (data.type === utils.types.MESSAGE && data.username !== bot.name) {
    // bot.postMessageToChannel(getChannelName(this.channels, data.channel), `si molto bello "${data.text}" ma meglio SCOPARE!!!`, params);
  }

  if (data.type === utils.types.MESSAGE && data.bot_id === 'B1L961WGP') {
    // bot.postMessageToChannel(getChannelName(this.channels, data.channel), `si molto bello "${data.text}" ma meglio SCOPARE!!!`, params);
  }

  // if (data.type === utils.types.MESSAGE && haiDettoSpritz(data)) {
    // playSound('valori');
    // bot.postMessageToChannel(getChannelName(this.channels, data.channel), `si molto bello "${data.text}" ma meglio SCOPARE!!!`, params);
  // }

  if (data.type === utils.types.MESSAGE && haiDetto('valori', data)) {
    playSound('valori');
  }

  if (data.type === utils.types.MESSAGE && haiDetto('scopare', data)) {
    playSound('scopare');
  }

  if (data.type === utils.types.MESSAGE && haiDetto('suv', data)) {
    playSound('suv');
  }

  if (data.type === utils.types.MESSAGE && haiDetto('bravo', data)) {
    playSound('seiUnMito');
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
  player.play(path.join(__dirname, '/sounds/', 'cazzoMeNeFrega.mp3'), function(err){});
}

function playSound(name) {
  player.play(path.join(__dirname, '/sounds/', name + '.mp3'), function(err){});
}

function sePoiTeNePenti() {
  player.play(path.join(__dirname, '/sounds/', 'teNePenti.mp3'), function(err){});
}

function getUsernameById(users,id) {
  return _.find(users, user => {
    return user.id === id;
  }).name;
}


