  const tg = window.Telegram.WebApp;
  tg.ready();

  document.getElementById('send').onclick = async () => {
    const message = document.getElementById('msg').value;

    await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        initData: tg.initData
      })
    });

    tg.showAlert('Отправлено');


// import TelegramBot from "node-telegram-bot-api";

// const bot = new TelegramBot(process.env.BOT_TOKEN);

// function sendFeedback() {
//   const message = document.getElementById("message").value;

//   fetch("/api/feedback", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       message,
//       user: Telegram.WebApp.initDataUnsafe.user,
//     }),
//   });

//   Telegram.WebApp.showAlert("Спасибо за обратную связь!");
// }

// const tg = window.Telegram.WebApp;
// const form = document.getElementById("feedbackForm");
// const msg = document.getElementById("feedbackMessage");

// const isTelegramMiniApp = tg.initData && tg.initData.length > 0;

// if (!isTelegramMiniApp) {
//   // ❌ Обычный браузер
//   form.style.display = "none";
//   msg.style.display = "block";
//   msg.innerHTML = `
//     Эта форма работает только в Telegram.<br><br>
//     📞 Позвоните нам:
//     <a href="tel:+79601234567">+7 (960) 123-45-67</a>
//   `;
// } else {
//   // ✅ Telegram Mini App
//   tg.ready();

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const data = {
//       type: "feedback",
//       name: form[0].value.trim(),
//       phone: form[1].value.trim(),
//       message: form[2].value.trim(),
//     };

//     console.log("SEND DATA:", data);

//     // ⬅️ ВАЖНО: отправка данных
//     tg.sendData(JSON.stringify(data));

//     // UI-ответ пользователю
//     form.style.display = "none";
//     msg.style.display = "block";
//     msg.innerText = "✅ Сообщение отправлено. Мы скоро свяжемся с вами!";
//   });
// }
