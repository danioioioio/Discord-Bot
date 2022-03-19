const Discord = require("discord.js")
exports.run = (client, message, args) => {
let random1 = ["Your name is **pink guy!**", "Your name is **dumbass!**", "Your name is **raph!**", "Your name is **I forgor :skull:**", "Your name is **idiot!**", "Your name is **I ran out of name ideas!**", "Your name is **stupid!**"]
let index = Math.round(Math.random() * random1.length)-1
let random = random1[index]
message.channel.send({ content: random })
}

exports.name = "nameme"

