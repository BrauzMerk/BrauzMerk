document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) {
    alert("Форма не найдена");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: form.querySelector('input[name="name"]').value,
      email: form.querySelector('input[name="email"]').value,
      phone: form.querySelector('input[name="phone"]').value
    };

    fetch(https://eo41x5kvdf5kqs1.m.pipedream.net, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(() => alert("Отправлено"))
    .catch(() => alert("Ошибка отправки"));
  });
});
