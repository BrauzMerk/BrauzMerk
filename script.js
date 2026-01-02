document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value;
  const email = this.email.value;
  const phone = this.phone.value;

  fetch("https://eo41x5kvdf5kqs1.m.pipedream.net", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone
    })
  })
  .then(() => {
    alert("Заявка отправлена!");
    this.reset();
  })
  .catch(() => {
    alert("Ошибка отправки");
  });
});
