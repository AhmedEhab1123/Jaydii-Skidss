const Discord = require("discord.js")

module.exports.run = (bot, message, args, ops, PREFIX) => {
      let pages = [`
**General Commands**
 **-help
 -botinfo
 -bug
 -userinfo
 -serverinfo
 -stats
 -ping
 -report
 -invite**
`, `
**Image**
 **-slap
 -avatar
 -yesorno
 -meme
 -bunny
 -kiss
 -hug
 -gif <gname>
 -pat <mention | say something>
 -cat 
 -dog**
ﾠ`, `
**Music**
 **-play
 -pause
 -resume
 -skip
 -stop
 -np
 -queue
 -volume**
ﾠ`, `
**Utility & Fun**
 **-hastebin <text>
 -calculator <number>
 -rps <rock|paper|scissors>
 -discrim <number>
 -fmk <mention>
 -asciify <messages>
 -embed <messages>
 -emojify <messages>
 -ask <question>
 -say <messages>
 -weather <location>
 -flip
 -ascii <mention>**
ﾠ`, `
**Moderator & Developer**
 **-ban @mention <reason>
 -kick @mention <reason>
 -mute @mention <reason>
 -unmute @mention <reason>
 -warn @mention <reason>
 -esay <messages>
 -purge <size>
  
Note: For Mute Command, Please Create Some Role Named "**Muted**"
ﾠ`, `
**NSFW Commands
-lewd**
`];
       let page = 1;

       const embed = new Discord.RichEmbed()
       .setDescription(pages[page-1])
       .setColor('RANDOM')
       .setFooter(`Page ${page} Of ${pages.length} | Jaydii`)

    message.channel.send(embed).then(msg => {
      msg.react(`⏪`).then( r => {
        msg.react(`⏩`)
        const backwardsFilter = (reaction, user) => reaction.emoji.name === `⏪` && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === `⏩` && user.id === message.author.id;
        const backwards = msg.createReactionCollector(backwardsFilter, { time:600000 });
        const forwards = msg.createReactionCollector(forwardsFilter, { time:600000 });
        backwards.on('collect', r => {
          if (page === 1) return;
          page--;
          embed.setDescription(pages[page-1]);
          embed.setTimestamp()
          embed.setFooter(`Page ${page} Of ${pages.length} | Jaydii`);
          msg.edit(embed)
        })
        forwards.on('collect', r => {
          if (page === pages.length) return;
          page++;
          embed.setDescription(pages[page-1]);
          embed.setTimestamp()
          embed.setFooter(`Page ${page} Of ${pages.length} | Jaydii`);
          msg.edit(embed)
        })
      })
    })
};
module.exports.help = {
    name: 'help'
};
