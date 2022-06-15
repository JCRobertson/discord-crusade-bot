const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "fightfirst",
  category: "Information",
  aliases: ["ff", "fl", "fightlast"],
  cooldown: 4,
  usage: "fightfirst",
  description: "Posts the reference image for fight order",
  run: async (client, message, args, user, text, prefix) => {
    try {
      const embed = new MessageEmbed()
        .setColor(ee.color)
        .setTitle("Fight Order Reference Image")
        .setFooter(
          "Courtesy of www.goonhammer.com",
          client.user.displayAvatarURL()
        )
        .setImage(
          "https://d1w82usnq70pt2.cloudfront.net/wp-content/uploads/2021/06/Flow-Chart-2021-06-05-Fight-Phase-Simple-v2.png"
        );
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
