import { Telegraf } from 'telegraf'
import dotenv from 'dotenv';
import { message } from 'telegraf/filters';
import * as controller from "./controller.js";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Start
bot.start(controller.startMsg);

// Other messages
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.on(message('text'), controller.replyToText);
bot.on(message('photo'), controller.replyToPhoto);

// Launch
try {
  bot.launch();
} catch (err) {
  console.error(err);
}
