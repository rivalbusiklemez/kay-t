const discord = require('discord.js')
const db = require('croxydb');

exports.run = async(client, message, args) => {


let kayıtsohbet = db.fetch(`kayıtsohbet_${message.guild.id}`)
let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)  
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(` Bu komudu kullanabilmen için <@&${kayıtçı}> adlı role sahip olman lazım!`)
if(message.channel.id !== kanal) return message.channel.send(` Bu komudu sadece <#${kanal}> adlı kanalda kullanabilirsin!`)
if (!kızrol) return message.channel.send(` Sunucuda kız rolü ayarlanmadığı için komut kullanılamaz!`)
let member = message.mentions.members.first();
if (!member) return message.channel.send(`**Hey ! Lütfen Kayıt Ediceğin Kişiyi Etiketleyip İsim Ve Yaşını Yaz :grinning:**`)
let isim = args[1]
if (!isim) return message.channel.send(` İsmini belirtmelisin!`)
let yaş = args[2]
if (!yaş) return message.channel.send(` Yaşını belirtmelisin!`)
if(isim && member) member.setNickname(` ${isim} | ${yaş}`); 
if(isim) member.setNickname(`${isim} | ${yaş}`);
member.roles.remove(alınacakrol)
member.roles.add(kızrol) 
const kayıtolan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) //üyeyi çekiyoruz yani hem etiket hemde id ile olur.
db.add(`kızpuan_${message.author.id}`, 1)
const hg = new discord.MessageEmbed()
.setColor('#f6ff00')
.setDescription('<KAYIT BİLGİLERİN ŞUNLAR ;')
.addField( `**Kaydın Başarıyla Yapıldı!`,
    `<**Kayıt Edilen Kişi: ${kayıtolan}**
     <**Kayıt Eden Yetkili: ${message.author}**
     <**Kayıt İşleminde Verilen Rol: <@&${kızrol}>**
     <**Kayıt İşleminde Alınan Rol: <@&${alınacakrol}>**
     <**Eski İsim: İsim | Yaş**
     <:**Yeni İsim:  ${isim} | ${yaş}** 
   `)
  
const başarılı = new discord.MessageEmbed()
.setTitle(`**Başarılı Bir Şekilde Kayıt Tamamlandı :white_check_mark:**`)
.setColor("#f6ff00")
.setDescription(`Kız olarak kayıt edilen kullanıcı: ${member} \n Kız olarak kayıt eden yetkili: <@!${message.author.id}>`)
.addField(`Kullanıcının ismi:`, `${isim}`, true)
.addField(`Kullanıcının yaşı:`, `${yaş}`, true)
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k'],
  permlevel: 0
}
exports.help = {
  name: 'kız',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}