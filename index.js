import telegaf from 'telegraf';
//! import { message } from 'telegraf/filters';

const bot = new telegaf("6985499449:AAHNyF_vxY-9R_h6PiwKI1H4p0Swl0c3SwE")

bot.start((ctx) =>  ctx.reply("Welcome to my bot!"))

bot.on('message', async (ctx) => {
    photo = ctx.message.photo[1].file_id || null;
        await ctx.reply(`Photo ID: ${fileId}`);
        await ctx.replyWithPhoto(photo, { caption: "This is the photo you sent!" });
});