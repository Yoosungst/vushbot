const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'kaneki',
	description: 'Display info about a user',
	execute(message, args) {
        message.react('🖕');
        message.react('🖕🏻');
        message.react('🖕🏼');
        message.react('🖕🏽');
        message.react('🖕🏾');
        message.react('🖕🏿');

        const embed = new MessageEmbed()
        .setTitle(`БОГДАН ИДЕТ НА ХУЙ`)
        .setColor('RANDOM')
        .setFooter(`БОГДАН ИДЕТ НА ХУЙ`)
        .addField('БОГДАН ИДЕТ НА ХУЙ', [
            `**БОГДАН ИДЕТ НА ХУЙ**` , 
        ])
    
     message.channel.send(embed)
        
    
    
    message.channel.send('https://tenor.com/view/123-gif-20566597');
    }

};

