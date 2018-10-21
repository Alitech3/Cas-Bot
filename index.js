// requring the discord.js lib
const Discord = require('discord.js');

// creating a new discord client (ie the bot)
const bot = new Discord.Client();

// require the information we put in settings.json such as our bot token
const Settings = require('./Settings.json');

// require test.js file for use later
const Test = require('./Commands/Test.js');

// used to catch errors so the code does not crash
process.on('unhandledRejection', error => console.error(`Uncaught Promise Rejection:\n${error}`));

// event handler fired when the bot logs into discord
bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag}`);
});

// event handler for when the bot recives a message
bot.on('message', async msg => {

	// ignores any message not starting with the prefix
	if(!msg.content.startsWith(Settings.Prefix)) {
		return;
	}

	// constant that slices out the prefix for the bot then shifts whats left to lower case
	/*
	ie: the message sent is CAS PiNg it will cut out the word CAS and we will be left with the word PiNg
	it will then shift whats left to lower case so PiNg will become ping
	*/
	const args = msg.content.slice(Settings.Prefix.length).toLowerCase();

	// splits whats left at every space then puts it in an array after that it then returns the first item in that array
	const Fargs = args.split(' ').shift();

	// used to find what command we will be using rather then having all of them preloaded
	const CommandsFile = require(`./Commands/${Fargs}.js`);

	// broken disregard
	//	const AdminFile = require(`./Admin/${Fargs}.js`);

	// make sure nothing below here is broken
	Test.test(args, msg);

	// Try the following code block and then catch and console log the error if any
	// Try... statements need a Catch or they will not work
	try {
		// running the command that is called while passing in args and msg
		CommandsFile.run(args, msg);
	}
	// catching the error for the Try statement
	catch(error) {
		console.error;
	}
});

// logging the bot in using the token in Settings.json
bot.login(Settings.Token);