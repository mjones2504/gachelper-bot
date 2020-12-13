const Discord = require("discord.js");
exports.run = async (client, message, args, level) => { 
  try {
    let invEmbed = new Discord.MessageEmbed()
    .setTitle("Invite Cytrus-RE to your server!")
    .setDescription(`[**Click here!**](https://terrific-tea.github.io/links/cyinvite)`)
    .setColor("#eeeeee");
    message.channel.send(invEmbed);
  } catch (err) {
    message.channel.send(client.errors.genericError + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ["ri,", "botinvite", "bi", "returninvite", "cyinv"],
  guildOnly: true,
  permLevel: "User"
};

exports.help = {
  name: "botinv",
  category: "General",
  description: "Returns the invite link for Cytrus-RE.",
  usage: "botinv"
};
