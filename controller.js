 export const startMsg = async (ctx) => {
  try {
    await ctx.reply("Welcome to my bot!");
  } catch (err) {
    console.error(err);
  }
};

export const replyToPhoto = async (ctx) => {
    const photo = ctx.message.photo[1]?.file_id;
    try {
    await ctx.reply(` <b> file_Id =</b> <code> ${photo} </code>`, { parse_mode: "HTML" });
    }
    catch (err) {console.error(err)}
}

export const replyToText = async (ctx) => {
    const text = ctx.message.text;
    try {
        await ctx.replyWithPhoto(text);
    } catch (err) {
        await ctx.reply("send file_Id only");
    }
}