class HomePage {
  render() {
    let homePage = `<div class="container">
        <section class="enjoy" id="enjoy">
          <div class="enjoy__video">
            <video
              src="img/video.mp4"
              class="enjoy__video_media"
              autoplay
              muted
              loop
            ></video>
            <div class="enjoy-block">
              <div class="enjoy-content">
                <h1 class="enjoy-title section-title">
                  <span class="acent-color">Enjoy</span> premium coffee at our
                  charming cafe
                </h1>
                <p class="enjoy-text">
                  With its inviting atmosphere and delicious coffee options,
                  the Coffee House Resource is a popular destination for
                  coffee lovers and those seeking a warm and inviting space to
                  enjoy their favorite beverage.
                </p>
                <button class="enjoy-menu_button" id="menu-button">
                  Menu<span class="menu-link_icon"></span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class="favorite-coffee" id="favorite-coffee">
        <div class="container favorite-coffee__container">
          <h2 class="section-title">
            Choose your <span class="acent-color">favorite</span> coffee
          </h2>
          <div class="slider">
            <div class="slider-line">
              <div class="slider-card">
                <div class="slider-content">
                  <div class="slider-image">
                    <img
                      src="img/coffee-slider-1.png"
                      alt="Frappuccino image"
                    />
                  </div>
                  <h4 class="slider-title">S’mores Frappuccino</h4>
                  <p class="slider-text">
                    This new drink takes an espresso and mixes it with brown
                    sugar and cinnamon before being topped with oat milk.
                  </p>
                  <p class="slider-price">$5.50</p>
                </div>
              </div>
              <div class="slider-card">
                <div class="slider-content">
                  <div class="slider-image">
                    <img
                      src="img/coffee-slider-2.png"
                      alt="Caramel Macchiato image"
                    />
                  </div>
                  <h4 class="slider-title">Caramel Macchiato</h4>
                  <p class="slider-text">
                    Fragrant and unique classic espresso with rich
                    caramel-peanut syrup, with cream under whipped thick foam.
                  </p>
                  <p class="slider-price">$5.00</p>
                </div>
              </div>
              <div class="slider-card">
                <div class="slider-content">
                  <div class="slider-image">
                    <img
                      src="img/coffee-slider-3.png"
                      alt="Ice coffee image"
                    />
                  </div>
                  <h4 class="slider-title">Ice coffee</h4>
                  <p class="slider-text">
                    A popular summer drink that tones and invigorates.
                    Prepared from coffee, milk and ice.
                  </p>
                  <p class="slider-price">$4.50</p>
                </div>
              </div>
            </div>
            <button class="slider-btn slider-btn-prev">
              <img
                src="img/arrowLeft.png"
                alt="Arrow left"
              />
            </button>
            <button class="slider-btn slider-btn-next">
              <img
                src="img/arrowRight.png"
                alt="Arrow right"
              />
            </button>
            <div class="slider-controls">
              <div class="slider-controller">
                <div class="slider-controller_line"></div>
              </div>
              <div class="slider-controller">
                <div class="slider-controller_line"></div>
              </div>
              <div class="slider-controller">
                <div class="slider-controller_line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about" id="about">
        <div class="container">
          <h2 class="section-title about-title">
            Resource is
            <span class="acent-color">the perfect and cozy place </span>where
            you can enjoy a variety of hot beverages, relax, catch up with
            friends, or get some work done.
          </h2>
          <div class="about-images">
            <div class="about-img">
              <img
                src="img/about-1.jpg"
                alt="Girl drinks coffee photo"
              />
            </div>
            <div class="about-img about-img-secondary">
              <img
                src="img/about-3.jpg"
                alt="Cup of coffee photo"
              />
            </div>
            <div class="about-img about-img-secondary">
              <img
                src="img/about-2.jpg"
                alt="Man drinks coffee photo"
              />
            </div>
            <div class="about-img">
              <img
                src="img/about-4.jpg"
                alt="Couple drink coffee photo"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="mobile" id="mobile">
        <div class="container">
          <div class="mobile-block">
            <div class="mobile-content">
              <h2 class="mobile-title section-title">
                <span class="acent-color">Download</span> our apps to start
                ordering
              </h2>
              <p class="mobile-text">
                Download the Resource app today and experience the comfort of
                ordering your favorite coffee from wherever you are
              </p>
              <div class="mobile-buttons">
                <button class="mobile-btn">
                  <span
                    class="mobile-btn__icon mobile-btn__icon_apple"
                  ></span>
                  <span class="mobile-btn__text">
                    <span class="mobile-btn__text_small"
                      >Available on the</span
                    >
                    <span class="download-text_big">App Store</span>
                  </span>
                </button>
                <button class="mobile-btn">
                  <span
                    class="mobile-btn__icon mobile-btn__icon_google"
                  ></span>
                  <span class="mobile-btn__text">
                    <span class="mobile-btn__text_small">Available on</span>
                    <span class="mobile-btn__text_big">Google Play</span>
                  </span>
                </button>
              </div>
            </div>
            <div class="mobile-image">
              <img
                src="img/mobile-screens.png"
                alt="Mobile Photo"
              />
            </div>
          </div>
        </div>
      </section>`;

    ROOT_HOME.innerHTML = homePage;
  }
}

const home = new HomePage();
home.render();

const menuBtn = document.getElementById("menu-button");
menuBtn.addEventListener("click", () => {
  document.location.href = "menu.html";
});
