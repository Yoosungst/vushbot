const fs = require("fs");
const Discord = require("discord.js");
const { prefix } = require("./config.json");

const token = process.env['tokenkey']


const keepAlive = require('./server.js');
keepAlive();

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

 // const mySecret = process.env['tokenkey']

  /*client.user.setActivity("discord.gg/vush", {
    type: "PLAYING"
  });
});*/

client.on("message", (message) => {
  if (
    !message.content.startsWith(prefix) ||
    message.author.bot ||
    !message.guild || !message.member.hasPermission('MOVE_MEMBERS')
  )
    return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;
  console.log(message.author.tag + ': ' + message.content);

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
// предложения реакции
client.on("message", (message) => {
  if (message.channel.id === "894637255971455096") {
    message.react('949994541371506738');
    message.react('949994541501521940');
  }
});
//публикации реакции
client.on("message", (message) => {
  if (message.channel.id === "894646214778322964") {
    message.react('949994541371506738');
  }
});
});
//публикации треды
/*
client.on("message", (message) => {
  
if (message.channel.id === "841227297600176139") {
      const thread = await channel.threads.create({
	name: 'новое предложение',
	autoArchiveDuration: 60,
	reason: 'новое предложение',
        
});
  console.log(`Created thread: ${thread.name}`);
  }
});
 */
/*
client.once("ready", () => {
  console.log("Ready!");
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});*/
/*const guild = require
if (guild.available) console.log('guild is available');*/

/*client.on("message", (message) => {
  if (message.content === "~upd") {
    message.delete()
    message.channel.send("<@765122902735454219>```js\nVersion 1.02.21\n```\n-some console improvements\n`~server` and `~user` improvements\n`~clear` **[BETA-for moders only ofc]** ```");
    
  }
});*/

client.login(token);