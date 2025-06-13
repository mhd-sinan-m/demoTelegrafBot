import { Telegraf } from 'telegraf'
import dotenv from 'dotenv';
import { message } from 'telegraf/filters';
import * as controller from "./controller.js";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Start
bot.start(controller.startMsg);

// Other messages
bot.hears(/'hi'/i, (ctx) => ctx.reply('Hey there'))
bot.on(message('text'), controller.replyToText);
bot.on(message('photo'), controller.replyToPhoto);

// Launch
// bot.launch();

console.log('\x1b[31m%s\x1b[0m', 'BOT RUNNING...');

module.exports = async (req, res) => {
  try {
    await bot.handleUpdate(req.body);
    res.status(200).send('OK');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
};
