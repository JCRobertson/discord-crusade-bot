const constants = require("../Utilities/constants.json");

module.exports = (discordTag, factionId, isReport, isPainted, isPhoto) => {
  let url =
      "https://docs.google.com/forms/d/e/1FAIpQLSfrO2UHF4EyQPi8QkE58_KDrwnbQmyZz8DMLDdzJeX09ijOCQ/viewform?usp=pp_url",
    discordIdEntry = "&entry.116831608=",
    factionIdEntry = "&entry.866172526=",
    typeIdEntry = "&entry.632939385=";
  const paintedId = "Painted+a+Unit",
    reportId = "Narrative+Report",
    photoId = "Battle+Report+Picture(s)";

  if (discordTag) {
    //Sanitize Tag
    discordIdEntry += discordTag.replace(" ", "+").replace("#", "%23");
    url += discordIdEntry;
  }
  if (factionId) {
    factionIdEntry +=
      factionId == constants.purityId
        ? constants.purityId
        : constants.warpChargedId;
    url += factionIdEntry;
  }
  if (isReport) {
    typeIdEntry += reportId;
    url += typeIdEntry;
  } else if (isPainted) {
    typeIdEntry += paintedId;
    url += typeIdEntry;
  } else if (isPhoto) {
    typeIdEntry += photoId;
    url += typeIdEntry;
  }

  return url;
};
