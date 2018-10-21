// #side note: messing with syntax

// exports the command and runs it for when its called in the index.js
// we are also taking the parameters args and msg from index.js
exports.run = (args, msg) =>

	// sending pong
	msg.channel.send('pong');