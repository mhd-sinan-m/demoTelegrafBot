import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import * as controller from '../controller.js';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Register handlers
bot.start(controller.startMsg);
bot.hears(/hi/i, (ctx) => ctx.reply('Hey there'));
bot.on('text', controller.replyToText);
bot.on('photo', controller.replyToPhoto);

// Vercel Serverless Function Handler
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await bot.handleUpdate(req.body);
      res.status(200).send('OK');
    } catch (err) {
      console.error('Error handling update:', err);
      res.status(500).send('Error handling update');
    }
  } else {
    res.status(200).send('Set this endpoint as your Telegram webhook URL.');
  }
}
