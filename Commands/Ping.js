module.exports = {
	test: function(args, msg) {
		if (args === 'ping') {
			module.exports =
			msg.channel.send('pong');
		}
	},
};