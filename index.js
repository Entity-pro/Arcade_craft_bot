const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'status') {
    msg.reply('offline and coming soon');
  }
});

client.login('NTcyMDgxNzU3NDk1NzU0NzYy.XNhUBQ.GXO4YcLZqXOsXWU6zOtHoNAnn1Y');
