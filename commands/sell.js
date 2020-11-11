const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('W.'))return;  
    
    let user = message.author;

    if(args[0] == 'kopi') {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Cross:618736602901905418> Anda tidak punya Kopi untuk dijual`);

        let kopi = await db.fetch(`kopi_${message.guild.id}_${user.id}`)

        if (kopi < 1) return message.channel.send(Embed2)
       
        db.fetch(`kopi_${message.guild.id}_${user.id}`)
        db.subtract(`kopi_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Check:618736570337591296> Terjual Kopi Sebesar Rp.600 `);

        db.add(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)
    } else if(args[0] == 'susu') {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Cross:618736602901905418> Anda tidak punya Susu untuk dijual`);

       let susu = await db.fetch(`susu_${message.guild.id}_${user.id}`)

        if (susu < 1) return message.channel.send(Embed2)
       
        db.fetch(`susu_${message.guild.id}_${user.id}`)
        db.subtract(`susu_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Check:618736570337591296> Terjual Susu Sebesar Rp.800`);

        db.add(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'rokok,) {
        let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Cross:618736602901905418> Anda tidak punya Rokok untuk dijual`);

        let rokok = await db.fetch(`rokok_${message.guild.id}_${user.id}`)

        if (rokok < 1) return message.channel.send(Embed2)
       
        db.fetch(`rokok_${message.guild.id}_${user.id}`)
        db.subtract(`rokok_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Check:618736570337591296> Terjual sebuah Rokok Sebesar Rp.1200 `);

        db.add(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)
    };

}
  
  module.exports.help = {
    name:"sell",
    aliases: [""]
  }