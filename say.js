exports.run = (client, message, args) => {
  let toSay = args.join(" ")
  let blacklisted = [935411288010526741]
  if(!toSay) return message.channel.send({content: "You have to say something"})
  if (blacklisted.includes(message.author.id)) return;
  message.channel.send({content: toSay})
}

exports.name = "say"
