const { message } = require("discord.js");
module.exports = {
  name: "say",
  description: "Say the message.",
  execute(message) {
    let args = message.content.split(" ");
	command = args.splice(0, 1)[0];
    message.delete();
    message.channel.send(String(args.join(" ")));
  
  }
};