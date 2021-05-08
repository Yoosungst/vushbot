const { client, MessageEmbed } = require('discord.js');
const moment = require('moment');

const filterLevels = {
    DISABLED: 'Off',
    MEMBERS_WITHOUT_ROLES: 'No Role',
    ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: '(╯°□°）╯︵ ┻━┻',
    VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
};
module.exports = {
	name: 'server',
	description: 'Display info about this server.',
   execute(message) {
		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
		const members = message.guild.members.cache;
		const channels = message.guild.channels.cache;
		const emojis = message.guild.emojis.cache;
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**Server Info**`)
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.addField('General', [
				`**Name:** ${message.guild.name}`,
				`**ID:** ${message.guild.id}`,
				`**Owner:** ${message.guild.owner.user.tag})`,
				`**Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}]`,
				]).addField('Statistics', [
				`**Member Count:** ${message.guild.memberCount}`,
				`**Humans:** ${members.filter(member => !member.user.bot).size}`,
				`**Bots:** ${members.filter(member => !member.user).size}`,
				`**Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,]
		)
		    .setFooter(` ${message.guild.name}`)

			.setTimestamp();
	 message.channel.send({embed});
		}
   }



		/*const embed = new MessageEmbed()
		.setAuthor(message.guild.name, message.guild.iconURL)
		.setColor(3447003)
		.setDescription(`Owner: ${message.guild.owner.user.tag} (${message.guild.owner.id})`)
		.addField('Member Count', `${message.guild.memberCount} - message.guild.members.filter(m=>m.user.bot).size} (${message.guild.channels.cache.filter(m=>m.user).size} bots)`, true)
		.addField('AFK Timeout', `${message.guild.afkTimeout / 60} minutes`, true)
		.addField('AFK Channel', `${message.guild.afkChannelID === null ? 'No AFK Channel' : client.channels.get(message.guild.afkChannelID).name} (${message.guild.afkChannelID === null ? '' : message.guild.afkChannelID})`, true)
		.addField('Location', message.guild.region, true)
		.addField('Created', message.guild.createdAt.toLocaleString(), true)
		.addBlankField(true)
		.setTimestamp()
		.setFooter(client.user.username, client.user.avatarURL);
		`**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
				`**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
				`**Role Count:** ${roles.length}`,
				`**Emoji Count:** ${emojis.size}`,
				`**Region:** ${regions[message.guild.region]}`,*/