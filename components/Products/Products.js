class Products {
  render() {
    let menuCategory = coffee;
    // menuCategory= tea;
    let htmlCatalog = "";
    menuCategory.forEach(
      ({ id, title, image, price, currency, description }) => {
        htmlCatalog += `<div class="card">
        <div class="card-img" style="background-image: url('${image}');">
          
        </div>
        <div class="card-info">
          <h3 class="card-title">${title}</h3>
          <p class="card-text">
           ${description}
          </p>
          <p class="card-price">${currency} ${price.toFixed(2)}</p>
        </div>
      </div>`;
      }
    );

    const gallery = `<section class="filter">
    <div class="container"><h1 class="section-title menu-title">
    Behind each of our cups hides an
    <span class="acent-color">amazing surprise</span>
  </h1>
  <div class="menu-buttons">
  <button class="menu-button active-tag">
    <img
      class="menu-button-img"
      src="img/icons/iconcoffee.png"
      alt="Coffee icon"
    />
    <span class="menu-button-text">Coffee</span>
  </button>
  <button class="menu-button">
    <img
      class="menu-button-img"
      src="img/icons/icontea.png"
      alt="Tea icon"
    />
    <span class="menu-button-text">Tea</span>
  </button>
  <button class="menu-button">
    <img
      class="menu-button-img"
      src="img/icons/icondes.png"
      alt="Dessert icon"
    />
    <span class="menu-button-text">Dessert</span>
  </button>
</div><div class="menu-gallery">${htmlCatalog}</div></div>
  </section>
    
    
    
    `;

    ROOT_PRODUCTS.innerHTML = gallery;
  }
}

const productsPage = new Products();
productsPage.render();
