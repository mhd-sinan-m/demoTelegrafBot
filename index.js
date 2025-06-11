import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { message } from 'telegraf/filters';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) =>  ctx.reply("Welcome to my bot!"))

bot.on(message('photo'), async (ctx) => {
    const photo = ctx.message.photo[1]?.file_id;
    await ctx.reply(photo);
});
bot.on(message('text'), async (ctx) => {
    const text = ctx.message.text;
    try {
        await ctx.replyWithPhoto(`https://source.unsplash.com/random?${text}`);
    } catch (error) {
        await ctx.reply("Sorry, I can't find any image for that");
    }
});


bot.launch();