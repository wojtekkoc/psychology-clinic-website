// Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    951: {
      slidesPerView: 2,
    }
  }
});


// header - funkcja do obsługi zdarzenia przewijania strony
const header = document.querySelector("header > .nav-desktop > .wrapper");
let lastScrollPosition = window.scrollY;

function handleScroll() {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    header.style.height = "108px";
  } else {
    header.style.height = "148px";
  }

  lastScrollPosition = currentScrollPosition;
}

window.addEventListener("scroll", handleScroll);


// nawigacja mobile
const burgerBtn = document.querySelector("header > .nav-mobile > .top > .burger-container");
const burgerChildren = document.querySelectorAll("header > .nav-mobile > .top > .burger-container span");
const navMobile = document.querySelector("header > .nav-mobile");
const navMobileUl = document.querySelector("header > .nav-mobile > ul");
const navMobileAElements = document.querySelectorAll("header > .nav-mobile > ul li > a");

const navMobileLogo = document.querySelector("header > .nav-mobile > .top > .logo-container");

const handleNavMobile = () => {
  burgerChildren.forEach(burgerChild => {
    burgerChild.classList.toggle("active");
  });
  navMobile.classList.toggle("active");
  navMobileUl.classList.toggle("active");
}

burgerBtn.addEventListener("click", handleNavMobile)

navMobileAElements.forEach(navMobileAElement => {
  navMobileAElement.addEventListener("click", handleNavMobile)
})

navMobileLogo.addEventListener("click", () => {
  if (navMobile.classList.contains("active")) {
    handleNavMobile();
  }
});