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
	if(!msg.content.startsWith(Settings.Prefix)) {
		return;
	}
	const args = msg.content.slice(Settings.Prefix.length).toLowerCase();
	if (args === 'ping') {
		msg.reply('Pong!');
	}
	if (args === 'sad day on the ridge') {
		msg.reply('https://cdn.discordapp.com/attachments/455765006789640213/493540525123567627/8DJeHEZ.jpg');
	}
});

bot.login(Settings.Token);