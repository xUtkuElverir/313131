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

let boş = args.slice(0).join(' ')
if(!boş) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Yanlış kullanım! \nKullanabileceklerin: `aç`,`kapat`,`kanal`,`mesaj`'))

if(args[0] == "mesaj") {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Bu komutu kullanabilmek için `YÖNETİCİ` yetkisine sahip olmalısın!'))

let mesaj = args.slice(1).join(' ')
if(!mesaj) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Lütfen bir mesaj gir! \nÖrnek kullanım: `q!kayıt-giriş-ayar mesaj -uye- Aramıza hoşgeldin. q!kayıt-ol yazarak kayıt olabilirsin.`'))

db.set(`girişmesaj_${message.guild.id}`, mesaj)
 message.channel.send(
new Discord.MessageEmbed()
 .setColor("GREEN")
.setTitle("Başarılı :white_check_mark:")
.setDescription('Giriş mesajını `'+mesaj+'` olarak ayarladım.'))
} 

if(args[0] == "aç") {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Bu komutu kullanabilmek için `YÖNETİCİ` yetkisine sahip olmalısın!'))
db.set(`kayıtmesaj_${message.guild.id}`, "açık") 

return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('GREEN')
.setTitle('Başarılı :white_check_mark:') 
.setDescription('Giriş mesajını başarıyla açtım.'))
}

if(args[0] == "kapat") {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Bu komutu kullanabilmek için `YÖNETİCİ` yetkisine sahip olmalısın!'))

  db.delete(`kayıtmesaj_${message.guild.id}`)
message.channel.send(
    new Discord.MessageEmbed() 
.setColor('GREEN')
.setTitle('Başarılı :white_check_mark:')
.setDescription('Giriş mesajını başarıyla kapattım.'))
} 

if(args[0] ==  "kanal") {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Bu komutu kullanabilmek için `YÖNETİCİ` yetkisine sahip olmalısın!'))

let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(
new Discord.MessageEmbed()
.setColor("RED")
.setTitle("Hata :x:")
.setDescription('Lütfen bir kanal etiketle!'))

  db.set(`kayıtkanal_${message.guild.id}`, kanal.id)
 message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
 .setTitle("Başarılı :white_check_mark:")
  .setDescription("Kayıt kanalını" + kanal + "Olarak ayarladım" ))
}
}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'kayıt-giriş-ayar'
}