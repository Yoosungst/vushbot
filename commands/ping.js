const { Discord, m, client, ws, msg, MessageEmbed } = require('discord.js');
const now = require('performance-now');
module.exports = {
  name: "ping",
  description: "Get bot ping :/",
  execute(message) {
	message.react('🏓');
	let start = now();
message.channel.send("*Pinging...*").then(message => {
 let end = now();message.edit(`**${(end - start).toFixed(0)}ms**`);
});
 
	

  }
  
}


/*
let start = now();
message.channel.send("*Pinging...*").then(message => {
	
	let end = now();
	const embed = new MessageEmbed()
	message.edit((embed)
	
	.setColor("RANDOM")
	.addField(`**${(end - start).toFixed(0)}ms**`)
	.setFooter(`Предложил(а): ${message.author.tag}`)
	);
});
   */