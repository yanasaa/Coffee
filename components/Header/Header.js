let currentUrl = window.location.href;
const homeLink = window.location.origin;

class Header {
  render() {
    console.log(homeLink);
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
              <a class="link-line" href="${
                currentUrl.endsWith("menu.html")
                  ? homeLink + "/Coffee/index.html#favorite-coffee"
                  : "#favorite-coffee"
              }"
                >Favorite coffee</a
              >
            </li>
            <li class="header-menu_item">
              <a class="link-line" href="${
                currentUrl.endsWith("menu.html")
                  ? homeLink + "Coffee/index.html/#about"
                  : "#about"
              }">About</a>
            </li>
            <li class="header-menu_item">
              <a class="link-line" href="${
                currentUrl.endsWith("index.html")
                  ? "Coffee/index.html#mobile"
                  : "#mobile"
              }">Mobile app</a>
            </li>
            <li class="header-menu_item">
              <a class="link-line" href="#contacts">Contact us</a>
            </li>
          </ul>
        </nav>
        <div class="menu-link">
        ${
          currentUrl.endsWith("menu.html")
            ? `<span>Menu<span class="menu-link_icon"></span></span>`
            : `<a class="link-line" href="menu.html">Menu<span class="menu-link_icon"></span></a>`
        }         
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
