var Ambidex = require("ambidex");

var bikeIndexExample = require("../init.js");
var TardisGallery = require("../bike-index/tardis/TardisGallery.server.js");

module.exports = new TardisGallery(
  {
    ambidexPromises: [
      bikeIndexExample
    ],

    settings: {
      NAME: "Bike Index TARDIS",
      URLS: [
        "/",
        "/bikes/1035/",
        "/bikes/1041/",
      ]
    }
  }
);
