function isElementVisible(element) {
  let rect = element.getBoundingClientRect();
  let windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  let windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= windowWidth
  );
}

function handleScroll() {
  let contentElement = document.querySelector(".toAnimate");

  if (
    isElementVisible(contentElement) &&
    !contentElement.classList.contains("animate__animated")
  ) {
    contentElement.classList.add("animate__animated", "animate__slideInDown");
  }
}

window.addEventListener("scroll", handleScroll);
