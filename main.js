function isElementVisible(element) {
  let rect = element.getBoundingClientRect();
  let windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  let windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight + 200 &&
    rect.right <= windowWidth
  );
}

console.log(window.innerHeight);

function handleScroll() {
  let contentElement = document.querySelectorAll(".toAnimate");

  contentElement.forEach((element) => {
    element.classList.add("animate__animated");
    if (isElementVisible(element)) {
      if (element.classList.contains("hero-shadow")) {
        element.classList.add("animate__slideInDown");
      } else if (element.classList.contains("photo")) {
        element.classList.add("photoBlur");
      } else if (element.classList.contains("skill")) {
        element.classList.add("animate__zoomIn");
      } else if (
        element.classList.contains("frontend") &&
        window.innerWidth >= 1024
      ) {
        element.classList.add("animate__slideInLeft");
      } else if (
        element.classList.contains("testing") &&
        window.innerWidth >= 1024
      ) {
        element.classList.add("animate__slideInRight");
      } else if (element.classList.contains("certContainer")) {
        element.classList.add("animate__zoomIn");
      }
    }
  });
}

window.addEventListener("scroll", handleScroll);
