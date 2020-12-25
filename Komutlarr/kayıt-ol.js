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
let isimsistemi = db.get(`kayıtisim_${message.guild.id}`)
if(!isimsistemi) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('İsim sistemi ayarlanmamış!')) // adam sadece -isim- kullanırsa ne olcak aklı karışır
//bot beyinsizse bi sik olmaz xd
  
let kanal = db.get(`kanal_${message.guild.id}`)
if(!kanal) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Kanal ayarlanmamış!'))// birşeyide ben yazaydım amk

if(message.channel.id != kanal) {
message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin!`))
return
}

let verilecekrol = db.get(`verilecek_${message.guild.id}`)
if(!verilecekrol) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Verilecek rol ayarlanmamış!'))

let alınacakrol = db.get(`alınacak_${message.guild.id}`)
if(!alınacakrol) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Alınacak rol ayarlanmamış!'))

if(isimsistemi == "-isim- -yaş-") {
let isim = args[0]
let yaş = args[1]

if(!isim) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Lütfen ismini gir!'))

if(!yaş) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Lütfen yaşını gir!'))

message.member.roles.add(verilecekrol)
message.member.roles.remove(alınacakrol)
message.member.setNickname(`${isim} ${yaş}`)//yukarı bak birazcık
//anlamadım ${isim} ${yaş}
message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Başarılı :white_check_mark:')
.setDescription('Başarıyla kayıt oldunuz.'))

let log = db.get(`log_${message.guild.id}`)
client.channels.cache.get(log).send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Bir kişi kaydoldu')
.addField('Kayıt olan kişi', message.author.tag)
.addField('Şimdiki ismi', `${isim} ${yaş}`))
}

if(isimsistemi == "-isim-") {
let isim = args[0]
if(!isim) return message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription('Lütfen ismini yaz!'))

message.member.roles.add(verilecekrol)
message.member.roles.remove(alınacakrol)
message.member.setNickname(isim)

message.channel.send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Başarılı :white_check_mark:')
.setDescription('Başarıyla kayıt oldunuz.'))

let log = db.get(`log_${message.guild.id}`)
client.channels.get(log).send(
    new Discord.MessageEmbed() 
.setColor('RED')
.setTitle('Bir kişi kaydoldu')
.addField('Kayıt olan kişi', message.author.tag))
.addField('Şimdiki simi', isim)
}

}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}

exports.help = {
name: 'kayıt-ol'
}