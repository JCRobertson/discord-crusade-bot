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
      let linkMessages = [];
      linkMessages.push(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Vadinax Player Pack")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://www.goonhammer.com/the-vadinax-campaign-player-packs/"
          )
      );
      linkMessages.push(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Crusade Balance Dataslate")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://drive.google.com/file/d/1jxtkUsT1353G1zyz9OUcICZrg0r6c8tT/view"
          )
      );
      linkMessages.push(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Boarding Actions Army Mustering Rules")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://www.warhammer-community.com/wp-content/uploads/2023/01/qPJwZxeX8lH4HarK.pdf"
          )
      );
      linkMessages.push(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Huzzah Planet Perplior Store Narrative Pack")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://docs.google.com/document/d/1Fx5a9VnHqkrZe_95M36UE7iDLSB3HpDc01m8d-6U1_A/edit?usp=sharing"
          )
      );
      linkMessages.push(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Guide to using Administratum")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://docs.google.com/document/d/1RJS0B5tGWDHA8ZRItppnIIDX6yTz974-5pRRQdZylKk/edit?usp=sharing"
          )
      );
      linkMessages.push(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Campaign Invite Link")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL("https://administratum.goonhammer.com/join?code=TBTFYG9")
      );
      linkMessages.push(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Huzzah Planet Perplior Store Narrative Pack")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL(
            "https://docs.google.com/document/d/1Fx5a9VnHqkrZe_95M36UE7iDLSB3HpDc01m8d-6U1_A/edit?usp=sharing"
          )
      );
      linkMessages.push(
        new MessageEmbed()
          .setColor(ee.color)
          .setTitle("PCA Linktree")
          .setFooter(ee.footertext, client.user.displayAvatarURL())
          .setURL("https://www.linktr.ee/novapca")
      );
      linkMessages.forEach((linkMessage) => {
        message.channel.send(linkMessage);
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
