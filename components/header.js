function Header(el) {
  const headerEl = document.createElement("header");
  headerEl.classList.add("header");
  headerEl.innerHTML = `
    <a href="./">
      <div class="header__logo">OCTA</div>
    </a>
    <nav class="header__nav">
      <ul class="header__links">
        <li class="header__links-link">
          <a href="./portfolio.html">Portfolio</a>
        </li>
        <li class="header__links-link">
          <a href="./services.html">Servicios</a>
        </li>
        <li class="header__links-link"> 
          <a href="./contact.html">Contacto</a>
        </li>
      </ul>
      <div class="header__menu-btn">
        <div class="header__menu-btn__burger"></div>
      </div>
      <div class="header__window">
        <ul class="header__window-links">
          <li class="header__window-link">
            <a href="./portfolio.html">Portfolio</a>
          </li>
          <li class="header__window-link">
            <a href="./services.html">Servicios</a>
          </li>
          <li class="header__window-link"> 
            <a href="./contact.html">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  `;
  const menuBtn = headerEl.querySelector(".header__menu-btn");
  const headerWindow = headerEl.querySelector('.header__window');
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    headerWindow.classList.toggle("visible");

  });

  el.prepend(headerEl);
}

