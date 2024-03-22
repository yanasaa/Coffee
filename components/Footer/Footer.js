class Footer {
  render() {
    let footerContent = `<div class="container footer-container">
      
        <div class="social">
          <h2 class="section-title footer-title">
            Sip, Savor, Smile.
            <span class="acent-color">It’s coffee time!</span>
          </h2>
          <div class="social-icons">
            <div class="social-icon">
              <span class="social-icon_twitter"></span>
            </div>
            <div class="social-icon">
            <span class="social-icon_instagram"></span>
              
            </div>
            <div class="social-icon">
            <span class="social-icon_facebook"></span>
            </div>
          </div>
        </div>
        <div class="contacts">
          <h4 class="contacts-title">Contact us</h4>
          <div class="contacts-text" title="Open map">
            <a class="link-line"
              href="https://maps.app.goo.gl/oDakwf3URBvj7USPA"
              target="_blank"
            >
                <span class="contacts-text__icon contacts-text__icon_address"></span>
                8558 Green Rd., LA
            </a>
          </div>
          <div class="contacts-text ">
            <a class="link-line" href="tel:+16035550123" target="_blank">
            <span class="contacts-text__icon contacts-text__icon_phone"></span>
              +1 (603) 555-0123
            </a>
          </div>
          <div class="contacts-text">
            <span class="contacts-text__icon contacts-text__icon_clock"></span>
            Mon-Sat: 9:00 AM – 23:00 PM
          </div>
        </div>
      
    </div>`;

    ROOT_FOOTER.innerHTML = footerContent;
  }
}

const footer = new Footer();
footer.render();
