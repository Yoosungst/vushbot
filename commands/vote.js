const { Client, MessageEmbed } = require('discord.js');
module.exports = {
	name: 'vote',
	description: 'Creates a vote',
	execute(message, args) {
        const x = args.slice(0).join(" ");
        const embed = new MessageEmbed()
        .setTitle(x)
        .setColor('RANDOM')
        .setFooter(`Предложил(а): ${message.author.tag}`);
        message.delete()
        message.channel.send(embed).then(sentEmbed => {
            sentEmbed.react('777083230842781738')
            sentEmbed.react('777083306168156192')
            sentEmbed.react('777083317861613598')
    })

    
    .catch(console.error);
	},
};