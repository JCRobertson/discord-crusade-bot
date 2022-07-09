const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "d6",
  category: "Rolling",
  aliases: ["rolld6", "rd6", "D6"],
  cooldown: 4,
  usage: "d6 <TEXT>",
  description: "Rolls a D6",
  run: async (client, message, args, user, text, prefix) => {
    try {
      let result1 = Math.floor(Math.random() * 6 + 1);
      let title1 = "Rolling Your Die";
      let title2 = "Your D6 Result";
      if (args[0]) {
        let argString = "";
        for (let element of args.values()) {
          argString = argString + " " + element;
        }
        title1 = title1 + " for " + argString;
        title2 = title2 + " for " + argString;
      }
      const embed = new MessageEmbed()
        .setColor(ee.color)
        .setTitle(title2)
        .setFooter(ee.footertext, client.user.displayAvatarURL())
        .addFields({ name: "Result", value: result1, inline: true });
      message.channel
        .send(
          new MessageEmbed()
            .setColor(ee.color)
            .setFooter(ee.footertext, client.user.displayAvatarURL())
            .setTitle(title1)
        )
        .then((msg) => {
          setTimeout(function () {
            msg
              .delete()
              .catch((e) => console.log("Couldn't Delete --> Ignore".gray));
            message.channel.send(embed);
          }, 5000);
        });
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
