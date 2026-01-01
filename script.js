const BOT_TOKEN = 8515711712:AAFzTpjofV2CEUFbjpnSQOxx88nt1NVBkcg; // вставь свой токен только у себя
const CHAT_ID = 5247142706;       // вставь свой chat_id только у себя

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.name.value;
    const email = this.email.value;
    const phone = this.phone.value;

    const message = `🐱‍👤 Новая заявка с сайта:\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => {
            if(response.ok){
                document.getElementById("contactForm").style.display = "none";
                document.getElementById("thankyou").style.display = "block";
            } else {
                alert("Ошибка отправки. Попробуйте еще раз.");
            }
        })
        .catch(err => alert("Ошибка сети: " + err));
});
