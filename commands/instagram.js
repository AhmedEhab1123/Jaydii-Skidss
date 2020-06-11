const {RichEmbed} = require("discord.js");
const { stripIndents } = require("common-tags"); 

const fetch = require("node-fetch")
  exports.run = async (client, message, args) => {
    const name = args.join(" ");
    
    if(!name) {
      return message.reply("Maybe it's useful to actually search for someone...");
      .then(m => m.delete(5000))
    }
  }
module.exports = {
  name: "instagram",
  aliases: ["insta"],
  category: "info",
  description: "Find ot some nice instagram stadistics"

}

