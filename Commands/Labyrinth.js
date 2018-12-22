// exports the command and runs it for when its called in the index.js
// we are also taking the parameters args and msg from index.js
exports.run = async function(args, msg, Discord) {

	// escape the laybrinth mini game

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

	// this sends the correct path (this will be removed when the command is functional)
	msg.channel.send([CP]);

	// everything below here works depending on how you look at it

	let k = 0;

	// working depending on your definition of working
	msg.channel.send('Welcome to the labyrinth; your goal - escape. You can go left, right, or straight\nyou have 10 seconds to decide before you are lost to the abyss\nwhich way do you go?')
		.then(() => {
			const collector = new Discord.MessageCollector(msg.channel, mg => mg.author.id === msg.author.id, { time: 10000 });
			collector.on('collect', ms => {
				if (ms.content == CP[k]) {
					ms.channel.send('Well done you have made it farther inside which direction is next?');
					k++;
				}
				else if(ms.content == CP[k] && k == 9) {
					ms.channel.send('You have succesfully escaped the labyrinth');
				}
				else{
					return ms.channel.send('You fell in a pit and died. You have been lost to the labyrinth');
				}
			});
		});

	// if first one is correct continue if wrong stop
	// use end event
	/*
		Command side notes:
		# need to add a possiblity of dead ends for the labyrinth
		# need to change CP to where it is more dynamic (so user can pick difficulty rather than only 10)
		# timer for one user to answer till it says "you have been lost to the labyrinth";
		# win conditon
		# lose condition
	*/

};