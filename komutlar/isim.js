const dis = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = async(client, message, args) => {

let tag = ayarlar.tag
let s = ayarlar.prefix
let kayıtcı = ayarlar.kayıtcı

let sanctus1 = new dis.MessageEmbed()

.setDescription(`**Hey ! Kullanıcının İsmi Başarıyla Düzenlendi :grinning:**`).setColor('RANDOM')
 if (!message.member.roles.cache.get(kayıtcı)) return message.channel.send(sanctus1) 
  
  let member = message.mentions.members.first();
if (!member) return message.channel.send(new dis.MessageEmbed().setColor('RANDOM').setDescription(`**Hey ! Lütfen İsmini Değiştireceğin Kullanıcıyı Etiketle :grinning:**`))
let isim = args[1] 
if (!isim) return message.channel.send(new dis.MessageEmbed().setColor('RANDOM').setDescription(`**Hey ! Lütfen İsmini Değiştireceğin Kullanıcının İsmini Belirt :grinning:**`))
let yas = args[2]
if(!yas) return message.channel.send(new dis.MessageEmbed().setColor("RANDOM").setDescription("**Hey ! Lütfen İsmini Değiştireceğin Kullanıcının Yaşını Belirt :grinning:**"))
  member.setNickname(`${tag} ${isim} ${yas}`)

const sanctus = new dis.MessageEmbed()
.setColor('RANDOM')
.setDescription(`**Hey ! ${member} Kullanıcının ismini  \`${tag} ${isim} ${yas}  Olarak Yaptım :grinning:**`)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(sanctus)


}
exports.conf = {
  enabled: true,
  guildonly: false, 
  aliases: ['i'],
  permlevel: 0
}
exports.help = {
  name: 'isim',
  description: 'ÖYLE iŞTE',
  usage: 'İsim Değiştirmeye yarar'
}