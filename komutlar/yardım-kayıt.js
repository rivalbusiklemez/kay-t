const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {

    let codework2 = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL({dynamic:true}))
    .setTimestamp()
    .setColor('#f6ff00')
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .addField(`**Kayıt Ayarlama Komutları :grinning:**`, `
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    **• __Kayıt Edince Alınacak Rol__ | .alınacak-rol**
    **• __Kayıt Yapılacak Kanal__ | .kayıt-kanal**
    **• __Kayıtçı Rol__ | .kayıtçı-rol**
    **• __Erkek Rol__ | .erkek-rol**
    **• __Kız Rol__ | .kız-rol**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    `)
    .addField(`**Kayıt Etme Komutları :grinning:**`, `
    **• __Erkek Üye Kayıt Etme__ | .e @etiket İsim Yaş**
    **• __Kadın Üye Kayıt Etme__ | .k @etiket İsim Yaş**
    **• __Vip Kayıt Etme__ | .v @etiket**
    **• __Misafir Kayıt Etme__ | .m @etiket**
    **• __İsim Değiştirme__ | .i @etiket İsim Yaş**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    `)
    .addField(`**Genel Komutları :grinning:**`, `
    **• __Kayıt Sayacı__ | .toplam-kayıt**
    **• __Sunucu Sayacı__ | .say**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    `)

    message.channel.send(codework2)
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım","help","komutlar"],
 permLevel: 0,
};
exports.help = {
 name: 'yardım'
};