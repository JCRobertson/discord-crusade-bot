const { MessageEmbed } = require("discord.js");
const ee = require("../../botconfig/embed.json");
const urlBuilder = require("../../Utilities/bonus-form-url-builder.js");
const constants = require("../../Utilities/constants.json");
module.exports = {
  name: "photo",
  category: "Reporting",
  aliases: ["battle-report, brphoto, br, photo"],
  cooldown: 2,
  usage: "!photo",
  description:
    "Sends you a prefilled form link for your battle report photo and let's everyone know that this can be voted on",
  run: async (client, message, args, user, text, prefix) => {
    try {
      if (message.channel.name != constants.battleReportPhotosChannel) {
        message.channel
          .send(
            new MessageEmbed()
              .setColor(ee.wrongcolor)
              .setFooter(ee.footertext, client.user.displayAvatarURL())
              .setTitle(
                "❌ Error | You can only use !unit in #" +
                  constants.battleReportPhotosChannel
              )
          )
          .then((msg) =>
            msg
              .delete({ timeout: 5000 })
              .catch((e) => console.log("Couldn't Delete --> Ignore".gray))
          );
        return message.delete();
      }
      if (message.attachments == null || message.attachments.size == 0) {
        message.channel
          .send(
            new MessageEmbed()
              .setColor(ee.wrongcolor)
              .setFooter(ee.footertext, client.user.displayAvatarURL())
              .setTitle("❌ Error | You forgot to attach a photo!")
          )
          .then((msg) =>
            msg
              .delete({ timeout: 5000 })
              .catch((e) => console.log("Couldn't Delete --> Ignore".gray))
          );
        return message.delete();
      }
      message.react(constants.trophyUnicode);
      //Find Role
      let roles = user.roles.cache;
      let role = "";
      for (var [key, value] of roles) {
        role = value.name;
        if (role == constants.purityRole) {
          role = constants.purityRole;
          break;
        } else if (role == constants.warpChargedRole) {
          role = constants.warpChargedRole;
          break;
        }
      }
      //Determine Embed Color based on alliance
      let color = ee.color;
      if (role == constants.purityRole) {
        color = ee.orderColor;
      } else if (role == constants.warpChargedRole) {
        color = ee.mayhemColor;
      }
      let url = urlBuilder(
        user.user.tag,
        role == constants.purityRole
          ? constants.purityId
          : constants.warpChargedId,
        false,
        false,
        true
      );
      let title =
        "Thanks for your photo(s)! Click this link to get points for your alliance!";
      // message.author.send(
      //   new MessageEmbed()
      //     .setColor(color)
      //     .setFooter(ee.footertext, client.user.displayAvatarURL())
      //     .setTitle(title ? title : "")
      //     .setURL(url ? url : "")
      // );
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
