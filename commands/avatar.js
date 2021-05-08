const { Discord, MessageEmbed } = require("discord.js");
module.exports = {
  name: 'avatar' ,
  description: "Display the avatar of user.",
  execute(message) {
    let user = message.mentions.users.first();
    if (!user) user = message.author;
    let color = message.member.displayHexColor;
    if (color === "#000000") color = message.member.hoistRole.hexColor;
    const embed = new MessageEmbed()
      .setDescription(`**avatar of** ${user}`)
      .setImage(user.avatarURL({ dynamic: true, size: 1024 }))
      .setColor(color);
    message.channel.send({ embed });
  },
};
