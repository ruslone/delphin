export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  const update = req.body;
  console.log("UPDATE:", JSON.stringify(update, null, 2));

  if (update.message?.web_app_data?.data) {
    const data = JSON.parse(update.message.web_app_data.data);

    if (data.type === "feedback") {
      await fetch(
        `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: process.env.ADMIN_CHAT_ID,
            text: `📩 Заявка с Mini App:

👤 Имя: ${data.name}
📞 Телефон: ${data.phone}
❓ Вопрос:
${data.message}`,
          }),
        },
      );
    }
  }

  res.status(200).send("OK");
}
