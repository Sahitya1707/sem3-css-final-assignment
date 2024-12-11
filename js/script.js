const header = document.querySelector("header"),
  footer = document.querySelector("footer"),
  tickerSection = document.querySelector(".ticker-section");

window.onload = async () => {
  const path = window.location.pathname;
  const headerComponent = await loadHtml("../view/shared/header.html");
  const footerComponent = await loadHtml("../view/shared/footer.html");

  header.innerHTML = headerComponent;
  footer.innerHTML = footerComponent;
  console.log(path);
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
