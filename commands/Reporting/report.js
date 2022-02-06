const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "report",
  category: "Reporting",
  aliases: ["report"],
  cooldown: 2,
  usage: "report <TITLE> ++ <NARRATIVE REPORT HERE>",
  description:
    "Resends your report from you as an Embed and gives Warzone Points to your alliance",
  run: async (client, message, args, user, text, prefix) => {
    try {
      if (!args[0])
        return message.channel.send(
          new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | You didn't add any text`)
            .setDescription(`Usage: \`${prefix}${this.usage}\``)
        );
      let userargs = args.join(" ").split("++");
      let title = userargs[0];
      let report = userargs.slice(1).join(" ");
      let roles = user.roles.cache;
      let role = "";
      console.log("roles " + roles);
      for (var [key, value] of roles) {
        let roleName = value.name;
        if (roleName == ee.orderRole) {
          role = ee.orderRole;
          break;
        } else if (roleName == ee.mayhemRole) {
          role = ee.mayhemRole;
        }
      }
      let color = ee.color;
      if (role == ee.orderRole) {
        color = ee.orderColor;
      } else if (role == ee.mayhemRole) {
        color = ee.mayhemColor;
      }
      message.channel.send(
        new MessageEmbed()
          .setColor(color)
          .setFooter("Written by: " + user.displayName, user.avatar)
          .setTitle(title ? title : "")
          .setDescription(report ? report : "")
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
