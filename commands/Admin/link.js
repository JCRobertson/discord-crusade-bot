const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "link",
  category: "Admin",
  aliases: ["l", "linktree"],
  cooldown: 4,
  usage: "link",
  description: "Returns the link for the linktree",
  run: async (client, message, args, user, text, prefix) => {
    try {
      const embed = new MessageEmbed()
        .setColor(ee.color)
        .setTitle("Click here to access PCA links")
        .setFooter(ee.footertext, client.user.displayAvatarURL())
        .setURL("https://www.linktr.ee/novapca");
      message.channel.send(embed);
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
