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
.setDescription('Bu komutu kullanmak için `YÖNETİCİ` yetkisine sahip olmalısın!'))

let boş = args.slice(0).join(' ')
if(!boş) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Yanlış Kullanım! \nKullanabileceklerin: `-isim-`,`-yas-`')) 

if(!boş.includes("-isim-" ||"-yaş-")) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED') //  boş içerir ise gibi bişey  // haa sadece isim ve  yaş içerebilir demek için
.setTitle('Hata :x:')
.setDescription('`-isim-` ve `-yaş` dışında bişey kullanamazsın!'))

db.set(`kayıtisim_${message.guild.id}`, boş)
   message.channel.send(
new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle("Başarılı :white_check_mark:")
.setDescription("İsim sistemini `" + boş + "` olarak ayarladım"))// test etsesk ?
}///son mesajlar da return'a gerek yok en sonda
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'isim-sistemi'
}