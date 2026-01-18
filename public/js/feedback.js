const tg = window.Telegram.WebApp;
const form = document.getElementById("feedbackForm");
const msg = document.getElementById("feedbackMessage");

const isTelegramMiniApp = tg.initData && tg.initData.length > 0;

if (!isTelegramMiniApp) {
  // ❌ Обычный браузер
  form.style.display = "none";
  msg.style.display = "block";
  msg.innerHTML = `
    Эта форма работает только в Telegram.<br><br>
    📞 Позвоните нам:
    <a href="tel:+79601234567">+7 (960) 123-45-67</a>
  `;
} else {
  // ✅ Telegram Mini App
  tg.ready();

  console.log("Telegram initData:", tg.initData);
  console.log("Is Telegram Mini App:", isTelegramMiniApp);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      type: "feedback",
      name: form[0].value.trim(),
      phone: form[1].value.trim(),
      message: form[2].value.trim(),
    };

    console.log("SEND DATA:", data);
    alert(1);
    // ⬅️ ВАЖНО: отправка данных
    tg.sendData(JSON.stringify(data));

    // UI-ответ пользователю
    form.style.display = "none";
    msg.style.display = "block";
    msg.innerText = "✅ Сообщение отправлено. Мы скоро свяжемся с вами!";
  });
}
