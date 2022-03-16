const { Client, MessageEmbed } = require('discord.js');
module.exports = {
	name: 'vote',
	description: 'Creates a pole',
	execute(message, args) {
    let newArgs = args.slice(0).join(' ').split(';');
    for (let i = 0; i < newArgs.length; i++){
      newArgs[i] = newArgs[i].trim();
    }
    let title = '';
    const numerals = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
    if (newArgs.length == 1 && !(newArgs[0] == '')){
      title = newArgs.toString();
    } else if (newArgs.length >= 2 && newArgs.length <= 10){
      for (let i = 0; i < newArgs.length; i++){
        title = title + numerals[i] + " " + newArgs[i] + "\n";
      }
    } else {
      title = "Для голосования За/Против введите текст в одну строку.\nДля выбора 2 и более вариантов (до 10), введите их, разделяя символом **;**"
    }
    
    const embed = new MessageEmbed()
      .setTitle(title)
      .setColor('RANDOM')
      .setFooter(`Предложил(а): ${message.author.tag}`);
    //message.delete();
    if (newArgs.length == 1 && !(newArgs[0] == '')){
      message.channel.send(embed).then(sentEmbed => {
        sentEmbed.react('777083230842781738');
        sentEmbed.react('777083306168156192');
      })
      .catch(console.error);
    } else if (newArgs.length >= 2 && newArgs.length <= 10){
      message.channel.send(embed).then(sentEmbed => {
        for (let i = 0; i < newArgs.length; i++){
          sentEmbed.react(numerals[i]);
        }
      })
      .catch(console.error);
    } else {
      embed.setTitle('Ошибка')
        .setDescription(title)
        .setColor('RED')
        .setFooter('');
      message.channel.send(embed);
    }
	},
};