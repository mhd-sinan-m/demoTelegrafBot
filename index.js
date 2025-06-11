import { Telegraf } from 'telegraf';
//! import { message } from 'telegraf/filters';

const bot = new Telegraf("6985499449:AAHNyF_vxY-9R_h6PiwKI1H4p0Swl0c3SwE")

bot.start((ctx) =>  ctx.reply("Welcome to my bot!"))

bot.on('message', async (ctx) => {
    const photo = ctx.message.photo?.[1]?.file_id || null;
    if (photo) {
        await ctx.reply(`Photo ID: ${photo}`);
        await ctx.replyWithPhoto(photo, { caption: "This is the photo you sent!" });
    }
});

bot.launch();