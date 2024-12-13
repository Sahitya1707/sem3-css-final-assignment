const header = document.querySelector("header"),
  footer = document.querySelector("footer"),
  tickerSection = document.querySelector(".ticker-section"),
  productThumb = document.querySelector("#product-thumb");
const path = window.location.pathname;
window.onload = async () => {
  const headerComponent = await loadHtml("../view/shared/header.html");
  const footerComponent = await loadHtml("../view/shared/footer.html");
  const productCubeComponent = await loadHtml("../view/productcube.html");

  header.innerHTML = headerComponent;
  footer.innerHTML = footerComponent;
  // controlling light and dark mode only after header component is availbe
  if (headerComponent) {
    // ignore the below code as i was trying to implement dark mode and white mode but images are jpg and has background white which is making website look back when switching to dark mode.
    // console.log();
    // const dark = document.querySelector(".dark");
    // const light = document.querySelector(".light");
    // const body = document.querySelector("body");
    // dark.addEventListener("click", () => {
    //   dark.classList.add("hidden");
    //   light.classList.remove("hidden");
    //   body.classList.add("dark");
    // });
    // light.addEventListener("click", () => {
    //   body.classList.remove("dark");
    //   light.classList.add("hidden");
    //   dark.classList.remove("hidden");
    // });
    // const

    // controlling hamburger menu, close
    const menu = document.querySelector(".menu");
    const cross = document.querySelector(".cross");
    const navItem = document.querySelector(".nav-item");

    menu.addEventListener("click", () => {
      menu.classList.add("hidden");
      cross.classList.remove("hidden");
      navItem.style.overflow = "auto";
      navItem.style.height = "130px";

      // navItem.classList.remove("hide-menu");
    });
    cross.addEventListener("click", () => {
      cross.classList.add("hidden");
      // navItem.style.overflow = "hidden";
      navItem.style.height = "0px";
      menu.classList.remove("hidden");
      // navItem.classList.add("hide-menu");
    });
  }
  if (
    path === "/about.html" ||
    path === "/service.html" ||
    path === "/about" ||
    path === "/service"
  ) {
    const main = document.querySelector("#main");
    main.innerHTML += productCubeComponent;
  }

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

if (path === "/" || path === "/index.html") {
  const loadProductThumb = async () => {
    try {
      const productThumbData = await fetch("../data/product/product.json");
      const data = await productThumbData.json();
      // looping through product data
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
}
