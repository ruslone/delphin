import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(process.env.BOT_TOKEN);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  const update = req.body;

  if (update.message?.text === "/start") {
    await bot.sendMessage(
      update.message.chat.id,
      "Открой Mini App 👇",
      {
        reply_markup: {
          keyboard: [[{
            text: "Открыть приложение",
            web_app: {
              url: "https://delphin93.vercel.app/"
            }
          }]],
        resize_keyboard: true
        }
      }
    );
  }

  res.status(200).send("OK");
}
