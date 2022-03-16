const { Discord } = require("discord.js");
const { MessageAttachment } = require('discord.js');
const { prefix } = require("../config.json");
const { get } = require("snekfetch");
module.exports = {
  name: 'cat' ,
  description: "send the random cat pic",
  execute(message) {

  if (message.content.startsWith(prefix + 'cat')) {
      try {
           get('https://aws.random.cat/meow').then(response => {
                 //message.channel.send({files: [{attachment: response.body.file, name: `cat.${response.body.file.split('.')[4]}`}]});
                 //console.log('random cat picture');
                 const test1 = new MessageAttachment(response.body.file);
                return message.channel.send(test1);
                  })
                  } catch (e) {
                       console.log(e);
                       }
                     };
}
}