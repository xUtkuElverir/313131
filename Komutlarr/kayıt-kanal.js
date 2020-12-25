const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client,message,args) => {
/* Hata embed
message.channel.send(
    new Discord.RichEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription(''))
*/
/* başarılı embed
message.channel.send(
    new Discord.RichEmbed() 
.setColor('GREEN')
.setTitle('Başarılı :white_check_mark:')
.setDescription(''))
*/

/*
db.set(`${message.guild.id}`)
db.delete(`${message.guild.id}`)
*/
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Bu komutu kullanabilmek için `YÖNETİCİ` yetkisine sahip olmalısın!'))

let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Bir kanal etiketlemelisin!'))

db.set(`kanal_${message.guild.id}`, kanal.id)
message.channel.send(
    new Discord.MessageEmbed() 
.setColor('GREEN')
.setTitle('Başarılı :white_check_mark:')
.setDescription(`Kayıt kanalını ${kanal} olarak ayarladım.`))
}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'kayıt-kanal'
}