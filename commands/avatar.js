const Discord = module.require("discord.js");

exports.run = async (bot, message, args) => {

  var footertext = [`${bot.user.username}: oof sexy`, `${bot.user.username}: nice`, `${bot.user.username}: 🔥`, `${bot.user.username}: Someone's looking sharp today!`, `${bot.user.username}: oof if i wasn't a bot...`, `${bot.user.username}: looking sexier than a mug`];
    var rand = Math.floor(Math.random() * footertext.length);
    var randomfooter = footertext[rand];
  let boticon = bot.user.displayAvatarURL;
  
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  let avatarembed = new Discord.RichEmbed()
  .setColor(3447003)
  .setAuthor(`📷 ${member.user.tag}'s Avatar`)
  .setImage(member.user.displayAvatarURL)
  .setTimestamp()
  .setFooter(`${randomfooter}`, `${boticon}`) 
   message.channel.send(avatarembed);
  
 }

exports.help = {
    name: 'avatar',
    aliases: ['pp'],
    description: 'Shows User Avatars',
    usage: '(p)avatar'
};
