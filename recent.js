const Discord = require("discord.js")
exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("KABOOM")
  .setDescription("raphs most recent video")
  .setThumbnail("https://cdn.icon-icons.com/icons2/1907/PNG/512/iconfinder-youtube-4555888_121363.png")
  .setFooter("Make sure to subscribe!")
  .setURL("https://youtube.com/shorts/xRq29BS6UDo?feature=share")
  .setColor("#FF0000")
  .setAuthor(message.author.username, message.author.displayAvatarURL())

    message.channel.send({embeds: [embed]})
}

exports.name = "recent"
