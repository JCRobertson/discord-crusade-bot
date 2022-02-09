const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const constants = require("../../Utilities/constants.json");
module.exports = {
  name: "report",
  category: "Reporting",
  aliases: ["narrative-report"],
  cooldown: 2,
  usage: "report <REPORT TITLE> ++ <NARRATIVE REPORT HERE>",
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
      //Find Role
      let roles = user.roles.cache;
      let role = "";
      for (var [key, value] of roles) {
        let roleName = value.name;
        if (roleName == constants.orderRole) {
          role = constants.orderRole;
          break;
        } else if (roleName == constants.mayhemRole) {
          role = constants.mayhemRole;
        }
      }
      //Determine Embed Color based on alliance
      let color = ee.color;
      if (role == constants.orderRole) {
        color = ee.orderColor;
      } else if (role == constants.mayhemRole) {
        color = ee.mayhemColor;
      }
      //Grab User Avatar
      let avatarURL = ""
      await client.users.fetch(user.id, false).then(fetchedUser => {
        avatarURL = fetchedUser.avatarURL();
      });
      message.channel.send(
        new MessageEmbed()
          .setColor(color)
          .setFooter(user.displayName, avatarURL)
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
