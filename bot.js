const Discord = require('discord.js');
const auth = require('./auth.json');
const client = new Discord.Client();

let util = require('./util.js');

console.log('Starting...');
client.on('ready', () => {
  console.log('Connected and ready!');
});

// Message Loop
client.on('message', message => {

  // don't respond to yourself
  if (message.author.id === client.user.id) {
    return;
  }

  // message demo
  message.channel.send(message.content + " BEPIS")

  // reply demo
  // message.reply(message.content + " BEPIS")
  //   .then(msg => console.log(`Sent a reply to ${msg.author}`))
  //   .catch(console.error);

  // emoji demo
  message.react(util.getEmoji("bepis", client));
});

client.login(auth.token);