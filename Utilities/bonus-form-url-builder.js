const constants = require("../Utilities/constants.json");

module.exports = (discordTag, factionId, isReport, isPhoto) => {
  let url =
      "https://docs.google.com/forms/d/e/1FAIpQLScJESX26QQBHy3ahyEBhd4LV5t2fXLIFQxSSZX5EqM5eTQKng/viewform?usp=pp_url&",
    discordIdEntry = "entry.116831608=",
    factionIdEntry = "&entry.866172526=",
    typeIdEntry = "&entry.632939385=";
  const photoId =
      "Paint+a+Unit+%2B1+(Must+be+at+minimum+Battle+Ready.+Must+be+in+your+order+of+battle.+Must+post+photo+proof+on+discord+%23crusade-photos+channel+and+add+a+:trophy:+emoji+to+the+text+describing+the+photo)",
    reportId =
      "Battle+Report+Post+%2B1+(Each+player+can+post+a+story+from+their+perspective!+Pictures+are+a+plus.+Post+on+discord+narrative-reports+channel+and+add+a+:trophy:+emoji+to+the+text+of+the+post)";

  if (discordTag) {
    //Sanitize Tag
    discordIdEntry += discordTag.replace(" ", "+").replace("#", "%23");
    url += discordIdEntry;
  }
  if (factionId) {
    factionIdEntry +=
      factionId == constants.orderId ? constants.orderId : constants.mayhemId;
    url += factionIdEntry;
  }
  if (isReport || isPhoto) {
    typeIdEntry += isReport ? reportId : photoId;
    url += typeIdEntry;
  }

  return url;
};
