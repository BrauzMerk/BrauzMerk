// ID формы
const form = document.getElementById("form");

// Telegram настройки
const TELEGRAM_TOKEN = 8515711712:AAFZsU9dlgQ_QG5W438teb1H01pEtOMIbyM; // вставь сюда токен бота
const TELEGRAM_CHAT_ID = 5247142706; // вставь сюда chat_id (куда приходят заявки)

// Обработчик отправки формы
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = form.querySelector("button");
  btn.disabled = true;
  btn.textContent = "Отправка...";

  // Получаем данные из формы
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;

  try {
    // Отправка на Pipedream
    await fetch("https://eo41x5kvdf5kqs1.m.pipedream.net", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone })
    });

    // Отправка в Telegram
    await fetch(`https://api.telegram.org/bot${8515711712:AAFZsU9dlgQ_QG5W438teb1H01pEtOMIbyM}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: 5247142706,
        text: `📩 Новая заявка\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}`
      })
    });

    // Показать успех
    form.innerHTML = '<div class="success">✅ Заявка отправлена! Мы свяжемся с вами.</div>';

  } catch (err) {
    console.error(err);
    alert("Ошибка отправки, попробуйте позже.");
    btn.disabled = false;
    btn.textContent = "Отправить заявку";
  }
});
