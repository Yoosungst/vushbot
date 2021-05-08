const { Discord, Client } = require('discord.js');
module.exports = {
    name: 'vl',
	description: 'Disconnet the bot from voice channel.',
	execute(message) {
        //if (message.member.voice.channel) {
        message.guild.voice.channel.leave()
    }
};