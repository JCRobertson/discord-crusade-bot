const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");

const diceRegex = new RegExp(/(\d*)d(\d+)/);

module.exports = {
  name: "\\d*d\\d+",
  category: "Rolling",
  aliases: [],
  cooldown: 4,
  usage: "XdX <TEXT>",
  description: "Rolls a number of specified dice",
  run: async (client, message, args, user, text, prefix, command) => {
    try {
      const match = command.match(diceRegex);
      const diceNum = (match[1] === "") ? 1 : parseInt(match[1])
      const diceSize = parseInt(match[2])

      let result = [];
        for (let die = 0; die < diceNum; die++) {
          const roll = Math.floor(Math.random() * diceSize + 1);
          result.push({name: "Result "+(die+1), value: "`" + roll.toString() + "`", inline: true});
        }

      let title1 = "Rolling " + command;
      let title2 = "Your " + command + " Result";
      if (args[0]) {
        let argString = "";
        for (let element of args.values()) {
          argString = argString + " " + element;
        }
        title1 = title1 + " for" + argString;
        title2 = title2 + " for" + argString;
      }
      const embed = new MessageEmbed()
        .setColor(ee.color)
        .setTitle(title2)
        .setFooter(ee.footertext, client.user.displayAvatarURL())
        .addFields(result);
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
          }, 3000);
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
