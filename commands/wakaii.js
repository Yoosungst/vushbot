module.exports = {
	name: 'wakaii',
	description: 'Display info about a user',
	execute(message) {
		message.react('🍪');
		message.channel.send('кладбище, на котором играет **PHONK**');
	},
};

