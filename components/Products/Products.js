let allProducts = [...coffee, ...tea, ...desserts];
class Products {
  render() {
    let htmlCatalog = "";
    console.log(allProducts);
    allProducts.forEach(
      ({ id, title, image, price, currency, description }) => {
        htmlCatalog += `<div class="card">
        <div class="card-img" >
          <img src=${image} alt=${title}/>
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

    const gallery = `<div class="menu-gallery">${htmlCatalog}</div>`;

    ROOT_PRODUCTS.innerHTML = gallery;
  }
}

const productsPage = new Products();
productsPage.render();
