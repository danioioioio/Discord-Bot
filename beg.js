const Discord = require("discord.js")
exports.run = (client, message, args) => {
try {
let random1 = ["Ew fuck off", "Aww, heres 50$", "No comment"]
let index = Math.round(Math.random() * random1.length)-1
let random = random1[index]
message.channel.send({ content: random })
} catch(err) {
console.log(err)
}
}

exports.name = "beg"
