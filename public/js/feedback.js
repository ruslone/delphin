const tg = window.Telegram?.WebApp;

// Проверка, открыта ли страница в Telegram Mini App
const inTelegram = !!tg;

// Если не в Telegram, показываем телефон администратора
if (!inTelegram) {
  const msg = document.getElementById('feedbackMessage');
  msg.style.display = 'block';
  msg.innerHTML = `Страница не открыта в Telegram. Пожалуйста, позвоните нам по телефону: <a href="tel:+79601234567">+7 (960) 123-45-67</a>`;
}

// Логика отправки формы внутри Telegram
if (inTelegram) {
  tg.ready();

  document.getElementById("feedbackForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      type: "feedback",
      name: form[0].value.trim(),
      phone: form[1].value.trim(),
      message: form[2].value.trim()
    };

    tg.sendData(JSON.stringify(data));

    // Показываем сообщение пользователю
    const msg = document.getElementById('feedbackMessage');
    msg.style.display = 'block';
    msg.innerText = '✅ Ваше сообщение отправлено. Спасибо!';
    
    // Опционально можно очистить форму
    form.reset();
  });
}