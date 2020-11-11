const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('W.'))return;  

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`:cross: Anda butuh uang Rp.15000 untuk membeli Vip Gold`);

    if (args[0] == 'gold') {
        if (author < 15000) return message.channel.send(Embed)
        
        db.fetch(`gold_${message.guild.id}_${user.id}`);
        db.set(`gold_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark:  Terbeli Gold VIP Seharga Rp.15000`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 15000)
        message.channel.send(Embed2)
    } else if(args[0] == 'kopi') {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:cross: Anda butuh uang Rp.600 untuk membeli sebuah Kopi`);

        if (author < 600) return message.channel.send(Embed2)
       
        db.fetch(`kopi_${message.guild.id}_${user.id}`)
        db.add(`kopi_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark:  Terbeli Kopi Seharga Rp.600`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)
    } else if(args[0] == 'susu') {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:cross: Anda butuh uang Rp.800 untuk membeli Susu`);

        if (author < 800) return message.channel.send(Embed2)
       
        db.fetch(`susu_${message.guild.id}_${user.id}`)
        db.add(`susu_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark:  Terbeli Susu Seharga Rp.800 `);

        db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'rokok') {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:cross: Kamu butuh uang Rp.1200 untuk membeli Rokok`);

        if (author < 1200) return message.channel.send(Embed2)
       
        db.fetch(`rokok_${message.guild.id}_${user.id}`)
        db.add(`rokok_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Terbeli sebuah Mansion Seharga Rp.1200 `);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)
    } else {
        let embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(':cross: Enter an item to buy')
        message.channel.send(embed3)
    }

}
  
  module.exports.help = {
    name:"beli",
    aliases: ["bl"]
  }