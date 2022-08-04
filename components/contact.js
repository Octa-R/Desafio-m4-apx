function Contact(el) {
    const contactEl = document.createElement("form")
    contactEl.classList.add("contact__form")

    contactEl.innerHTML = `
        <h2 class="contact__form__title">Contacto</h2>
        <div class="contact__form__input-container">
          <label class="contact__form__label">
              <p>Nombre:</p>
              <input type="text" class="contact__form__input">
          </label>
          <label class="contact__form__label">
              <p>E-mail: </p>
              <input type="email" class="contact__form__input">
          </label>
          <label class="contact__form__label">
              <p>Mensaje:</p>
              <textarea class="contact__form__input">
              </textarea>
          </label> 
          <button class="contact__form__button">Enviar</button>
        </div>
    `

    contactEl.addEventListener("submit",(evt) => {
        evt.preventDefault();
        console.log("se envio el form")
    })

    el.append(contactEl)
}