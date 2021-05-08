const { client, Discord, MessageEmbed, Guild } = require('discord.js');
const moment = require('moment');


module.exports = {
	name: 'user' ,
	description: 'Display info about a user',
	execute(message) {
		let user = message.mentions.users.first() || message.author;
		const member = message.guild.members.cache;
		const embed = new MessageEmbed()
			.setAuthor(user.username + '#' + user.discriminator)
			.setDescription(`${user}`)
			.setColor(`RANDOM`)
			.setThumbnail(user.avatarURL({ dynamic: true, size: 1024}))
			.addField('Created at:', `${moment.utc(user.createdTimestamp)}`, true)
			.addField('Joined Server at:', `${moment.utc(member.joinedAt)}`, true)
			.addField('Status:', user.presence.status, true)
			.addField('Bot:', user.bot, true)
			.setFooter(`User ID: ${user.id}`)
			.setTimestamp();
	
		message.channel.send({ embed: embed });
		return;
		
	},

}

/*`${moment(user.joinedAtTimestamp).format('LT')} ${moment(message.user.joinedAtTimestamp).format('LL')} [${moment(message.user.joinedAtTimestamp).fromNow()}]`, true*/