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
          <div class="contacts-text">
            <a
              href="https://maps.app.goo.gl/oDakwf3URBvj7USPA"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.6663 8.33329C16.6663 12.0152 9.99967 18.3333 9.99967 18.3333C9.99967 18.3333 3.33301 12.0152 3.33301 8.33329C3.33301 4.65139 6.31778 1.66663 9.99967 1.66663C13.6816 1.66663 16.6663 4.65139 16.6663 8.33329Z"
                  stroke="#E1D4C9"
                  stroke-width="1.5"
                />
                <path
                  d="M10.0003 9.16667C10.4606 9.16667 10.8337 8.79357 10.8337 8.33333C10.8337 7.8731 10.4606 7.5 10.0003 7.5C9.54009 7.5 9.16699 7.8731 9.16699 8.33333C9.16699 8.79357 9.54009 9.16667 10.0003 9.16667Z"
                  fill="#E1D4C9"
                  stroke="#E1D4C9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
                <span class="contacts-text__line">8558 Green Rd., LA</span>
            </a>
          </div>
          <div class="contacts-text">
            <a href="tel:+16035550123" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15.0984 12.2516L11.6665 12.9166C9.34845 11.7531 7.91654 10.4166 7.08321 8.33329L7.72483 4.89154L6.51197 1.66663L3.72946 1.66663C2.60191 1.66663 1.71466 2.59958 1.90108 3.71161C2.29888 6.08454 3.37231 10.0391 6.24987 12.9166C9.27338 15.9401 13.5661 17.3318 16.1378 17.9288C17.299 18.1983 18.3332 17.2908 18.3332 16.0988L18.3332 13.4843L15.0984 12.2516Z"
                  stroke="#E1D4C9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="contacts-text__line">+1 (603) 555-0123</span>
            </a>
          </div>
          <div class="contacts-text link-line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_217_1736)">
                <path
                  d="M10 5L10 10L15 10"
                  stroke="#E1D4C9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39759 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333Z"
                  stroke="#E1D4C9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_217_1736">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span class="contacts-text__line">Mon-Sat: 9:00 AM – 23:00 PM</span>
            
          </div>
        </div>
      
    </div>`;

    ROOT_FOOTER.innerHTML = footerContent;
  }
}

const footer = new Footer();
footer.render();
