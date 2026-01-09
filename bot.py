from aiogram import Bot, Dispatcher, types
from aiogram.utils import executor

BOT_TOKEN = "TOKEN"
WEB_APP_URL = "https://your-domain.com/index.html"

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher(bot)

@dp.message_handler(commands=["start"])
async def start(message: types.Message):
    kb = types.ReplyKeyboardMarkup(resize_keyboard=True)
    kb.add(
        types.KeyboardButton(
            "Открыть Mini App",
            web_app=types.WebAppInfo(url=WEB_APP_URL)
        )
    )
    await message.answer("Открой приложение:", reply_markup=kb)

executor.start_polling(dp)

