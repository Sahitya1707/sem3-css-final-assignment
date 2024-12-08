const header = document.querySelector("header"),
  footer = document.querySelector("footer");

console.log(header, footer);

window.onload = async () => {
  const headerComponent = await loadHtml("../view/shared/header.html");
  const footerComponent = await loadHtml("../view/shared/footer.html");

  header.innerHTML = headerComponent;
  footer.innerHTML = footerComponent;
};
// function created to to load html
const loadHtml = (location) => {
  console.log(location);
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
