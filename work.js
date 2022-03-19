const Discord = require("discord.js")
exports.run = (client, message, args) => {
let random1 = ["You found 20$ searching the couch, nice!", "The police gave you 300$ for turning in 30,000$ of drug money...", "You invested your life savings in bitcoin and made 15 million overnight!", "You bought 10 lottery tickets and won 300$!", "You became a housewife and earned 3000$"]
let index = Math.round(Math.random() * random1.length)-1
let random = random1[index]
message.channel.send({ content: random })
}

exports.name = "work"

