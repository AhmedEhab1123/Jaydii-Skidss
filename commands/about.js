const Discord = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")

exports.run = (bot, message, args) => {
  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }
    const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    
    const embedStats = new Discord.RichEmbed()
      .setAuthor(bot.user.username)
      .setTitle("**Bot Stats**")
      .setFooter("Created by A FUCKIN SKID THAT CAN'T DO ANYSHIT")
      //.setURL(https://discord.gg/Q2At3nb)
      .setColor("RANDOM")
      .addField("• Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
      .addField("• Uptime ", `${duration}`, true)
      .addField("• Users", `${bot.users.size.toLocaleString()}`, true)
      .addField("• Servers", `${bot.guilds.size.toLocaleString()}`, true)
      .addField("• Channels ", `${bot.channels.size.toLocaleString()}`, true)
      .addField("• Discord.js", "V12.x.x", true)
      .addField("• Node", "Node V. 12.x.x", true)
      .addField("• CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
      .addField("• CPU usage", `\`${percent.toFixed(2)}%\``, true)
      .addField("• Arch", `\`${os.arch()}\``, true)
      .addField("• Platform", `\`\`${os.platform()}\`\``, true)
      .addField("API Latency", `${Math.round(bot.ping)}ms`)
      .addField("[Support Server](https://google.com)\n[Add Bot Here](https://google.com)")
    
    message.channel.send(embedStats);
  });
}; 