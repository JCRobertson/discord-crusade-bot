const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "reservation",
  category: "Information",
  aliases: ["rsvp", "reserve", "hhreserve"],
  cooldown: 4,
  usage: "combatpatrol",
  description:
    "Link to tock, the platform Huzzah Hobbies uses to reserve tables",
  run: async (client, message, args, user, text, prefix) => {
    try {
      const embed = new MessageEmbed()
        .setColor(ee.color)
        .setTitle("Huzzah Hobbies Table Reservation Link")
        .setURL("https://www.exploretock.com/huzzahhobbies/")
        .setFooter(ee.footertext, client.user.displayAvatarURL());
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
