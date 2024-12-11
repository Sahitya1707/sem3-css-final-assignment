const rotateCube = () => {
  let cube = document.querySelector(".cube");
  console.log(cube);
  const slide = ["front", "right", "back", "left", "top", "bottom"];
  console.log(slide);
  let haveIt = [];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let nextValue = "";
  let currentClass = "";
  let currentValue = "";
  let showClass = "";
  const changeSlide = () => {
    if (currentClass) {
      cube.classList.remove(currentClass);
    }

    currentValue = getRandomInt(6);

    showClass = `show-${slide[currentValue]}`;

    cube.classList.add(showClass);
    currentClass = showClass;
  };
  setInterval(changeSlide, 3000);
};
// only rotate the cube after cube template is load, so i have set after 1 sec
setTimeout(rotateCube, 5000);
