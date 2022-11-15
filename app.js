let container = document.querySelectorAll(".container-items");
let lorem = document.querySelectorAll(".lorem");
let arrow = document.querySelectorAll(".arrow");

container[0].addEventListener("click", () => {
  arrow[0].style.transform = "rotate(180deg)";
  if (lorem[0].classList.contains("active")) {
    lorem[0].classList.remove("active");
  } else {
    arrow[0].style.transform = "rotate(360deg)";
    lorem[0].classList.add("active");
    lorem[1].classList.remove("active");
    lorem[2].classList.remove("active");
  }
});
container[1].addEventListener("click", () => {
  arrow[1].style.transform = "rotate(180deg)";
  if (lorem[1].classList.contains("active")) {
    lorem[1].classList.remove("active");
  } else {
    arrow[1].style.transform = "rotate(360deg)";
    lorem[0].classList.remove("active");
    lorem[2].classList.remove("active");
    lorem[1].classList.add("active");
  }
});
container[2].addEventListener("click", () => {
  arrow[2].style.transform = "rotate(180deg)";
  if (lorem[2].classList.contains("active")) {
    lorem[2].classList.remove("active");
  } else {
    arrow[2].style.transform = "rotate(360deg)";
    lorem[1].classList.remove("active");
    lorem[0].classList.remove("active");
    lorem[2].classList.add("active");
  }
});
