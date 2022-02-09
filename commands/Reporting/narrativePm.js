const { MessageEmbed } = require("discord.js");
const ee = require("../../botconfig/embed.json");
const urlBuilder = require("../../Utilities/bonus-form-url-builder.js");
const constants = require("../../Utilities/constants.json");
module.exports = {
  name: "report",
  category: "Reporting",
  aliases: ["narrative-report"],
  cooldown: 2,
  usage: "!report <TEXT>",
  description:
    "Sends you a prefilled form link for your narrative report and let's everyone know that this can be voted on",
  run: async (client, message, args, user, text, prefix) => {
    try {
      if (!args[0])
        return message.channel.send(
          new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, client.user.displayAvatarURL())
            .setTitle(`❌ ERROR | You didn't type anything`)
            .setDescription(`Usage: \`${prefix}${this.usage}\``)
        );
      message.react(constants.trophyUnicode);
      //Find Role
      let roles = user.roles.cache;
      let role = "";
      for (var [key, value] of roles) {
        role = value.name;
        if (role == constants.orderRole) {
          role = constants.orderRole;
          break;
        } else if (role == constants.mayhemRole) {
          role = constants.mayhemRole;
          break;
        }
      }
      //Determine Embed Color based on alliance
      let color = ee.color;
      if (role == constants.orderRole) {
        color = ee.orderColor;
      } else if (role == constants.mayhemRole) {
        color = ee.mayhemColor;
      }
      let url = urlBuilder(user.user.tag, role == constants.orderRole ? constants.orderId : mayhemId, true, false);
      let title = "Thank you for your report! Please click the link to get points for your alliance."
      message.author.send(
        new MessageEmbed()
          .setColor(color)
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setTitle(title ? title : "")
          .setDescription(url ? url : "")
      );
    } catch (e) {
      console.log(String(e.stack).bgRed);
      return message.channel.send(
        new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setTitle(`❌ ERROR | An error occurred`)
          .setDescription(`\`\`\`${e.stack}\`\`\``)
      );
    }
  },
};

/** Template by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template */
