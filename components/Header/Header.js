let currentUrl = window.location.href;

class Header {
  render() {
    let headerLinks = `<div class="container">
    <div class="header-menu burger-close" id="header-menu">
      <div class="logo">
        <a href="index.html"
          ><img
            src="img/logo.png"
            alt="Logo"
            class="logo-image"
        /></a>
      </div>
      <div class="header-menu__content" id="header-menu__content">
        <nav class="header-menu_items">
          <ul>
            <li class="header-menu_item">
              <a class="link-line" href="/#favorite-coffee"
                >Favorite coffee</a
              >
            </li>
            <li class="header-menu_item">
              <a class="link-line" href="/#about">About</a>
            </li>
            <li class="header-menu_item">
              <a class="link-line" href="/#mobile">Mobile app</a>
            </li>
            <li class="header-menu_item">
              <a class="link-line" href="#contacts">Contact us</a>
            </li>
          </ul>
        </nav>
        <div class="menu-link">
          <a class="${
            currentUrl === "http://127.0.0.1:5500/index.html" && "link-line"
          }" href="menu.html">Menu<span class="menu-link_icon"></span></a>
          
        </div>
      </div>
      <div class="burger-menu" id="burger-button">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </div>
    </div>
  </div>`;

    ROOT_HEADER.innerHTML = headerLinks;
  }
}

const header = new Header();
header.render();
