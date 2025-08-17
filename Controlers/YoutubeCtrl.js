// var Book = require("../Models/Book");
const ytdl = require("ytdl-core");

module.exports = function (db) {
  // Book = new Book(db);
  return {
    async index(req, res, next) {
      const url = "https://www.youtube.com/watch?v=nl3nzaG16bo&list=PLRyMTmVVQ9y5kv9ChY8_5vtlPxUFxaA3_&index=9";
      const info = await ytdl.getInfo(url);
      return res.json({
        info: info.formats.sort((a, b) => {
          return a.mimeType < b.mimeType;
        }),
      });


    },

  }
}