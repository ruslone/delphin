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
    <a href="tel:+70001234567">+7 (000) 123-45-67</a>
  `;
} else {
  // ✅ Telegram Mini App
  tg.ready();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      type: "feedback",
      name: form[0].value.trim(),
      phone: form[1].value.trim(),
      message: form[2].value.trim(),
    };

    fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data,
        initData: tg.initData,
      }),
    });

    // UI-ответ пользователю
    form.style.display = "none";
    msg.style.display = "block";
    msg.innerText = "✅ Сообщение отправлено. Мы скоро свяжемся с вами!";
  });
}
