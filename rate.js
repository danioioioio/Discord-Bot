const Discord = require("discord.js")
exports.run = (client, message, args) => {
let random1 = ["0/10 *joe banned you*", "1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10", "8/10", "9/10", "10/10"]
let index = Math.round(Math.random() * random1.length)-1
let random = random1[index]
message.channel.send({ content: random })
}

exports.name = "rate"


