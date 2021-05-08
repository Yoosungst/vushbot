module.exports = {
	name: 'rand',
	description: 'Choose between arguments.',
	execute(message, args) {
        x = args[Math.floor(Math.random() * args.length)];
		message.channel.send(`${x}`);
	},
};