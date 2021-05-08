module.exports = {
	name: 'ratify',
	description: 'Display info about a user',
	execute(message) {
		message.react('🤚');
		message.channel.send('гей');
	},
};