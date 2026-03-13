const menuToggle = document.querySelector(".header__menu-toggle");
const closeMenuButton = document.querySelector(".mobile-menu__close");
const menuMobile = document.querySelector(".mobile-menu");
const body = document.body;

const mobileFeatures = document.getElementById("mobile-menu-features");
const mobileCompany = document.getElementById("mobile-menu-company");
const mobileFeaturesIcon = document.getElementById("mobile-menu-features-icon");
const mobileCompanyIcon = document.getElementById("mobile-menu-company-icon");
const mobileFeaturesSubmenu = document.getElementById("mobile-menu-features-submenu");
const mobileCompanySubmenu = document.getElementById("mobile-menu-company-submenu");

const desktopFeatures = document.getElementById("desktop-menu-features");
const desktopCompany = document.getElementById("desktop-menu-company");
const desktopFeaturesIcon = document.getElementById("desktop-menu-features-icon");
const desktopCompanyIcon = document.getElementById("desktop-menu-company-icon");
const desktopFeaturesSubmenu = document.getElementById("desktop-menu-features-submenu");
const desktopCompanySubmenu = document.getElementById("desktop-menu-company-submenu");

menuToggle.addEventListener("click", () => {
  menuMobile.classList.remove("hidden");
  body.classList.add("overlay-active");
});

closeMenuButton.addEventListener("click", () => {
  menuMobile.classList.add("hidden");
  body.classList.remove("overlay-active");
  mobileFeaturesSubmenu.classList.add("hidden");
  mobileCompanySubmenu.classList.add("hidden");
  mobileFeaturesIcon.src = "./images/icon-arrow-down.svg";
  mobileCompanyIcon.src = "./images/icon-arrow-down.svg";
});

mobileFeatures.addEventListener("click", () => {
  if (!mobileFeaturesSubmenu.classList.contains("hidden")) {
    mobileFeaturesSubmenu.classList.add("hidden");
    mobileFeaturesIcon.src = "./images/icon-arrow-down.svg";
  } else {
    mobileFeaturesSubmenu.classList.remove("hidden");
    mobileFeaturesIcon.src = "./images/icon-arrow-up.svg";
    mobileCompanySubmenu.classList.add("hidden");
    mobileCompanyIcon.src = "./images/icon-arrow-down.svg";
  }
});

mobileCompany.addEventListener("click", () => {
  if (!mobileCompanySubmenu.classList.contains("hidden")) {
    mobileCompanySubmenu.classList.add("hidden");
    mobileCompanyIcon.src = "./images/icon-arrow-down.svg";
  } else {
    mobileCompanySubmenu.classList.remove("hidden");
    mobileCompanyIcon.src = "./images/icon-arrow-up.svg";
    mobileFeaturesSubmenu.classList.add("hidden");
    mobileFeaturesIcon.src = "./images/icon-arrow-down.svg";
  }
});

desktopFeatures.addEventListener("click", () => {
  if (!desktopFeaturesSubmenu.classList.contains("hidden")) {
    desktopFeaturesSubmenu.classList.add("hidden");
    desktopFeaturesIcon.src = "./images/icon-arrow-down.svg";
  } else {
    desktopFeaturesSubmenu.classList.remove("hidden");
    desktopFeaturesIcon.src = "./images/icon-arrow-up.svg";
    desktopCompanySubmenu.classList.add("hidden");
    desktopCompanyIcon.src = "./images/icon-arrow-down.svg";
  }
});

desktopCompany.addEventListener("click", () => {
  if (!desktopCompanySubmenu.classList.contains("hidden")) {
    desktopCompanySubmenu.classList.add("hidden");
    desktopCompanyIcon.src = "./images/icon-arrow-down.svg";
  } else {
    desktopCompanySubmenu.classList.remove("hidden");
    desktopCompanyIcon.src = "./images/icon-arrow-up.svg";
    desktopFeaturesSubmenu.classList.add("hidden");
    desktopFeaturesIcon.src = "./images/icon-arrow-down.svg";
  }
});

document.addEventListener("click", (e) => {
  if (
    !closeMenuButton.contains(e.target) &&
    !menuMobile.contains(e.target) &&
    !menuToggle.contains(e.target) &&
    !desktopFeatures.contains(e.target) &&
    !desktopCompany.contains(e.target)
  ) {
    menuMobile.classList.add("hidden");
    body.classList.remove("overlay-active");
    mobileFeaturesSubmenu.classList.add("hidden");
    mobileCompanySubmenu.classList.add("hidden");
    mobileFeaturesIcon.src = "./images/icon-arrow-down.svg";
    mobileCompanyIcon.src = "./images/icon-arrow-down.svg";
    desktopFeaturesSubmenu.classList.add("hidden");
    desktopCompanySubmenu.classList.add("hidden");
    desktopFeaturesIcon.src = "./images/icon-arrow-down.svg";
    desktopCompanyIcon.src = "./images/icon-arrow-down.svg";
  }
});
