const Discord = require('discord.js');

const bot = new Discord.Client();

const Settings = require('./Settings.json');

process.on('unhandledRejection', error => console.error(`Uncaught Promise Rejection:\n${error}`));

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if(msg.author.bot) {
    return;
  }
  if(!msg.content.startsWith(Settings.Prefix)){
    return;
  }
  const args = msg.content.split(Settings.Prefix);
  if (args[1] === 'ping') {
    msg.reply('Pong!');
  }
});

bot.login(Settings.Token);