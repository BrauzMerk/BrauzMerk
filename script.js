const form = document.getElementById("form");

// Настройки Telegram
const TELEGRAM_TOKEN = 8515711712:AAFZsU9dlgQ_QG5W438teb1H01pEtOMIbyM;  // вставь токен бота
const TELEGRAM_CHAT_ID = 5247142706;  // вставь свой chat_id

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = form.querySelector("button");
  btn.disabled = true;
  btn.textContent = "Отправка...";

  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;

  try {
    // 1️⃣ Отправка на новый Pipedream URL
    await fetch("https://eoq0utkld8mn942.m.pipedream.net", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone })
    });

    // 2️⃣ Отправка в Telegram без \n и <br>
    await fetch(`https://api.telegram.org/bot${8515711712:AAFZsU9dlgQ_QG5W438teb1H01pEtOMIbyM}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: 5247142706,
        text: `📩 Новая заявка Имя: ${name} Email: ${email} Телефон: ${phone}`
      })
    });

    form.innerHTML = '<div class="success">✅ Заявка отправлена! Мы свяжемся с вами.</div>';
  } catch (err) {
    console.error(err);
    btn.disabled = false;
    btn.textContent = "Отправить заявку";
    alert("Ошибка отправки, попробуйте позже.");
  }
});

const burger = document.getElementById("burger");
const sideMenu = document.getElementById("sideMenu");

burger.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
});
