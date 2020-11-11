const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('W.'))return;  

    const embed = new Discord.RichEmbed()
    .setDescription(`**Masukkan Opsi Papan Peringkat**\n\nLeaderboard Uang: W.leaderboard uang\nLeaderboard kopi: W.leaderboard kopi\nLeaderboard susu: W.leaderboard susu\nLeaderboard rokok: W.leaderboard rokok`)
    .setColor("#FFFFFF")


  if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'uang') {
    let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = bot.users.get(money[i].ID.split('_')[2]).username

      

        content += `${i+1}. ${user} ~ ${money[i].data}\n`
    
      }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s   Leaderboard Uang**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send(embed)
  } else if(args[0] == 'kopi') {
    let kopi = db.startsWith(`kopi_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < kopi.length; i++) {
        let user = bot.users.get(kopi[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${kopi[i].data}\n`
    }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s Leaderboard Kopi**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send(embed)
  } else if(args[0] == 'susu') {
    let susu = db.startsWith(`susu_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < susu.length; i++) {
        let user = bot.users.get(susu[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${susu[i].data}\n`
    }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s Leaderboard Susu**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send(embed)
  } else if(args[0] == 'rokok') {
    let rokok = db.startsWith(`rokok_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < rokok.length; i++) {
        let user = bot.users.get(rokok[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${rokok[i].data}\n`
    }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s Leaderboard Rokok**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send(embed)
  }

}
module.exports.help = {
  name:"leaderboard",
  aliases: ["leader"]
}