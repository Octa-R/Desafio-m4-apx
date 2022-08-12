function Contact(el) {
  const contactEl = document.createElement("form");
  contactEl.classList.add("contact__form");

  contactEl.innerHTML = `
    <h2 class="contact__form__title">Contacto</h2>
      <div class="contact__form__input-container">
        <label class="contact__form__label">
          <p>Nombre:</p>
          <input name="name" type="text" class="contact__form__input">
        </label>
        <label class="contact__form__label">
          <p>E-mail: </p>
          <input name="email" type="email" class="contact__form__input">
        </label>
        <label class="contact__form__label">
          <p>Mensaje:</p>
          <textarea name="text" class="contact__form__input"></textarea>
        </label> 
      <button class="contact__form__button">Enviar</button>
    </div>
    `;

  contactEl.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const formData = new FormData(contactEl);
    const values = [...formData.entries()];

    const url = "https://apx-api.vercel.app/api/utils/dwf";
    const body = {
      to: "ruarteoctavio8@gmail.com",
      message: `
      de: ${values[0][1]} 
      email: ${values[1][1]}
      mensaje: ${values[2][1]}
    `
    };

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body)
    });

  });

  el.append(contactEl);
}