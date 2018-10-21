// exports the command for when its called in the index.js
module.exports = {

	// test = function
	// taking in the parameters args and msg
	test: function(args, msg) {

		// replying to the author of the message that triggered the command
		msg.reply('Would be too simple if it worked on the first try.');

	},

};