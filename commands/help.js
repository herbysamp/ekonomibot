const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
	    if(!message.content.startsWith('W.'))return;  
    const embed = new MessageEmbed()
        .setAuthor("Commands")
        .setTitle("Commands Ngopi | Waroeng Coffee")
        .setURL("https://www.youtube.com/c/HerbySamp")
        .setDescription(`Total Commands: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Alias: ${cmd.help.aliases.join(", ") || "None"}\nCommands: \`${client.prefix}${cmd.help.usage}\``, true);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "help",
    aliases: ["h"],
    usage: `help`
}
