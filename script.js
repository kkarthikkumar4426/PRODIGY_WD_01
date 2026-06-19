const nav = document.getElementById("mainNav");
const menuLinks = document.querySelectorAll(".menu a");

function handleScroll() {
  const scrollY = window.scrollY || window.pageYOffset;
  if (scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

function handleHover(event) {
  menuLinks.forEach((link) => link.classList.remove("hovered"));
  event.currentTarget.classList.add("hovered");
}

function handleMouseLeave(event) {
  event.currentTarget.classList.remove("hovered");
}

window.addEventListener("scroll", handleScroll);
menuLinks.forEach((link) => {
  link.addEventListener("mouseenter", handleHover);
  link.addEventListener("mouseleave", handleMouseLeave);
});

handleScroll();
