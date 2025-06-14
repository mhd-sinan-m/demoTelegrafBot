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

// vercel handler
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await bot.handleUpdate(req.body);
      res.status(200).send('OK');
    } catch (err) {
      res.status(500).send('Error handling update');
    }
  } else {
    res.status(200).send('Set this endpoint as your Telegram webhook URL.');
  }
}
