const Discord = require('discord.js');
const client = new Discord.Client();
console.log("راص زبي");


client.on("ready", () => {
let channel =     client.channels.get("658390613284356135")
setInterval(function() {
channel.send(`هاو زبي`);
}, 30)
})

client.login(process.env.BOT_TOKEN);