function Footer(el) {
  const footerEl = document.createElement("footer");
  footerEl.classList.add("footer");
  footerEl.innerHTML = `
    <div class="footer__container">
      <div class="footer__logo">OCTA</div>
      <div class="footer__social__container">
        <div class="footer__social-content">
          <p class="footer__social-name">Instagram</p>
          <img class="footer__social-icon" src="./img/ig.svg" >
        </div>
        <div class="footer__social-content">
          <p class="footer__social-name">Linkedin</p>
          <img class="footer__social-icon" src="./img/lnkdn.svg" >
        </div>
        <div class="footer__social-content">
          <p class="footer__social-name">Github</p>
          <img class="footer__social-icon" src="./img/gh.svg" >
        </div>
      </div>
    </div>
    `;
  el.appendChild(footerEl);
}