const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "datasheets",
  category: "Information",
  aliases: ["i", "index", "datasheet", "indexes"],
  cooldown: 4,
  usage: "datasheets",
  description: "Returns the links for the indexes",
  run: async (client, message, args, user, text, prefix) => {
    try {
      message.channel.send(
        new MessageEmbed()
          .setColor(ee.spacemarineColor)
          .setTitle("Space Marines")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://www.warhammer-community.com/2023/06/09/download-free-space-marines-index-cards-and-defend-the-imperium-from-annihilation/"
          )
      );
      message.channel.send(
        new MessageEmbed()
          .setColor(ee.chapterColor)
          .setTitle("Space Marine Chapters")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://www.warhammer-community.com/2023/06/12/free-space-marines-index-cards-dark-angels-blood-angels-space-wolves-black-templars-and-deathwatch/"
          )
      );
      message.channel.send(
        new MessageEmbed()
          .setColor(ee.imperiumColor)
          .setTitle("Other Imperium Armies")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://www.warhammer-community.com/2023/06/14/free-imperium-index-cards-reclaim-the-galaxy-with-humanitys-finest/"
          )
      );
      message.channel.send(
        new MessageEmbed()
          .setColor(ee.chaosColor)
          .setTitle("Chaos")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://www.warhammer-community.com/2023/06/13/free-chaos-index-cards-let-the-galaxy-burn-with-rules-for-six-factions/"
          )
      );
      message.channel.send(
        new MessageEmbed()
          .setColor(ee.xenosColor)
          .setTitle("Xenos")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://www.warhammer-community.com/2023/06/15/free-xenos-index-cards-the-battle-for-the-galaxy-rages-on-all-sides/"
          )
      );
      message.channel.send(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Imperial Armour")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://www.warhammer-community.com/2023/06/23/downloadable-datasheets-and-points-for-imperial-armour/"
          )
      );
      message.channel.send(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Combat Patrol")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://www.warhammer-community.com/2023/06/20/free-combat-patrol-rule-downloads-let-you-fight-fast-balanced-skirmishes-in-the-new40k/"
          )
      );
      message.channel.send(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Legends")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://www.warhammer-community.com/2023/06/21/the-legends-of-the-horus-heresy-get-downloadable-rules-for-warhammer-40000/"
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
