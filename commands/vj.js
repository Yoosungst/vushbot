const { Discord } = require('discord.js');
module.exports = {
    name: 'vj',
	description: 'Connect the bot to voice channel.',
	execute(message) {
		// Only try to join the sender's voice channel if they are in one themselves
		if (message.member.voice.channel) {
			const connection = message.member.voice.channel.join();
		} else {
			message.reply('You need to join a voice channel first!');
		}

	}
};