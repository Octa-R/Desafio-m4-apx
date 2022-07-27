function Header(el) {
  const headerEl = document.createElement("header");
  headerEl.classList.add("header")
  headerEl.innerHTML = `
    <a href="./">
      <img src="https://picsum.photos/200/50" class="header__logo">
      </img>
    </a>
    <nav class="header__nav">
      <ul class="header__links">
        <li class="header__links-link">
          <a href="./portfolio.html">Portfolio</a>
        </li>
        <li class="header__links-link">
          <a href="./services.html">Sevicios</a>
        </li>
        <li class="header__links-link"> 
          <a href="./contact.html">Contacto</a>
        </li>
      </ul>
    </nav>
  `
  el.prepend(headerEl)
}

