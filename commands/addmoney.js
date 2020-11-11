const Discord = require("discord.js");

const db = require("quick.db");

exports.run = async (bot, message, args) => {

  if(!message.content.startsWith('W.'))return;  

  let ownerID = '694585818383122472'

  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;

    db.add(`money_${message.guild.id}_${user.id}`, args[1])

    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()

    .setColor("#FFFFFF")

    .setDescription(`:white_check_mark: Menambahkan Rp.${args[1]} \n\n Uang Didompet: Rp.${bal}`);

    message.channel.send(moneyEmbed)

};

module.exports.help = {

  name:"tambahuang",

  aliases: ["adm"]

}

