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


console.log('\x1b[32m%s\x1b[0m', 'BOT CONFIGURED...'); // Changed color to green for "configured" status

bot.launch() 
//module.exports = async (req, res) => {
//try {
//  await bot.handleUpdate(req.body);
//  res.status(200).send('OK');
  //  console.log('UPDATE HANDLED SUCCESSFULLY...');
  //} catch (error) {
   // console.error('ERROR OCCURRED:', error); 
    //res.status(500).send('Error');
 // }};
