// exports the command and runs it for when its called in the index.js
// we are also taking the parameters args and msg from index.js
exports.run = async function(args, msg) {

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

	// everything below here does not work disregard
	const filter = m => m.content.includes([CP]);

	await msg.channel.awaitMessages(filter,
		{ max: 4, time: 10000, errors: ['time'] })
		.then(collected => console.log(`${collected.size} values`))
		.catch(collected => console.log(`After a minute, only ${collected.values()} out of 4 voted.`));
	console.log(CP);
	console.log(msg.content);
	msg.channel.send(filter.map(m => m.content));

	/*
		Command side notes:
		# need to add a possiblity of dead ends for the labyrinth
		# need to change CP to where it is more dynamic (so user can pick difficulty rather than only 10)
		# timer for one user to answer till it says "you have been lost to the labyrinth";
	*/

};