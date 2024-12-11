const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

let product;
const loadProduct = async () => {
  try {
    const response = await fetch("../data/product/product.json");
    const products = await response.json();
    product = products[productId];
  } catch (err) {
    console.log(err);
  }
  if (product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-description").textContent =
      product.description;
    document.getElementById("product-price").textContent = product.price;
  } else {
    document.querySelector(
      ".container"
    ).innerHTML = `<p class="product-not-found">❌ Product not found.</p>`;
  }
};

loadProduct();
