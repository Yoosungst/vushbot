/*const Command = require('../../Structures/Command');
const ms = require('ms');

module.exports = class extends Command {

	async run(message) {
		message.channel.send(`My uptime is \`${ms(this.client.uptime, { long: true })}\``);
	}

};


const Discord = require('discord.js');
//const client = require('index.js');
module.exports = {
    name: 'uptime',
    description: "Bot uptime",
    execute(message){
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        message.channel.send(`__Uptime:__\n${days}d ${hours}h ${minutes}m ${seconds}s`);    
    }
};
*/



//require("moment-duration-format");
/*
const moment = require('./node_modules/moment/moment.js');
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
module.exports = {
    name: 'uptime',
    description: "Bot uptime",
    execute(message){

        console.log(duration);
    }
}//C:\Users\miste\DiscordBot\node_modules\moment
*/

