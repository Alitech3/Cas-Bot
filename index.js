// requring the discord.js lib
const Discord = require('discord.js');

// creating a new discord client (ie the bot)
const bot = new Discord.Client();

// require the information we put settings.json such as our bot token
const Settings = require('./Settings.json');

const Kill = require('./Assets/Kill.json');

// used to catch errors
process.on('unhandledRejection', error => console.error(`Uncaught Promise Rejection:\n${error}`));

// fired when the bot logs into discord
bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag}!`);
	console.log('Start Testing');
	const myMessage = require('./Commands/myModule.js');
	console.log(myMessage);
});

bot.on('message', async msg => {

	// constant that slices out the prefix for the bot then shifts whats left to lower case
	/*
	ie: the message sent is CAS PiNg it will cut out the word CAS and we will be left with the word PiNg
	it will then shift whats left to lower case so PiNg will become ping
	*/
	const args = msg.content.slice(Settings.Prefix.length).toLowerCase();

	// make sure nothing below here is broken
	if (args === 'test') {
		msg.reply('Would be too simple if it worked on the first try.');
	}


	// Try the following code block and then catch and console log the error if any
	// Try... statements need a Catch or they will not work
	try {

		if (args.indexOf('kill') === 0) {
			console.log('test');
			const user = msg.mentions.users.first().id;
			const s = Kill[Math.floor(Math.random() * Kill.length)]
				.replace(/\${u}/g, user)
				.replace(/\${author}/g, msg.author);
			msg.channel.send(s);
		}

		// does not work disregard
		new function(msg, args) {
			require('./Commands/Ping.js');
		};

		// make sure the bot doesnt respond to itself
		if(msg.author.bot) {
			return;
		}

		// ignores any message not starting with the prefix
		if(!msg.content.startsWith(Settings.Prefix)) {
			return;
		}

		// replys with an image
		if (args === 'sad day on the ridge') {
			msg.reply('https://cdn.discordapp.com/attachments/455765006789640213/493540525123567627/8DJeHEZ.jpg');
		}

		// replys with an image
		if (args === 'evolution') {
			msg.reply('https://images-ext-2.discordapp.net/external/6vNGE1_zgsBnnyDdDsouArEYQD4Oczh8rZ7X1ayOtrs/https/cdn.discordapp.com/attachments/313863641600360449/494005827804332043/2546737608247838577.jpg');
		}

		// escape the laybrinth mini game
		if (args === 'labyrinth') {

			// possible directions
			const PD = ['left', 'right', 'straight'];

			// the Correct Path to win and exit the labyrinth
			const CP = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

			// for the while statement
			let i = 0;

			// this is so that when the while statement goes to CP fill it doesnt stop at the first value in the array
			let z = 0;

			// picking random directiosn from PD then replacing the zeros in CP with what ever was chosen from PD
			while (i < 10) {

				// Fill CP with random values from PD then move on to the next position in the array
				CP.fill(PD[Math.floor(Math.random() * PD.length)], z);

				// so the while statement isnt infinite
				i++;

				// so the while statement will move to the next position in the array
				z++;
			}
			msg.channel.send(`Correct Path: ${[CP]}`);

			for(i = 0; i < 10; i++) {
				const v = 0;
				msg.channel.awaitMessages(m => m.content === CP[v], { max: 2 })
					.then(collected => console.log(collected.size))
					.catch(collected => console.log(`hi ${collected.size}`));
			}
			msg.channel.send('dsaj').then(


			);
			/*
			Command side notes:
			# need to add a possiblity of dead ends for the labyrinth
			# need to change CP to where it is more dynamic (so user can pick difficulty rather than only 10)
			*/
		}
		if (args === 'reload') {
			bot.destroy().then(bot.login(Settings.Token)).then(msg.channel.send('reloaded'));
		}
	}
	// catching the error for the Try statement
	catch(error) {
		console.error;
	}
});

// logging the bot in using the token in botsettings.json
bot.login(Settings.Token);