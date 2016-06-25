var SlackBot = require('slackbots');

// create a bot
var bot = new SlackBot({
  token: process.env.TOKEN, // Add a bot https://my.slack.com/services/new/bot and put the token
  name: 'Maccio-bot'
});

bot.on('start', function() {
  // more information about additional params https://api.slack.com/methods/chat.postMessage
  // var params = {
  //   icon_emoji: ':cat:'
  // };
  //
  // // define channel, where bot exist. You can adjust it there https://my.slack.com/services
  // bot.postMessageToChannel('general', 'meow!', params);
  //
  // // define existing username instead of 'user_name'
  // bot.postMessageToUser('user_name', 'meow!', params);
  //
  // // define private group instead of 'private_group', where bot exist
  // bot.postMessageToGroup('private_group', 'meow!', params);

});

bot.on('message', function(data) {
  if (data.type === 'message' && data.username !== bot.name) {
    bot.postMessageToChannel('general', `si molto bello "${data.text}" ma meglio SCOPARE!!!`);
  }
});

