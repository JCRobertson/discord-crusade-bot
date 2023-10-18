const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "rules",
  category: "Information",
  aliases: ["r", "rule"],
  cooldown: 4,
  usage: "rules",
  description: "Returns the links for the rules",
  run: async (client, message, args, user, text, prefix) => {
    try {
      message.channel.send(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle(
            "10th Edition Core Rules, Quick Start Rules, and Rules Commentary"
          )
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://www.warhammer-community.com/warhammer-40000-downloads/#key-downloads"
          )
      );
      message.channel.send(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Indexes")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://www.warhammer-community.com/warhammer-40000-downloads/#indexes-faqs-and-errata"
          )
      );
      message.channel.send(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Boarding Actions Core and Mustering Rules")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://www.warhammer-community.com/warhammer-40000-downloads/#additional-rules"
          )
      );
    } catch (e) {
      console.log(String(e.stack).bgRed);
      return message.channel.send(
        new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setFooter(ee.footertext, ee.footericon)
          .setTitle(`❌ ERROR | An error occurred`)
          .setDescription(`\`\`\`${e.stack}\`\`\``)
      );
    }
  },
};

/** Template by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template */
