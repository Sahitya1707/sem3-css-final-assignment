const header = document.querySelector("header"),
  footer = document.querySelector("footer"),
  tickerSection = document.querySelector(".ticker-section"),
  productThumb = document.querySelector("#product-thumb");

window.onload = async () => {
  const path = window.location.pathname;
  const headerComponent = await loadHtml("../view/shared/header.html");
  const footerComponent = await loadHtml("../view/shared/footer.html");

  header.innerHTML = headerComponent;
  footer.innerHTML = footerComponent;

  // ticker will only in homepage
  if (path === "/" || path === "/index.html") {
    const tickerComponent = await loadHtml("./view/ticker.html");
    tickerSection.innerHTML += tickerComponent;
  } else {
    return null;
  }
};
// function created to to load html
const loadHtml = (location) => {
  const html = fetch(location)
    .then((data) => {
      console.log(data);
      return data.text();
    })
    .then((html) => {
      return html;
    });

  return html;
};

const loadProductThumb = async () => {
  try {
    const productThumbData = await fetch("../data/product/product.json");
    const data = await productThumbData.json();
    console.log([data]);
    for (const key in data) {
      productThumb.innerHTML += `  <a href="/products/products.html?id=${key}">
                <div class="product-item">
                    <div class="product-detail">


                        <img src="${data[key].image}" class="product-img" alt="">
                        <span class="overlap-card"></span>
                        <span class="overlap-product-description">
                           ${data[key].description}
                        </span>
                    </div>
                    <h2 class="product-item-text">${data[key].name}</h2>
                </div>
            </a>`;
    }

    if (data.length > 0) {
      data.forEach((e, i) => {
        productThumb.innerHTML += ` 
       
            `;
      });
    }
  } catch (err) {
    console.log(err);
  }
};
loadProductThumb();
