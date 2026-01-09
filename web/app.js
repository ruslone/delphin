const tg = window.Telegram.WebApp;

tg.ready();

document.getElementById("title").innerText = "Привет!";
document.getElementById("info").innerText =
  "Пользователь: " + (tg.initDataUnsafe?.user?.first_name || "неизвестно");

document.getElementById("closeBtn").onclick = () => {
  tg.close();
};

