import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(process.env.BOT_TOKEN);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  const update = req.body;

  console.log("UPDATE:", JSON.stringify(update, null, 2));


  // /start
  if (update.message?.text === "/start") {
    await bot.sendMessage(
      update.message.chat.id,
      "Привет! Открой мини-приложение ниже 👇"
    );
  }

  // ✅ ВОТ ОНО — ОБРАБОТКА FEEDBACK
  if (update.message?.web_app_data?.data) {
    const data = JSON.parse(update.message.web_app_data.data);

    if (data.type === "feedback") {
      await bot.sendMessage(
        process.env.ADMIN_CHAT_ID,
        `📩 Заявка с Mini App:

👤 Имя: ${data.name}
📞 Телефон: ${data.phone}
❓ Вопрос:
${data.message}`
      );
    }
  }

  res.status(200).send("OK");
}







