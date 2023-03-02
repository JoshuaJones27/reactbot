const { Telegraf } = require("telegraf");
const TOKEN = "6247160381:AAG6-UtpUhuvMMfM-7ssb9FLualoMKQ1KT8";
const bot = new Telegraf(TOKEN);

const web_link = "https://warm-hotteok-d3c887.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "Shop", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();