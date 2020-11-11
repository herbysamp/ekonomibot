const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('W.'))return;  


    let embed = new Discord.RichEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: Rp.15000 [W.beli gold]\n\n**Coffe Shop**\n\nKopi: Rp.600 [W.beli kopi]\nSusu: Rp.800 [W.beli susu]\nRokok: Rp.1200 [W.beli rokok]")
    .setColor("#FFFFFF")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["st"]
}