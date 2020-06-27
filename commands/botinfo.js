const Discord = require("discord.js");
const run = module.exports.run = async (client, msg, args) => {
    const os = require('os');
    const arch = os.arch()
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
  
    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);
    var cpu = process.cpuUsage().system / 1024 / 1024;
    var cpu_usage = Math.round(cpu * 100) / 100;
    
    let postMsg = await msg.channel.send("**Please Wait...**");
    let info = new Discord.RichEmbed()

       .setDescription("Bot Info:")
      .setColor('RANDOM')
      .addField(":robot: Bot Name", `${client.user.tag}`)
      .addField("👑 Creator", "Jaydii | Jayden")
      .addField("🗓️ Created At", `${client.user.createdAt}`)
      .addField('Node', `${process.version}`)
      .addField('Library', 'discord.js')
      .addField('💻 Operating System', `${os.platform} ${arch}`)
      .addField(`💬 Want to see last update ${client.user.username}?`, `Usage \`-changelog\``)
      .addField("📑 **Usefull link**",  "[Invite me](https://discord.com/api/oauth2/authorize?client_id=723558381570359327&permissions=8&scope=bot) | [Vote me]() | [Support Server](https://discord.gg/Q2At3nb)") 
      .setTimestamp()
      .setFooter(`Requested by: ${msg.author.tag}`)

         setTimeout(() => {
         postMsg.edit(info)
          }, 1000);
} 

module.exports.help = {
    name: 'serverinfo', 
    aliases: ['servers'],
    ownerOnly: false,
    description: 'bot server info',
    usage: ''
}
