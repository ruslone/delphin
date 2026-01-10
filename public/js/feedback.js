const tg = window.Telegram?.WebApp;
const form = document.getElementById("feedbackForm");
const msg = document.getElementById("feedbackMessage");

if (!tg) {
  // Если не в Telegram — скрываем форму и показываем телефон
  form.style.display = "none";
  msg.style.display = "block";
  msg.innerHTML = `Страница должна открываться через Telegram. <br>
  Позвоните нам по телефону: <a href="tel:+79601234567">+7 (960) 123-45-67</a>`;
} else {
  // Telegram Mini App
  tg.ready();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      type: "feedback",
      name: form[0].value.trim(),
      phone: form[1].value.trim(),
      message: form[2].value.trim()
    };

    tg.sendData(JSON.stringify(data));

    // Показать сообщение пользователю
    msg.style.display = "block";
    msg.innerText = '✅ Ваше сообщение отправлено. Спасибо!';
    form.reset();
  });
}