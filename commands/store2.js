const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('y!'))return;  
  
    if (args[0] == 'bronze') {
    
      let embed = new Discord.RichEmbed()
      .setDescription("**Gold Rank**\n\nBenefits: Kesempatan untuk mendapatkan lebih banyak koin dari merampok seseorang")
      .setColor("#FFFFFF")
      message.channel.send(embed)
    } else if(args[0] == 'kopi') {
      let embed = new Discord.RichEmbed()
      .setDescription("**Kopi**\n\nBenefits: Kesempatan untuk memenangkan koin, Role di Server Discord kami + Lainnya dengan memimpin di Leaderboard")
      .setColor("#FFFFFF")
      message.channel.send(embed)
    } else if(args[0] == 'susu') {
      let embed = new Discord.RichEmbed()
      .setDescription("**Susu**\n\nBenefits: Kesempatan untuk memenangkan koin, Role di Server Discord kami + Lainnya dengan memimpin di Leaderboard")
      .setColor("#FFFFFF")
      message.channel.send(embed)
  } else if(args[0] == 'rokok') {
    let embed = new Discord.RichEmbed()
    .setDescription("**Rokok**\n\nBenefits: Kesempatan untuk memenangkan koin, Role di Server Discord kami + Lainnya dengan memimpin di Leaderboard")
    .setColor("#FFFFFF")
    message.channel.send(embed)
  }

  }

  
  module.exports.help = {
    name:"storeinfo",
    aliases: ["si"]
  }