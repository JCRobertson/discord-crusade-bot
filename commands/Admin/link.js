const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "link",
  category: "Admin",
  aliases: ["l", "links"],
  cooldown: 4,
  usage: "link",
  description: "Returns the link for the linktree",
  run: async (client, message, args, user, text, prefix) => {
    try {
      message.channel.send(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("PCA Linktree")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL("https://www.linktr.ee/novapca")
      );
      message.channel.send(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Guide to using Administratum")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://docs.google.com/document/d/1RJS0B5tGWDHA8ZRItppnIIDX6yTz974-5pRRQdZylKk/edit?usp=sharing"
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
