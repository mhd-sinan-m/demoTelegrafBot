import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { message } from 'telegraf/filters';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) =>  ctx.reply("Welcome to my bot!"))

bot.on(message('photo'), async (ctx) => {
    const photo = ctx.message.photo?.[ctx.message.photo.length - 1]?.file_id;
    await ctx.reply(`Photo ID: ${photo}`);
    await ctx.replyWithPhoto(photo, { caption: "This is the photo you sent!" });
});

bot.launch();