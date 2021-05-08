
module.exports = {
	name: 'ghoul',
	description: 'Display info about a user',
	execute(message) {
		message.react('💩');
		message.channel.send('https://tokyoghoul.fandom.com/wiki/Ken_Kaneki');
        message.channel.send('https://tenor.com/view/tokyo-ghoul-kaneki-ken-crazy-anime-gif-12997129');
	},
};

