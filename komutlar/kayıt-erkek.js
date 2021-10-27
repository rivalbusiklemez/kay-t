const discord = require('discord.js')
const db = require('croxydb');

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)



 
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`**Hey ! Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip Olman lazım :grinning:**`)
if(message.channel.id !== kanal) return message.channel.send(`**Hey ! Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin :grinning:**`)
if (!erkekrol) return message.channel.send(`**Sunucuda erkek rolü ayarlanmadığı için komut kullanılamaz!**`)


let member = message.mentions.members.first();
if (!member) return message.channel.send(`**Hey ! Lütfen Kayıt Ediceğin Kişiyi Etiketleyip İsim Ve Yaşını Yaz :grinning:**`)
let isim = args[1]
if (!isim) return message.channel.send(`** İsmini belirtmelisin!**`)
let yaş = args[2]
if (!yaş) return message.channel.send(`** Yaşını belirtmelisin!**`)
if(isim && member) member.setNickname(` ${isim} | ${yaş}`); 
if(isim) member.setNickname(`${isim} | ${yaş}`);
member.roles.remove(alınacakrol)
member.roles.add(erkekrol)
const kayıtolan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) //üyeyi çekiyoruz yani hem etiket hemde id ile olur.
let kayıtsohbet = db.fetch(`kayıtsohbet_${message.guild.id}`)

db.add(`erkekpuan_${message.author.id}`, 1)
  const hg = new discord.MessageEmbed()
.setColor('#f6ff00')
.setDescription('<a:hype:778788019548454912> KAYIT BİLGİLERİN ŞUNLAR ;')
.addField( `**Kaydın Başarıyla Yapıldı! <a:tmdir:778774341357797378>**`,
    `<:**Kayıt Edilen Kişi: ${kayıtolan}**
     <**Kayıt Eden Yetkili: ${message.author}**
     <**Kayıt İşleminde Verilen Rol: <@&${erkekrol}>**
     <**Kayıt İşleminde Alınan Rol: <@&${alınacakrol}>**
     <**Eski İsim:  İsim | Yaş**
     <**Yeni İsim:  ${isim} | ${yaş}** 
   `)

const başarılı = new discord.MessageEmbed()
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))  
.setTitle(`**Başarılı Bir Şekilde Kayıt Tamamlandı :white_check_mark:**`)
.setColor("#f6ff00")
.setDescription(` Erkek olarak kayıt edilen kullanıcı: ${member} \n Erkek olarak kayıt eden yetkili: <@!${message.author.id}>`)
.addField(`Kullanıcının ismi:`, `${isim}`, true)
.addField(`Kullanıcının yaşı:`, `${yaş}`, true)
.setFooter(``)
message.channel.send(başarılı)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['e'],
  permlevel: 0
}
exports.help = {
  name: 'erkek',
  description: 'erkek olarak kayıt eder',
  usage: 'dr!erkek @kullanıcı isim yaş'
}