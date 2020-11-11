const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('W.'))return;  

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`gold_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = 'Gold'

  let kopi = await db.fetch(`kopi_${message.guild.id}_${user.id}`)
  if(kopi === null) kopi = '0'

  let susu = await db.fetch(`susu_${message.guild.id}_${user.id}`)
  if(susu === null) susu = '0'

  let rokok = await db.fetch(`rokok_${message.guild.id}_${user.id}`)
  if(rokok === null) rokok = '0'

  let moneyEmbed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Profil**\n\nDompet: Rp.${money}\nBank: Rp.${bank}\nVIP Peringkat: ${vip}\n\n**Inventaris**\n\nKopi: ${kopi}\nSusu: ${susu}\nRokok: ${rokok}`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"profile",
  aliases: ["p"]
}