const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
       
  let everyone = args.join(" ");
  if(message.content.startsWith('-say @everyone')){
      if(!everyone) return message.reply(`i cant mention everyone`, )
      message.delete();
      disableMentions: 'everyone, here'
      message.channel.send(`${saying}` , {disableMentions:'everyone'});
      
  }
    
      let saying = args.join(" ");
      if(!saying) return message.reply(`please, give me a text`, )
      message.delete();
      disableMentions: 'everyone, here'
      message.channel.send(`${saying}` , {disableMentions:'everyone'});
      

}

module.exports.help = {
    name: "say"
  }
