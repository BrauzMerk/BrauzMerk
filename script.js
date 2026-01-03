// Получаем форму по id
const form = document.getElementById("form");

// Обработчик отправки формы
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Отменяем стандартное поведение формы

  // Блокируем кнопку, меняем текст
  const btn = form.querySelector("button");
  btn.disabled = true;
  btn.textContent = "Отправка...";

  // Считываем данные формы
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;

  try {
    // Отправка на Pipedream / webhook
    await fetch("https://eo41x5kvdf5kqs1.m.pipedream.net", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone })
    });

    // Показать сообщение об успешной отправке
    form.innerHTML = '<div class="success">✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.</div>';

  } catch (err) {
    console.error(err);
    alert("Ошибка отправки, попробуйте позже.");
    btn.disabled = false;
    btn.textContent = "Отправить заявку";
  }
});
