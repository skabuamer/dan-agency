$(document).ready(function () {
    $(".single-banner").slick();
});

jQuery(document).ready(function ($) {
    $(".counter").counterUp({
        delay: 10,
        time: 1000,
    });
});

window.addEventListener("scroll", () => {
    // sticky header
    document.querySelector("header").classList.toggle("sticky", window.scrollY > 100);

    const banner = document.querySelector("#banner-section");
    // console.log(bannerHeight.clientHeight);
    // back to top button hide/show
    document.querySelector(".back__to__top").classList.toggle("active", window.scrollY > banner.clientHeight);
});

// active nav item change
const navs = document.querySelectorAll(".nav-link");
for (let i = 0; i < navs.length; i++) {
    const element = navs[i];

    element.addEventListener("click", () => {
        const current = document.querySelector(".active");
        current.classList.remove("active");
        element.classList.add("active");
    });
}

// back to top button function
document.querySelector(".back__to__top").addEventListener("click", () => {
    window.scrollTo(0, 0);
});

// preloader
document.body.style.position = "fixed";
window.addEventListener("load", () => {
    document.body.style.position = "";
    document.querySelector(".preloader").style.display = "none";
});

// portfolio gallery popup image
const popupContainer = document.querySelector(".popup-img-container");
const allPortfolios = document.querySelectorAll(".portfolio-img");
const expandBtn = document.querySelectorAll(".view-icon");

for (let i = 0; i < allPortfolios.length; i++) {
    const singlePortfolio = allPortfolios[i];
    // const singleExpBtn = expandBtn[i];
    expandBtn[i].addEventListener("click", () => {
        popupContainer.style.opacity = 1;
        popupContainer.style.pointerEvents = "auto";
        popupContainer.classList.add("zoomIn");
        popupContainer.classList.remove("zoomOut");
        document.querySelector(".targeted-img").src = singlePortfolio.attributes[1].nodeValue;
    });
}

document.querySelector(".popup-img-container span").addEventListener("click", () => {
    popupContainer.style.opacity = 0;
    popupContainer.style.pointerEvents = "none";
    popupContainer.classList.remove("zoomIn");
    popupContainer.classList.add("zoomOut");
});
