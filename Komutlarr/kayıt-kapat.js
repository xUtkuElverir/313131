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
db.delete(`verilecek_${message.guild.id}`)
db.delete(`alınacak_${message.guild.id}`)
  db.delete(`girişmesaj_${message.guild.id}`)
db.delete(`kanal_${message.guild.id}`)
db.delete(`kayıtmesaj_${message.guild.id}`)
db.delete(`kayıtkanal_${message.guild.id}`)
   message.channel.send(
new Discord.MessageEmbed()
   .setTitle('Başarılı :white_check_mark:')
.setColor('GREEN')
.setDescription('Başarıyla sistem kapatıldı.'))
}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'kayıt-kapat'
}