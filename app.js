const hamburgerIcon = document.querySelector(".header__hamburger");
const closeIcon = document.querySelector(".menu__close");
const menuMobile = document.querySelector(".menu__mobile");
const features = document.getElementById("features");
const company = document.getElementById("company");
const featureArrow = document.getElementById("features-arrow");
const companyArrow = document.getElementById("company-arrow");
const featureMenu = document.getElementById("features-menu");
const companyMenu = document.getElementById("company-menu");
const body = document.getElementById("body");
const desktopFeatures = document.getElementById("desktop-features");
const desktopCompany = document.getElementById("desktop-company");
const desktopFeaturesMenu = document.getElementById("desktop-features-menu");
const desktopCompanyMenu = document.getElementById("desktop-company-menu");
const desktopFeaturesArrow = document.getElementById("desktop-features-arrow");
const desktopCompanyArrow = document.getElementById("desktop-company-arrow");

hamburgerIcon.addEventListener("click", () => {
  menuMobile.classList.remove("hidden");
  body.classList.add("overlay-activo");
});

closeIcon.addEventListener("click", () => {
  menuMobile.classList.add("hidden");
  body.classList.remove("overlay-activo");
  featureMenu.classList.add("hidden");
  companyMenu.classList.add("hidden");
  featureArrow.src = "./images/icon-arrow-down.svg";
  companyArrow.src = "./images/icon-arrow-down.svg";
});

features.addEventListener("click", () => {
  if (!featureMenu.classList.contains("hidden")) {
    featureMenu.classList.add("hidden");
    featureArrow.src = "./images/icon-arrow-down.svg";
  } else {
    featureMenu.classList.remove("hidden");
    featureArrow.src = "./images/icon-arrow-up.svg";
    companyMenu.classList.add("hidden");
    companyArrow.src = "./images/icon-arrow-down.svg";
  }
});

company.addEventListener("click", () => {
  if (!companyMenu.classList.contains("hidden")) {
    companyMenu.classList.add("hidden");
    companyArrow.src = "./images/icon-arrow-down.svg";
  } else {
    companyMenu.classList.remove("hidden");
    companyArrow.src = "./images/icon-arrow-up.svg";
    featureMenu.classList.add("hidden");
    featureArrow.src = "./images/icon-arrow-down.svg";
  }
});

desktopFeatures.addEventListener("click", () => {
  if (!desktopFeaturesMenu.classList.contains("hidden")) {
    desktopFeaturesMenu.classList.add("hidden");
    desktopFeaturesArrow.src = "./images/icon-arrow-down.svg";
  } else {
    desktopFeaturesMenu.classList.remove("hidden");
    desktopFeaturesArrow.src = "./images/icon-arrow-up.svg";
    desktopCompanyMenu.classList.add("hidden");
    desktopCompanyArrow.src = "./images/icon-arrow-down.svg";
    s;
  }
});

desktopCompany.addEventListener("click", () => {
  if (!desktopCompanyMenu.classList.contains("hidden")) {
    desktopCompanyMenu.classList.add("hidden");
    desktopCompanyArrow.src = "./images/icon-arrow-down.svg";
  } else {
    desktopCompanyMenu.classList.remove("hidden");
    desktopCompanyArrow.src = "./images/icon-arrow-up.svg";
    desktopFeaturesMenu.classList.add("hidden");
    desktopFeaturesArrow.src = "./images/icon-arrow-down.svg";
  }
});

document.addEventListener("click", (e) => {
  if (
    !closeIcon.contains(e.target) &&
    !menuMobile.contains(e.target) &&
    !hamburgerIcon.contains(e.target) &&
    !desktopFeatures.contains(e.target) &&
    !desktopCompany.contains(e.target)
  ) {
    menuMobile.classList.add("hidden");
    body.classList.remove("overlay-activo");
    featureMenu.classList.add("hidden");
    companyMenu.classList.add("hidden");
    featureArrow.src = "./images/icon-arrow-down.svg";
    companyArrow.src = "./images/icon-arrow-down.svg";
    desktopFeaturesMenu.classList.add("hidden");
    desktopCompanyMenu.classList.add("hidden");
    desktopFeaturesArrow.src = "./images/icon-arrow-down.svg";
    desktopCompanyArrow.src = "./images/icon-arrow-down.svg";
  }
});
