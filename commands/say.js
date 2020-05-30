const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
      let saying = args.join(" ");
      if(!saying) return message.reply(`please, give me a text`, )
      message.delete();
      disableMentions: ''
      message.channel.send(saying , {disableMentions:'everyone'});
      

}

module.exports.help = {
    name: "say"
  }
