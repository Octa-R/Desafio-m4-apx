function Header(el) {
  const headerEl = document.createElement("header");
  headerEl.classList.add("header")
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
      <img class="header__burger-closed" src="./img/closed.svg"></img>
      <div class="header__window">
        <div class="header__burger-container">
          <img class="header__burger-open" src="./img/open.svg"></img>
        </div>
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
  `
  function toggleVisibility(el) {
    el.classList.toggle("visible")
  }
  const burgerClosed = headerEl.querySelector(".header__burger-closed");
  const burgerOpen = headerEl.querySelector(".header__burger-open");
  const headerWindow = headerEl.querySelector(".header__window");

  burgerClosed.addEventListener("click",()=>toggleVisibility(headerWindow));
  burgerOpen.addEventListener("click",()=>toggleVisibility(headerWindow));

  el.prepend(headerEl)
}

