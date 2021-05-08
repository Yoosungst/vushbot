const fs = require("fs");
const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("VUSHbot has been activated!");
  client.user.setActivity("o͜ﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞoооооооооооооo͜ﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞoооооооооооооo͜", {
    type: "LISTENING"
  });
});

client.on("message", (message) => {
  if (
    !message.content.startsWith(prefix) ||
    message.author.bot ||
    !message.guild
  )
    return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  
  if (!client.commands.has(command)) return;
  console.log (message.author.tag + ': ' + message.content);

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("что-то здесь не так");
  }
});

client.on("message", (message) => {
  if (message.content === "ратифай гей") {
    message.react("👍");
    message.react("☝️");
    message.react("777083230842781738");
    message.react("✔️");
    message.react("☑️");
    message.react("✅");
    message.channel.send("естественно");
  }
});


client.once("ready", () => {
  console.log("Ready!");
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});
const guild = require 
if (guild.available) console.log('guild is available');

/*client.on("message", (message) => {
  if (message.content === "~upd") {
    message.delete()
    message.channel.send("<@765122902735454219>```js\nVersion 1.02.21\n```\n-some console improvements\n`~server` and `~user` improvements\n`~clear` **[BETA-for moders only ofc]** ```");
    
  }
});*/
 
client.login(token);
