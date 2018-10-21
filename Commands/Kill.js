// requires strings from kill.json in the assests folder
const Kill = require('../Assets/Kill.json');

// exports the command and runs it for when its called in the index.js
// we are also taking the parameters args and msg from index.js
exports.run = function(args, msg) {

	// gets the first user mentioned in the string and their id
	const user = msg.mentions.users.first().id;

	// picks a random string from kill.json
	const k = Kill[Math.floor(Math.random() * Kill.length)]

	// replaces ${u} with user so that way the bot mentions the user
		.replace(/\${u}/g, user)

		// mentions the author of the message if the string that was randomly picked needs to by replacing ${author} with msg.author
		.replace(/\${author}/g, msg.author);

	// sends the message
	msg.channel.send(k);

};