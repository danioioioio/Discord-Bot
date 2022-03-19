const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

const taggedUser = message.mentions.users.first() || message.author;
const embed = new Discord.MessageEmbed();
embed.setTitle(`${taggedUser.username}'s userinfo`)
embed.setThumbnail(taggedUser.displayAvatarURL());
embed.addField('Username', `${taggedUser.username}`, true);
embed.addField('Tag', `${taggedUser.discriminator}`, true);
embed.addField('Time of creation', `${taggedUser.createdAt}`, true);
embed.addField('User ID', `${taggedUser.id}`, true);
return message.channel.send({embeds: [embed]});

}

exports.name = "userinfo"
