import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { message } from 'telegraf/filters';
import * as controller from "./controller.js";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Start
bot.start(controller.startMsg);

// Other messages
bot.hears(/hi/i, (ctx) => ctx.reply('Hey there')); // Removed quotes around 'hi'
bot.on(message('text'), controller.replyToText);
bot.on(message('photo'), controller.replyToPhoto);
bot.launch()
